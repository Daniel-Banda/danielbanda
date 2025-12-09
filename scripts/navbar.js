// NAVBAR DINÁMICO PREMIUM

document.addEventListener("DOMContentLoaded", () => {

    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">

            <a href="/" class="logo">DANIEL BANDA</a>

            <ul class="nav-links">
                <li><a href="/#services">Servicios</a></li>
                <li><a href="/#demo">Demo</a></li>
                <li><a href="/#process">Proceso</a></li>
                <li><a href="/#about">Sobre mí</a></li>
                <li><a href="../Plantillas/LandingUno/Home.html">plantilla</a></li>
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
