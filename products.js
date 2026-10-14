const catalogue = {
  phones: [
    "Apple iPhone", "Samsung Galaxy S Series",
    "Samsung Galaxy A Series", "Samsung Galaxy Z Fold",
    "Samsung Galaxy Z Flip", "Tecno Camon",
    "Tecno Spark", "Tecno Pova", "Infinix Note",
    "Infinix Hot", "Infinix Smart", "Google Pixel",
    "Xiaomi Redmi Note", "Xiaomi Redmi A",
    "Xiaomi Poco", "Oppo Reno", "Oppo A Series",
    "Vivo Y Series", "OnePlus Smartphones", "Itel Feature Phones"
  ],
  "phone-accessories": [
    "USB-C Fast Chargers", "Lightning Chargers",
    "USB-C Cables", "Lightning Cables", "Micro-USB Cables",
    "Power Banks", "Wireless Charging Pads", "Phone Cases",
    "Tempered Glass Protectors", "Camera Lens Protectors",
    "Wireless Earbuds", "Wired Earphones", "Bluetooth Headphones",
    "Bluetooth Speakers", "Car Phone Holders", "Phone Stands",
    "Selfie Sticks", "Phone Ring Lights", "OTG Adapters",
    "Memory Cards"
  ],
  computers: [
    "HP Pavilion", "HP ProBook", "HP EliteBook", "HP 250 Series",
    "Dell Inspiron", "Dell Latitude", "Dell XPS", "Dell Vostro",
    "Lenovo ThinkPad", "Lenovo IdeaPad", "Lenovo Yoga",
    "Lenovo LOQ Gaming", "ASUS VivoBook", "ASUS Zenbook",
    "ASUS TUF Gaming", "Acer Aspire", "Acer Swift",
    "Acer Nitro Gaming", "Apple MacBook Air", "Apple MacBook Pro"
  ],
  "computer-accessories": [
    "Wired Keyboards", "Wireless Keyboards", "Wired Mice",
    "Wireless Mice", "Gaming Keyboard and Mouse Sets",
    "Laptop Bags", "Laptop Sleeves", "Laptop Cooling Pads",
    "Laptop Stands", "USB-C Hubs", "USB Flash Drives",
    "External Hard Drives", "External SSDs", "Computer Monitors",
    "Laptop Chargers", "Laptop Batteries", "Laptop RAM",
    "HDMI Cables", "USB Extension Cables", "UPS Backup Units"
  ]
};

const descriptions = {
  phones: "Ask us about available models, storage and colours.",
  "phone-accessories": "Contact us to confirm compatibility and availability.",
  computers: "Ask about specifications, RAM, storage and pricing.",
  "computer-accessories": "Contact us to confirm compatibility and pricing."
};

const grid = document.getElementById("productGrid");
const search = document.getElementById("productSearch");
const resultCount = document.getElementById("resultCount");

if (grid) {
  // Keep existing cards and add only missing product names.
  const existing = new Set(
    [...grid.querySelectorAll(".product-card")].map(card =>
      `${card.dataset.category}|${card.querySelector("h3")?.textContent.trim().toLowerCase()}`
    )
  );

  for (const [category, products] of Object.entries(catalogue)) {
    for (const name of products) {
      const key = `${category}|${name.toLowerCase()}`;
      if (existing.has(key)) continue;

      const card = document.createElement("article");
      card.className = "product-card";
      card.dataset.category = category;
      card.dataset.name = name.toLowerCase();

      const image = document.createElement("div");
      image.className = "product-image";
      const img = document.createElement("img");
      img.src = `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80`;
      img.alt = name;
      img.loading = "lazy";
      image.appendChild(img);

      const info = document.createElement("div");
      info.className = "product-info";

      const heading = document.createElement("h3");
      heading.textContent = name;

      const description = document.createElement("p");
      description.textContent = descriptions[category];

      const button = document.createElement("button");
      button.className = "btn";
      button.type = "button";
      button.textContent = "Ask for Price";
      button.dataset.product = name;

      info.append(heading, description, button);
      card.append(image, info);
      grid.appendChild(card);
      existing.add(key);
    }
  }
}

let activeCategory = "all";

function filterProducts() {
  const query = (search?.value || "").trim().toLowerCase();
  let count = 0;

  document.querySelectorAll("#productGrid .product-card").forEach(card => {
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesSearch =
      `${card.dataset.name || ""} ${card.textContent}`.toLowerCase().includes(query);

    card.hidden = !(matchesCategory && matchesSearch);
    if (!card.hidden) count++;
  });

  if (resultCount) resultCount.textContent = `${count} products found`;
}

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter || "all";
    document.querySelectorAll(".category-card").forEach(item =>
      item.classList.toggle("active", item === button)
    );
    filterProducts();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  });
});

search?.addEventListener("input", filterProducts);

document.addEventListener("click", event => {
  const button = event.target.closest("[data-product]");
  if (!button) return;

  const product = button.dataset.product;
  const message = encodeURIComponent(
    `Hello AJ's Electronic, I would like to enquire about ${product}. Please share the price and availability.`
  );

  window.open(`https://wa.me/254700763735?text=${message}`, "_blank", "noopener");
});

// Update the visible category totals.
document.querySelectorAll(".category-card").forEach(button => {
  const category = button.dataset.filter;
  const label = button.querySelector("strong");
  const total = category === "all"
    ? Object.values(catalogue).reduce((sum, items) => sum + items.length, 0)
    : (catalogue[category]?.length || 0);

  if (label) {
    const countLabel = button.querySelector("span:last-child");
    if (countLabel) countLabel.textContent =
      category === "all" ? `Browse ${total} product varieties` : `${total} product varieties`;
  }
});

filterProducts();