
"use strict";

/*
  AJ'S ELECTRONIC — STORE CONFIGURATION

  Replace the placeholder with your real Kenyan WhatsApp number.
  Example format: 254712345678
  Do not include +, spaces or hyphens.
*/

const WHATSAPP_NUMBER = "254748945622";

/*
  PRODUCT CATALOG

  Set price to a number for a listed price.
  Use null when customers should enquire about the price.
*/

const products = [
  {
    id: 1,
    name: "HP ProBook 440 G7",
    category: "Laptops and Computers",
    price: 30000,
    description: "Business laptop. Ask about specifications and condition.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    badge: "Featured"
  },
  {
    id: 2,
    name: "Laptop Computer",
    category: "Laptops and Computers",
    price: null,
    description: "Explore available laptops for work, school and business.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Phones and Accessories",
    price: null,
    description: "Ask about available brands, models and storage options.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Phones and Accessories",
    price: null,
    description: "Discover audio accessories for work, travel and leisure.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  },
  {
    id: 5,
    name: "Computer Accessories",
    category: "Laptops and Computers",
    price: null,
    description: "Enquire about keyboards, mice and computer essentials.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  },
  {
    id: 6,
    name: "Smart Television",
    category: "Home Electronics",
    price: null,
    description: "Ask about screen sizes, features and available models.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  },
  {
    id: 7,
    name: "Mobile Accessories",
    category: "Phones and Accessories",
    price: null,
    description: "Enquire about chargers, cables and everyday essentials.",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  },
  {
    id: 8,
    name: "Home Electronics",
    category: "Home Electronics",
    price: null,
    description: "Explore electronics for your home and everyday needs.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=600&q=80",
    badge: "Ask us"
  }
];

/* Store state */

let activeCategory = "All";

/* DOM elements */

const grid = document.getElementById("productGrid");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const resultCount = document.getElementById("resultCount");

/* Format prices in Kenyan shillings */

function formatPrice(price) {
  if (price == null) {
    return "Ask for price";
  }

  return "KSh " + price.toLocaleString("en-KE");
}

/* Build WhatsApp URLs safely */

function whatsappLink(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  // Kenyan international format: 254 followed by 9 digits.
  if (!/^254\d{9}$/.test(number)) {
    return "#contact";
  }

  return (
    "https://wa.me/" +
    number +
    "?text=" +
    encodeURIComponent(message)
  );
}

/* Configure store-wide WhatsApp buttons */

function configureWhatsAppLink(link, message) {
  const url = whatsappLink(message);

  link.href = url;

  if (url === "#contact") {
    link.removeAttribute("target");
    link.removeAttribute("rel");
  } else {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
}

/* Create an individual product card */

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product";

  const imageBox = document.createElement("div");
  imageBox.className = "product-image";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = product.badge;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy";

  // Gracefully handle unavailable image URLs.
  img.onerror = function () {
    this.onerror = null;
    this.style.display = "none";

    imageBox.style.background =
      "linear-gradient(135deg, #e7efff, #dce9fa)";

    imageBox.setAttribute("aria-label", product.name);
  };

  imageBox.append(badge, img);

  const body = document.createElement("div");
  body.className = "product-body";

  const category = document.createElement("div");
  category.className = "product-category";
  category.textContent = product.category;

  const name = document.createElement("h3");
  name.textContent = product.name;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const bottom = document.createElement("div");
  bottom.className = "product-bottom";

  const priceBox = document.createElement("div");

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = formatPrice(product.price);

  const priceNote = document.createElement("span");
  priceNote.className = "price-note";

  priceNote.textContent =
    product.price == null
      ? "Confirm current pricing"
      : "Listed price";

  priceBox.append(price, priceNote);

  const order = document.createElement("a");
  order.className = "product-order";
  order.textContent = "Enquire ↗";

  configureWhatsAppLink(
    order,
    "Hello AJ's Electronic! I'm interested in " +
      product.name +
      ". Please confirm availability, condition where applicable, specifications and current price."
  );

  bottom.append(priceBox, order);

  body.append(
    category,
    name,
    description,
    bottom
  );

  card.append(imageBox, body);

  return card;
}

/* Filter, search, sort and display products */

function renderProducts() {
  const term = search.value.trim().toLowerCase();

  let filtered = products.filter(product => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchableText = [
      product.name,
      product.category,
      product.description,
      product.badge
    ].join(" ").toLowerCase();

    return (
      matchesCategory &&
      searchableText.includes(term)
    );
  });

  if (sort.value === "low") {
    filtered.sort((a, b) =>
      (a.price ?? Infinity) - (b.price ?? Infinity)
    );
  } else if (sort.value === "high") {
    filtered.sort((a, b) =>
      (b.price ?? -Infinity) - (a.price ?? -Infinity)
    );
  } else if (sort.value === "name") {
    filtered.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else {
    filtered.sort((a, b) => a.id - b.id);
  }

  grid.replaceChildren();

  resultCount.textContent =
    filtered.length +
    (filtered.length === 1 ? " product" : " products");

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent =
      "No matching products found. Try a different search or category.";

    grid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach(product => {
    fragment.appendChild(createProductCard(product));
  });

  grid.appendChild(fragment);
}

/* Category buttons */

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach(item => {
      const isActive = item === button;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderProducts();

    document.getElementById("products").scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth",
      block: "start"
    });
  });
});

/* Search and sorting events */

search.addEventListener("input", renderProducts);
sort.addEventListener("change", renderProducts);

/* Automatically update the copyright year */

document.getElementById("year").textContent =
  new Date().getFullYear();

/* Configure general WhatsApp enquiry buttons */

[
  "promoWhatsApp",
  "footerWhatsApp",
  "floatingWhatsApp"
].forEach(id => {
  const link = document.getElementById(id);

  configureWhatsAppLink(
    link,
    "Hello AJ's Electronic! I'd like to enquire about your products, prices and availability."
  );
});

/* Initial product display */

renderProducts();
