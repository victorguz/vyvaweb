// Footer Component
function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-[var(--dark)] text-white';
  
  footer.innerHTML = `
    <div class="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <a href="index.html" class="order-1 md:order-none">
        <img
          src="assets/images/vyva_logo_white.svg"
          alt="Vyva Logo"
          class="h-7"
        />
      </a>
      <div class="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-slate-400 order-3 md:order-none">
        <a href="privacy.html" class="hover:text-white transition-colors">
          Política de Privacidad
        </a>
        <a href="terms.html" class="hover:text-white transition-colors">
          Términos de Servicio
        </a>
      </div>
      <p class="text-sm text-slate-400 order-2 md:order-none">
        © 2024 Vyva. Todos los derechos reservados.
      </p>
    </div>
  `;
  
  return footer;
}

// Initialize footer on page load
document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.appendChild(createFooter());
  }
});

