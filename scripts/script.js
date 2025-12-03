// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ANIMACIONES PREMIUM AWWARDS STYLE

document.addEventListener("DOMContentLoaded", () => {

    // Hero aparece suavemente
    setTimeout(() => {
        document.querySelector(".hero-new")?.classList.add("hero-loaded");
        document.querySelector(".navbar")?.classList.add("hero-loaded");
    }, 200);

    // Observer para fade-up / fade-in / reveal-img / stagger
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.2 });

    // Seleccionar elementos animables
    document.querySelectorAll(".fade-up, .fade-in, .reveal-img, .stagger")
        .forEach(el => observer.observe(el));
});
