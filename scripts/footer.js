// FOOTER DINÁMICO — Daniel Banda Portafolio

document.addEventListener("DOMContentLoaded", () => {

    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">

            <!-- Columna izquierda — Brand -->
            <div class="footer-col footer-about">
                <div class="footer-logo">DANIEL <span>BANDA</span></div>
                <p>
                    Servicios digitales especializados para el sector inmobiliario.
                    Fotografía, video, web, redes sociales y campañas que venden.
                </p>
                <div class="footer-social">
                    <a href="https://www.instagram.com/danielbandamx" target="_blank" aria-label="Instagram">
                        <img src="./assets/icons/Instagram.png" alt="Instagram">
                    </a>
                    <a href="https://www.youtube.com/@danielbandamx" target="_blank" aria-label="YouTube">
                        <img src="./assets/icons/Youtube.png" alt="YouTube">
                    </a>
                    <a href="https://www.tiktok.com/@danielbandamx" target="_blank" aria-label="TikTok">
                        <img src="./assets/icons/Tiktok.png" alt="TikTok">
                    </a>
                </div>
            </div>

            <!-- Columna servicios -->
            <div class="footer-col footer-links">
                <h3>Servicios</h3>
                <ul>
                    <li><a href="/#srv-foto">Fotografía Inmobiliaria</a></li>
                    <li><a href="/#srv-video">Video Cinemático</a></li>
                    <li><a href="/#srv-web">Desarrollo Web</a></li>
                    <li><a href="/#srv-redes">Gestión de Redes</a></li>
                    <li><a href="/#srv-ads">Campañas Publicitarias</a></li>
                </ul>
            </div>

            <!-- Columna contacto -->
            <div class="footer-col footer-contact">
                <h3>Contacto</h3>
                <p>contacto@danielbanda.com</p>
                <p>+52 312 211 5603</p>
                <p style="margin-top: 16px;">
                    <a href="https://wa.me/+523122115603" target="_blank"
                       style="color: #C9A862; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 1px;">
                        Agendar consulta gratis →
                    </a>
                </p>
            </div>

        </div>

        <hr class="footer-divider">

        <div class="footer-bottom">
            <span>© 2025 Daniel Banda. Todos los derechos reservados.</span>
            <span>Servicios Digitales Inmobiliarios</span>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
