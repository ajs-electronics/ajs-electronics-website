
const WHATSAPP_NUMBER = "254700763735";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  if (!mainNav) return;

  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const cards = [...document.querySelectorAll(".product-card")];
const categoryButtons = [...document.querySelectorAll(".category-card")];
const searchInput = document.getElementById("productSearch");
const resultCount = document.getElementById("resultCount");
const productGrid = document.getElementById("productGrid");

let activeCategory = "all";

function filterProducts() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let shown = 0;

  cards.forEach(card => {
    const matchesCategory =
      activeCategory === "all" ||
      card.dataset.category === activeCategory;

    const searchableText =
      `${card.dataset.name || ""} ${card.textContent || ""}`
        .toLowerCase();

    const matchesSearch = searchableText.includes(query);
    const visible = matchesCategory && matchesSearch;

    card.hidden = !visible;

    if (visible) shown++;
  });

  if (resultCount) {
    resultCount.textContent =
      `${shown} item${shown === 1 ? "" : "s"}`;
  }

  document.querySelector(".empty-state")?.remove();

  if (shown === 0 && productGrid) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      "No matching products found. Try another search or contact us on WhatsApp.";
    productGrid.appendChild(empty);
  }
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    activeCategory = button.dataset.filter || "all";
    filterProducts();
  });
});

searchInput?.addEventListener("input", filterProducts);

function openWhatsApp(productName = "") {
  const message = productName
    ? `Hello AJ's Electronic, I'm interested in: ${productName}. Please share the current price and availability.`
    : "Hello AJ's Electronic, I'd like to ask about your products.";

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    openWhatsApp(button.dataset.product || "");
  });
});

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp();
  });
});

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

filterProducts();