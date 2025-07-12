document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = (id, url, callback) => {
    const cont = document.getElementById(id);
    if (cont) {
      fetch(url)
        .then(res => res.text())
        .then(html => {
          cont.innerHTML = html;
          if (typeof callback === 'function') callback();
        });
    }
  };

  loadComponent('navContainer', 'nav.html', () => {
    const btn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const navLinks = document.querySelectorAll('#mainNav a');

    // Función para obtener el primer segmento de la ruta
    const getBasePath = (path) => {
      if (path === '/' || path === '') return '/';
      return '/' + path.split('/')[1];
    };

    const currentPath = getBasePath(window.location.pathname);

    // Asignar clase 'active' al link que coincida con la base de la ruta
    navLinks.forEach(link => {
      // Obtener href base sin query ni hash
      const linkHref = link.getAttribute('href').split(/[?#]/)[0];
      const linkBase = getBasePath(linkHref);

      if (linkBase === currentPath) {
        link.classList.add('active');
      }
    });

    const openSidebar = () => {
      sidebar.classList.add('sidebar-open');
      btn.classList.add('active');
      overlay.classList.add('visible');
    };

    const closeSidebar = () => {
      sidebar.classList.remove('sidebar-open');
      btn.classList.remove('active');
      overlay.classList.remove('visible');
    };

    if (btn && sidebar && overlay) {
      btn.addEventListener('click', () => {
        if (sidebar.classList.contains('sidebar-open')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });

      // Cerrar al tocar un link
      navLinks.forEach(link => {
        link.addEventListener('click', () => closeSidebar());
      });

      // Cerrar al tocar fuera (en el overlay)
      overlay.addEventListener('click', () => closeSidebar());
    }
  });

  loadComponent('footerContainer', 'footer.html');
});
