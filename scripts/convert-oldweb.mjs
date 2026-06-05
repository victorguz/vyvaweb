/**
 * Convierte las páginas de contenido HTML de `vyvaweb/oldweb` en archivos
 * Markdown de Starlight (`src/content/docs`).
 *
 * Extrae el contenido de <main>, elimina el "chrome" (nav, footer, scripts,
 * iconos, etc.), reescribe los enlaces internos *.html a rutas limpias y
 * genera el frontmatter (title + description) que Starlight requiere.
 *
 * Uso: `pnpm run convert`
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OLDWEB = resolve(__dirname, '../../oldweb');
const OUT = resolve(__dirname, '../src/content/docs');

/** Páginas legales a convertir (pricing y faq son páginas Astro en src/pages). */
const PAGES = [
	{
		file: 'privacy.html',
		slug: 'privacy',
		title: 'Política de privacidad',
		fallbackDescription:
			'Cómo Vyva recopila, usa y protege tus datos personales.',
	},
	{
		file: 'terms.html',
		slug: 'terms',
		title: 'Términos de servicio',
		fallbackDescription: 'Términos y condiciones de uso de la plataforma Vyva.',
	},
];

/** Mapea los enlaces *.html antiguos a las nuevas rutas. */
const ROUTE_MAP = {
	'index.html': '/',
	'pricing.html': '/pricing',
	'faq.html': '/faq',
	'privacy.html': '/privacy',
	'terms.html': '/terms',
	'newindex.html': '/',
};

/**
 * Degrada todos los encabezados un nivel (# -> ##, ## -> ###, ...) para que
 * el único H1 de la página sea el `title` del frontmatter (mejor SEO).
 */
function demoteHeadings(markdown) {
	return markdown.replace(/^(#{1,5}) /gm, '#$1 ');
}

/**
 * Elimina líneas que sólo contienen símbolos/iconos sueltos: emojis,
 * flechas de acordeón (↓), bullets decorativos, etc.
 */
function dropLoneSymbolLines(markdown) {
	const symbolOnly =
		/^[\p{Extended_Pictographic}\u2700-\u27BF\u2190-\u21FF\u25A0-\u25FF\u2B00-\u2BFF\uFE0F\u2728\u2705]+$/u;
	return markdown
		.split('\n')
		.filter((rawLine) => {
			const line = rawLine.trim();
			if (line === '') return true;
			if (symbolOnly.test(line)) return false;
			// Líneas muy cortas sin letras ni números (ej. "↓", "»").
			if (line.length <= 2 && !/[\p{L}\p{N}]/u.test(line)) return false;
			return true;
		})
		.join('\n');
}

function rewriteLinks(markdown) {
	let out = markdown;
	for (const [from, to] of Object.entries(ROUTE_MAP)) {
		// index.html#anchor -> /#anchor ; pricing.html -> /pricing
		const re = new RegExp(from.replace('.', '\\.'), 'g');
		out = out.replace(re, to);
	}
	// "/#x" en la home, "/pricing#x" se mantiene; limpia "//" accidental
	out = out.replace(/\]\(\/\/(#)/g, ']($1');
	return out;
}

function buildTurndown() {
	const td = new TurndownService({
		headingStyle: 'atx',
		codeBlockStyle: 'fenced',
		bulletListMarker: '-',
		emDelimiter: '*',
		hr: '---',
	});
	td.use(gfm);
	td.remove(['script', 'style', 'noscript']);
	return td;
}

function convert(page, td) {
	const srcPath = resolve(OLDWEB, page.file);
	if (!existsSync(srcPath)) {
		console.warn(`! Omitido (no existe): ${page.file}`);
		return false;
	}
	const html = readFileSync(srcPath, 'utf8');
	const $ = cheerio.load(html);

	const description =
		$('meta[name="description"]').attr('content')?.trim() ||
		page.fallbackDescription;

	// Elimina todo lo que no es contenido.
	$(
		'#navbar-container, #footer-container, header, footer, nav, script, style, noscript, svg, ion-icon, canvas, link, [id*="modal"], #chart-controls, .chart-container, [aria-hidden="true"]'
	).remove();

	const container = $('main').first().length ? $('main').first() : $('body');

	let markdown = td.turndown(container.html() || '');
	markdown = demoteHeadings(markdown);
	markdown = dropLoneSymbolLines(markdown);
	markdown = rewriteLinks(markdown)
		.replace(/\n{3,}/g, '\n\n')
		.replace(/[ \t]+\n/g, '\n')
		.trim();

	const frontmatter =
		'---\n' +
		`title: ${JSON.stringify(page.title)}\n` +
		`description: ${JSON.stringify(description)}\n` +
		'---\n\n';

	mkdirSync(OUT, { recursive: true });
	const outPath = resolve(OUT, `${page.slug}.md`);
	writeFileSync(outPath, frontmatter + markdown + '\n', 'utf8');
	console.log(`✓ ${page.file} -> src/content/docs/${page.slug}.md`);
	return true;
}

function main() {
	const td = buildTurndown();
	let ok = 0;
	for (const page of PAGES) {
		if (convert(page, td)) ok += 1;
	}
	console.log(`\nConvertidas ${ok}/${PAGES.length} páginas.`);
}

main();
