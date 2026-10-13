// AJ's Electronic site settings
// IMPORTANT: Replace the digits below with your business WhatsApp number in international format.
// Kenya example: 2547XXXXXXXX (no +, spaces or dashes).
const WHATSAPP_NUMBER = "254700763735";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mainNav.classList.remove("open")));

const cards = [...document.querySelectorAll(".product-card")];
const categoryButtons = [...document.querySelectorAll(".category-card")];
const searchInput = document.getElementById("productSearch");
const resultCount = document.getElementById("resultCount");
let activeCategory = "all";

function filterProducts() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesSearch = (card.dataset.name + " " + card.textContent).toLowerCase().includes(query);
    const visible = matchesCategory && matchesSearch;
    card.hidden = !visible;
    if (visible) shown++;
  });
  resultCount.textContent = `${shown} item${shown === 1 ? "" : "s"}`;
  const oldEmpty = document.querySelector(".empty-state");
  if (oldEmpty) oldEmpty.remove();
  if (shown === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No matching products found. Try another search or contact us for help.";
    document.getElementById("productGrid").appendChild(empty);
  }
}
categoryButtons.forEach(button => button.addEventListener("click", () => {
  categoryButtons.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeCategory = button.dataset.filter;
  filterProducts();
}));
searchInput?.addEventListener("input", filterProducts);

function openWhatsApp(productName = "") {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER) || WHATSAPP_NUMBER.includes("X")) {
    alert("Please add your business WhatsApp number in script.js first. Then publish the website again.");
    return;
  }
  const message = productName
    ? `Hello AJ's Electronic, I'm interested in: ${productName}. Please share current price and availability.`
    : "Hello AJ's Electronic, I'd like to ask about your products.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
document.querySelectorAll("[data-product]").forEach(button => button.addEventListener("click", () => openWhatsApp(button.dataset.product)));
document.querySelectorAll(".whatsapp-link").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp();
}));
document.getElementById("year").textContent = new Date().getFullYear();
