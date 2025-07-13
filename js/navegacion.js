document.addEventListener('DOMContentLoaded', () => {
  const getRelativePath = () => {
    const path = window.location.pathname;
    // Si estás en la raíz: "/", "/index.html"
    return (path === '/' || path.split('/').length <= 2) ? './' : '../';
  };

  const basePath = getRelativePath();

  const loadComponent = (id, url, callback) => {
    const cont = document.getElementById(id);
    if (cont) {
      fetch(basePath + url)
        .then(res => res.text())
        .then(html => {
          // Reemplazar rutas de imágenes o scripts si es necesario
          cont.innerHTML = html.replace(/src="\.\/assets/g, `src="${basePath}assets`);
          if (typeof callback === 'function') callback();
        });
    }
  };

  loadComponent('navContainer', 'nav.html', () => {
    const btn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const navLinks = document.querySelectorAll('#mainNav a');

    const getBasePath = (path) => {
      if (path === '/' || path === '') return '/';
      return '/' + path.split('/')[1];
    };

    const currentPath = getBasePath(window.location.pathname);

    navLinks.forEach(link => {
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
        sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
      });

      navLinks.forEach(link => link.addEventListener('click', () => closeSidebar()));
      overlay.addEventListener('click', () => closeSidebar());
    }
  });

  loadComponent('footerContainer', 'footer.html');
});
