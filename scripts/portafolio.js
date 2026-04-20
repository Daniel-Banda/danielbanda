// PORTAFOLIO — Lógica de filtrado por categoría

document.addEventListener("DOMContentLoaded", () => {

    const grid    = document.getElementById("pf-grid");
    const cards   = Array.from(document.querySelectorAll(".pf-card"));
    const buttons = document.querySelectorAll(".pf-filter-btn");
    const empty   = document.getElementById("pf-empty");
    const counter = document.getElementById("pf-count");

    // ─── Contar por categoría ───────────────────
    const counts = { all: cards.length };
    cards.forEach(card => {
        const cat = card.dataset.category;
        counts[cat] = (counts[cat] || 0) + 1;
    });

    // Rellenar contadores en los botones
    document.getElementById("fc-all").textContent       = counts.all       || 0;
    document.getElementById("fc-fotografia").textContent = counts.fotografia || 0;
    document.getElementById("fc-video").textContent      = counts.video      || 0;
    document.getElementById("fc-web").textContent        = counts.web        || 0;

    // Contador principal inicial
    counter.textContent = counts.all;

    // ─── Filtrar ────────────────────────────────
    function filterCards(filter) {
        let visible = 0;

        cards.forEach(card => {
            const match = filter === "all" || card.dataset.category === filter;

            if (match) {
                card.classList.remove("hidden");
                // Pequeña animación de entrada
                requestAnimationFrame(() => {
                    card.style.opacity    = "0";
                    card.style.transform  = "translateY(16px)";
                    requestAnimationFrame(() => {
                        card.style.transition = "opacity 0.45s ease, transform 0.45s ease";
                        card.style.opacity    = "1";
                        card.style.transform  = "translateY(0)";
                    });
                });
                visible++;
            } else {
                card.classList.add("hidden");
                card.style.opacity   = "";
                card.style.transform = "";
                card.style.transition = "";
            }
        });

        // Actualizar contador global
        counter.style.transform = "translateY(-8px)";
        counter.style.opacity   = "0";
        counter.style.transition = "0.25s ease";
        setTimeout(() => {
            counter.textContent    = visible;
            counter.style.transform = "translateY(0)";
            counter.style.opacity   = "1";
        }, 250);

        // Mostrar/ocultar estado vacío
        empty.style.display = visible === 0 ? "block" : "none";
    }

    // ─── Click en filtros ───────────────────────
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Actualizar estado activo
            buttons.forEach(b => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");

            filterCards(btn.dataset.filter);
        });
    });

    // ─── Sticky filter — shadow al hacer scroll ─
    const filterWrap = document.getElementById("pf-filter-wrap");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 120) {
            filterWrap.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)";
        } else {
            filterWrap.style.boxShadow = "none";
        }
    }, { passive: true });

    // ─── Leer filtro desde URL hash ─────────────
    const hash = window.location.hash.replace("#", "");
    if (hash && ["fotografia", "video", "web"].includes(hash)) {
        const targetBtn = document.querySelector(`[data-filter="${hash}"]`);
        if (targetBtn) targetBtn.click();
    }

});
