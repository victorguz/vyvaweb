// Navbar Component
function createNavbar() {
  const navbar = document.createElement('header');
  navbar.id = 'header';
  navbar.className = 'bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm';
  
  navbar.innerHTML = `
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <a href="index.html" class="font-bold text-xl text-[var(--primary)]">
        <img
          src="assets/images/vyva_logo_black.svg"
          alt="Vyva Logo"
          class="h-7"
        />
      </a>
      <div class="hidden md:flex space-x-6 items-center">
        <div class="relative" id="features-dropdown-container">
          <button
            id="features-button"
            class="text-[var(--dark)]/80 hover:text-[var(--primary)] transition-colors flex items-center"
          >
            Características
            <span class="ml-1 text-xs">&#9662;</span>
          </button>
          <div
            id="features-menu"
            class="hidden absolute mt-2 w-48 bg-white rounded-[var(--default-radius)] shadow-xl z-20"
          >
            <a
              href="index.html#agendamiento"
              class="block px-4 py-2 text-[var(--dark)]/80 hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
              >Agendamiento</a
            >
            <a
              href="index.html#clientes"
              class="block px-4 py-2 text-[var(--dark)]/80 hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
              >Gestión de Clientes</a
            >
            <a
              href="index.html#pos"
              class="block px-4 py-2 text-[var(--dark)]/80 hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
              >Punto de Venta</a
            >
            <a
              href="index.html#dashboard"
              class="block px-4 py-2 text-[var(--dark)]/80 hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
              >Dashboard</a
            >
          </div>
        </div>
        <a
          href="index.html#use-cases"
          class="text-[var(--dark)]/80 hover:text-[var(--primary)] transition-colors"
          >Casos de Uso</a
        >
        <a
          href="pricing.html"
          class="text-[var(--dark)]/80 hover:text-[var(--primary)] transition-colors"
          >Planes</a
        >
        <a
          href="faq.html"
          class="text-[var(--dark)]/80 hover:text-[var(--primary)] transition-colors"
          >FAQ</a
        >
        <a
          href="https://app.vyvapos.com"
          target="_blank"
          class="ml-5 text-[var(--dark)]/80 hover:text-[var(--primary)] transition-colors"
          title="Iniciar Sesión"
        >
          <ion-icon name="person-outline" class="text-xl"></ion-icon>
        </a>
        <a
          href="https://app.vyvapos.com/plans/essential"
          target="_blank"
          class="bg-[var(--primary)] text-white px-4 py-2 rounded-[var(--button-radius)] hover:brightness-90 transition-all"
          >Empezar Gratis</a
        >
      </div>
      <div class="flex items-center space-x-3 md:hidden">
        <a
          href="https://app.vyvapos.com"
          target="_blank"
          class="text-[var(--dark)]/80 hover:text-[var(--primary)] transition-colors"
          title="Iniciar Sesión"
        >
          <ion-icon name="person-outline" class="text-xl"></ion-icon>
        </a>
        <button
          id="mobile-menu-button"
          class="p-2 rounded-[var(--button-radius)] text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >
          <ion-icon name="menu-outline" class="text-2xl"></ion-icon>
        </button>
      </div>
    </nav>
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
      <div class="px-6 py-4">
        <a href="index.html">
          <img
            src="assets/images/vyva_logo_black.svg"
            alt="Vyva Logo"
            class="h-7"
          />
        </a>
      </div>
      <a
        href="index.html#agendamiento"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >Agendamiento</a
      >
      <a
        href="index.html#clientes"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >Gestión de Clientes</a
      >
      <a
        href="index.html#pos"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >Punto de Venta</a
      >
      <a
        href="index.html#dashboard"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >Dashboard</a
      >
      <a
        href="index.html#use-cases"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >Casos de Uso</a
      >
      <a
        href="pricing.html"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >Planes</a
      >
      <a
        href="faq.html"
        class="block py-2 px-6 text-[var(--dark)]/80 hover:bg-[var(--light)]"
        >FAQ</a
      >
      <a
        href="https://app.vyvapos.com/plans/essential"
        target="_blank"
        class="block py-3 px-6 text-center bg-[var(--primary-soft)] text-[var(--primary)] font-semibold hover:bg-[var(--primary-light)]"
        >Empezar Gratis</a
      >
    </div>
  `;
  
  return navbar;
}

// Initialize navbar on page load
document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.appendChild(createNavbar());
    
    // Initialize mobile menu functionality
    setTimeout(() => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }
      
      // Initialize features dropdown
      const featuresButton = document.getElementById('features-button');
      const featuresMenu = document.getElementById('features-menu');
      const featuresDropdown = document.getElementById('features-dropdown-container');
      
      if (featuresButton && featuresMenu) {
        featuresButton.addEventListener('click', function(e) {
          e.stopPropagation();
          featuresMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
          if (featuresDropdown && !featuresDropdown.contains(e.target)) {
            featuresMenu.classList.add('hidden');
          }
        });
      }
    }, 100);
  }
});

