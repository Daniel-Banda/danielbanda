// NAVBAR DINÁMICO — Daniel Banda Portafolio

document.addEventListener("DOMContentLoaded", () => {

    const navbarHTML = `
    <nav class="navbar" id="main-navbar">
        <div class="nav-container">

            <a href="/" class="logo">DANIEL <span>BANDA</span></a>

            <ul class="nav-links" id="nav-links">
                <li><a href="/#servicios">Servicios</a></li>
                <li><a href="/portafolio.html">Portafolio</a></li>
                <li><a href="/#proceso">Proceso</a></li>
                <li><a href="/#sobre-mi">Sobre mí</a></li>
                <li><a href="https://wa.me/+523122115603" target="_blank" class="nav-cta">Contactar</a></li>
            </ul>

            <button class="menu-toggle" id="mobile-menu" aria-label="Abrir menú">☰</button>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    // Mobile toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks   = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-active");
        mobileMenu.textContent = navLinks.classList.contains("mobile-active") ? "✕" : "☰";
    });

    // Cerrar al hacer click en un enlace (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-active");
            mobileMenu.textContent = "☰";
        });
    });

    // Marcar enlace activo según hash
    const links = navLinks.querySelectorAll("a:not(.nav-cta)");
    const updateActive = () => {
        links.forEach(link => {
            const href = link.getAttribute("href");
            if (href && window.location.hash && href.includes(window.location.hash)) {
                link.style.color = "#C9A862";
            } else {
                link.style.color = "";
            }
        });
    };
    window.addEventListener("hashchange", updateActive);
});
