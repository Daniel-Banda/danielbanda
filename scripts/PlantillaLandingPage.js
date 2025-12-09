// Tabs media
const buttons = document.querySelectorAll(".media-btn");
const items = document.querySelectorAll(".media-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        
        buttons.forEach(b => b.classList.remove("active"));
        items.forEach(i => i.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});


const tabs = document.querySelectorAll(".reasons-btn");
const blocks = document.querySelectorAll(".reason-block");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        blocks.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});


const mainImg = document.getElementById("gallery-main-img");
const thumbs = document.querySelectorAll(".thumb");

let index = 0;

// Función para actualizar imagen principal
function updateImage(i) {
    index = i;
    mainImg.src = thumbs[i].src;

    thumbs.forEach(t => t.classList.remove("active"));
    thumbs[i].classList.add("active");
}

// Botones ← →
document.querySelector(".gallery-prev").addEventListener("click", () => {
    index = (index - 1 + thumbs.length) % thumbs.length;
    updateImage(index);
});

document.querySelector(".gallery-next").addEventListener("click", () => {
    index = (index + 1) % thumbs.length;
    updateImage(index);
});

// Clic en miniaturas
thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        updateImage(Number(thumb.dataset.index));
    });
});


