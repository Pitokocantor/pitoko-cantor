// Personalize estes dois valores antes de publicar.
const whatsappNumber = "5517988088383"; // Ex.: 5511999999999 (somente números)
const whatsappMessage = "Olá, Pitoko! Vi seu site e gostaria de solicitar um orçamento para um evento.";

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const packageName = link.dataset.package;
  const message = packageName
    ? `Olá, Pitoko! Tenho interesse no ${packageName}. Gostaria de solicitar um orçamento para meu evento.`
    : whatsappMessage;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

const videoModal = document.getElementById("video-modal");
document.querySelector("[data-video]")?.addEventListener("click", () => videoModal.showModal());
document.querySelector(".modal-close")?.addEventListener("click", () => videoModal.close());
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) videoModal.close();
});
