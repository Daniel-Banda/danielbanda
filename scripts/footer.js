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

            <!-- Columna enlaces rápidos -->
            <div class="footer-col footer-links">
                <h3>Explorar</h3>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/services/recorridos-360.html">Recorridos 360</a></li>
                    <li><a href="/services/produccion-audiovisual.html">Producción AV</a></li>
                    <li><a href="/services/desarrollo-web.html">Desarrollo Web</a></li>
                    <li><a href="/services/agentes-ia.html">Agentes IA</a></li>
                    <li><a href="/#demo">Portafolio</a></li>
                </ul>
            </div>

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
