// NAVBAR DINÁMICO PREMIUM

document.addEventListener("DOMContentLoaded", () => {

    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">

            <a href="/" class="logo">DANIEL BANDA</a>

            <ul class="nav-links">
                <li class="dropdown">
                    <a href="/#services" class="dropbtn">Servicios ▾</a>
                    <div class="dropdown-content">
                        <a href="/services/recorridos-360.html">Recorridos 360°</a>
                        <a href="/services/produccion-audiovisual.html">Foto & Video</a>
                        <a href="/services/desarrollo-web.html">Desarrollo Web</a>
                        <a href="/services/agentes-ia.html">Agentes IA</a>
                    </div>
                </li>
                <li><a href="/#demo">Portafolio</a></li>
                <li><a href="/workshop.html" style="color: #C9A862; font-weight: bold;">Workshop Live</a></li>
                <li><a href="/#process">Proceso</a></li>
                <li><a href="/#about">Nosotros</a></li>
            </ul>

            <div class="menu-toggle" id="mobile-menu">☰</div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    // Mobile toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-active");
    });
});
