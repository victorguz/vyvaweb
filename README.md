# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the SSR server to `./.amplify-hosting/`    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## SSR en Amplify

Todo el sitio se arma en el servidor en cada visita (`output: 'server'` con el
adaptador `astro-aws-amplify`). El app de Amplify debe estar en la plataforma
`WEB_COMPUTE` y publicar `.amplify-hosting/` (ver `amplify.yml`).

- **Caché:** `src/middleware.ts` pone el `Cache-Control` de cada página (1 h en
  la CDN, con `stale-while-revalidate` y `stale-if-error`). El directorio de
  negocios usa 5 min (`src/lib/negocios.ts`).
- **Redirecciones:** las de `astro.config.mjs` se escriben en
  `.amplify-hosting/customRules.json` al construir; Astro también las resuelve
  en el servidor.
- **Mapas del sitio:** `sitemap-index.xml`, `sitemap-0.xml` (páginas, blog,
  tutoriales) y `sitemap-negocios.xml`, armados en cada visita.
- **Probar el servidor construido:** `pnpm build` y luego
  `node .amplify-hosting/compute/default/entry.mjs` con la variable `PORT`.

### Directorio de negocios

`/negocios` (buscador) y `/negocios/<slug>` (ficha) muestran solos a todo
negocio activo de estética o salud con el perfil completo (nombre, descripción,
logo, portada, dirección, teléfono o WhatsApp), la ficha y la agenda en línea
encendidas y al menos un servicio para agendar. Vyva solo puede ocultar alguno
con `disabledIds` en el dominio `businessDirectory`. La app lee la misma lista
en `/negocios.json`. Reglas en `src/lib/negocios.ts`; en `astro dev`,
`/negocios/diagnostico.json` dice qué le falta a cada negocio.
Variables opcionales: `VYVA_API_URL`, `VYVA_ID_BUSINESS`, `VYVA_APP_URL`.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
