// FOOTER DINÁMICO ESTILO PREMIUM

document.addEventListener("DOMContentLoaded", () => {

    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">

            <!-- Columna izquierda -->
            <div class="footer-col footer-about">
                <p>
                    Recursos y herramientas para presentar tus proyectos 
                    inmobiliarios con estándares premium.
                </p>

                <div class="footer-social">
                    <a href="https://www.instagram.com/danielbandamx" target="_blank">
                        <img src="./assets/icons/Instagram.png" alt="Instagram">
                    </a>
                    <a href="https://www.youtube.com/@danielbandamx" target="_blank">
                        <img src="./assets/icons/Youtube.png" alt="YouTube">
                    </a>
                    <a href="https://www.tiktok.com/@danielbandamx" target="_blank">
                        <img src="./assets/icons/Tiktok.png" alt="TikTok">
                    </a>
                </div>
            </div>

            <!-- Columna enlaces rápidos 
            <div class="footer-col footer-links">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#services">Servicios</a></li>
                    <li><a href="/#about">Sobre mí</a></li>
                    <li><a href="/#contact">Contacto</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Términos & Condiciones</a></li>
                </ul>
            </div> -->

            <!-- Columna contacto -->
            <div class="footer-col footer-contact">
                <h3>Contacto</h3>
                <p>Email: contacto@danielbanda.com</p>
                <p>WhatsApp: +52 312 211 5603</p>
            </div>

        </div>

        <hr class="footer-divider">

        <div class="footer-bottom">
            © 2025 Daniel Banda. Todos los derechos reservados.
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
