const burger = document.getElementById("burger");
const mnav = document.getElementById("mnav");

if (burger && mnav) {
  burger.addEventListener("click", () => {
    const open = mnav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mnav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mnav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

const fakeSubmit = document.getElementById("fakeSubmit");
const formNote = document.getElementById("formNote");

if (fakeSubmit && formNote) {
  fakeSubmit.addEventListener("click", () => {
    formNote.textContent = "Listo. Conectamos este formulario a tu email/CRM cuando lo publiques.";
    setTimeout(() => (formNote.textContent = ""), 4500);
  });
}
