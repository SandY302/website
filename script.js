document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
