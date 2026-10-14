
const WHATSAPP_NUMBER = "254700763735";

const photo = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=650&q=80`;

// Five subcategories per main category, with five products in each.
const catalogue = [
  ["phones", "Android smartphones", [
    ["Samsung Galaxy A series", "Everyday Android phones", "photo-1511707171634-5f897ff02aa9"],
    ["Samsung Galaxy S series", "Premium Android phones", "photo-1598327105666-5b89351aff97"],
    ["Tecno Camon series", "Camera-focused smartphones", "photo-1592750475338-74b7b21085ab"],
    ["Tecno Spark series", "Budget smartphone options", "photo-1610945265064-0e34e5519bbf"],
    ["Infinix Note series", "Large-screen phone options", "photo-1512499617640-c74ae3a79d37"]
  ]],
  ["phones", "iPhones", [
    ["iPhone SE", "Compact Apple phone options", "photo-1592750475338-74b7b21085ab"],
    ["iPhone 11", "Ask about storage and condition", "photo-1511707171634-5f897ff02aa9"],
    ["iPhone 12", "Ask about storage and condition", "photo-1598327105666-5b89351aff97"],
    ["iPhone 13", "Ask about storage and condition", "photo-1610945265064-0e34e5519bbf"],
    ["iPhone 14 and newer", "Ask about available models", "photo-1512499617640-c74ae3a79d37"]
  ]],
  ["phones", "Feature phones", [
    ["Nokia feature phone", "Calls and texts", "photo-1511707171634-5f897ff02aa9"],
    ["Tecno feature phone", "Basic mobile phone options", "photo-1598327105666-5b89351aff97"],
    ["Itel feature phone", "Entry-level phone options", "photo-1592750475338-74b7b21085ab"],
    ["Dual-SIM feature phone", "Two SIM card support", "photo-1610945265064-0e34e5519bbf"],
    ["Large-button feature phone", "Simple keypad options", "photo-1512499617640-c74ae3a79d37"]
  ]],
  ["phones", "Refurbished phones", [
    ["Refurbished Samsung phone", "Confirm condition and warranty", "photo-1511707171634-5f897ff02aa9"],
    ["Refurbished iPhone", "Confirm battery health", "photo-1598327105666-5b89351aff97"],
    ["Refurbished Tecno phone", "Confirm model and condition", "photo-1592750475338-74b7b21085ab"],
    ["Refurbished Infinix phone", "Confirm model and condition", "photo-1610945265064-0e34e5519bbf"],
    ["Refurbished Xiaomi phone", "Confirm model and condition", "photo-1512499617640-c74ae3a79d37"]
  ]],
  ["phones", "Gaming & large-screen phones", [
    ["Gaming smartphone", "Ask about processor and RAM", "photo-1598327105666-5b89351aff97"],
    ["High-refresh-rate phone", "Smooth-screen options", "photo-1511707171634-5f897ff02aa9"],
    ["Large-screen Android phone", "For video and everyday use", "photo-1592750475338-74b7b21085ab"],
    ["High-battery smartphone", "Ask about battery capacity", "photo-1610945265064-0e34e5519bbf"],
    ["High-storage smartphone", "Ask about available storage", "photo-1512499617640-c74ae3a79d37"]
  ]],
  ["phone-accessories", "Chargers & adapters", [
    ["USB-C fast charger", "Confirm wattage compatibility", "photo-1583863788434-e58a36330cf0"],
    ["USB-A wall charger", "Everyday charging adapter", "photo-1609592806596-b43bada7f3a7"],
    ["iPhone charging adapter", "Check device compatibility", "photo-1583394838336-acd977736f90"],
    ["Multi-port USB charger", "Charge multiple devices", "photo-1609091839311-d5365f9ff1c5"],
    ["Car phone charger", "Charging for vehicles", "photo-1591290619762-c5889f1f4f1d"]
  ]],
  ["phone-accessories", "Charging cables", [
    ["USB-C to USB-C cable", "For compatible devices", "photo-1583863788434-e58a36330cf0"],
    ["USB-A to USB-C cable", "Common charging cable", "photo-1609592806596-b43bada7f3a7"],
    ["Lightning cable", "For compatible Apple devices", "photo-1583394838336-acd977736f90"],
    ["Micro-USB cable", "For compatible older devices", "photo-1609091839311-d5365f9ff1c5"],
    ["Braided charging cable", "Durable cable options", "photo-1591290619762-c5889f1f4f1d"]
  ]],
  ["phone-accessories", "Power banks", [
    ["10,000 mAh power bank", "Portable backup power", "photo-1609091839311-d5365f9ff1c5"],
    ["20,000 mAh power bank", "Higher-capacity charging", "photo-1583863788434-e58a36330cf0"],
    ["Fast-charge power bank", "Check phone compatibility", "photo-1609592806596-b43bada7f3a7"],
    ["Compact power bank", "Portable charging option", "photo-1583394838336-acd977736f90"],
    ["Multi-port power bank", "Charge multiple devices", "photo-1591290619762-c5889f1f4f1d"]
  ]],
  ["phone-accessories", "Earphones & audio", [
    ["Wired earphones", "Simple wired listening", "photo-1590658268037-6bf12165a8df"],
    ["Wireless earbuds", "Bluetooth audio", "photo-1606220945770-b5b6c2c55bf1"],
    ["Neckband earphones", "Wireless neckband design", "photo-1608156639585-b3a032ef9689"],
    ["Bluetooth headphones", "Over-ear listening", "photo-1505740420928-5e560c06d30e"],
    ["Portable Bluetooth speaker", "Portable music speaker", "photo-1484704849700-f032a568e944"]
  ]],
  ["phone-accessories", "Cases & screen protection", [
    ["Clear phone case", "Confirm phone model", "photo-1601784551446-20c9e07cdbdb"],
    ["Shockproof phone case", "Protective case options", "photo-1603313011101-320f26a4f6f6"],
    ["Wallet phone case", "Case with card storage", "photo-1605236453806-6ff36851218e"],
    ["Tempered glass protector", "Must match phone model", "photo-1603891128711-11b4b03bb138"],
    ["Camera lens protector", "Model-specific protection", "photo-1601593346740-925612772716"]
  ]],
  ["computers", "Windows laptops", [
    ["Core i3 laptop", "Study and office use", "photo-1496181133206-80ce9b88a853"],
    ["Core i5 laptop", "Everyday work and study", "photo-1517336714731-489689fd1ca8"],
    ["Core i7 laptop", "Higher-performance options", "photo-1498050108023-c5249f4df085"],
    ["Ryzen laptop", "AMD-powered options", "photo-1519389950473-47ba0277781c"],
    ["Business laptop", "Work-focused options", "photo-1588872657578-7efd1f1555ed"]
  ]],
  ["computers", "Refurbished laptops", [
    ["Refurbished HP laptop", "Ask about specs and warranty", "photo-1496181133206-80ce9b88a853"],
    ["Refurbished Dell laptop", "Check condition and battery", "photo-1517336714731-489689fd1ca8"],
    ["Refurbished Lenovo laptop", "Check model and specifications", "photo-1498050108023-c5249f4df085"],
    ["Refurbished Toshiba laptop", "Check model and battery", "photo-1519389950473-47ba0277781c"],
    ["Refurbished MacBook", "Check year and battery health", "photo-1588872657578-7efd1f1555ed"]
  ]],
  ["computers", "Desktop computers", [
    ["Office desktop computer", "For productivity", "photo-1587831990711-23ca6441447b"],
    ["Home desktop computer", "For everyday computing", "photo-1593640408182-31c70c8268f5"],
    ["Gaming desktop computer", "Ask about graphics card", "photo-1593642632823-8f785ba67e45"],
    ["Mini PC", "Compact computing", "photo-1547082299-de196ea013d6"],
    ["All-in-one computer", "Computer and display together", "photo-1527443224154-c4a3942d3acf"]
  ]],
  ["computers", "Monitors & displays", [
    ["22-inch monitor", "Check resolution and ports", "photo-1527443224154-c4a3942d3acf"],
    ["24-inch Full HD monitor", "Work and home display", "photo-1585790050230-5dd28404ccb9"],
    ["27-inch monitor", "Larger display options", "photo-1593640408182-31c70c8268f5"],
    ["Gaming monitor", "Ask about refresh rate", "photo-1547082299-de196ea013d6"],
    ["Portable monitor", "External display for travel", "photo-1593642632823-8f785ba67e45"]
  ]],
  ["computers", "Tablets & 2-in-1 devices", [
    ["Android tablet", "Learning and entertainment", "photo-1544244015-0df4b3ffc6b0"],
    ["Apple iPad", "Ask about generation and storage", "photo-1561154464-82e9adf32764"],
    ["Windows 2-in-1 device", "Laptop and tablet hybrid", "photo-1589739900243-4b52cd9dd8df"],
    ["Kids learning tablet", "Ask about parental controls", "photo-1542751371-adc38448a05e"],
    ["Drawing tablet", "For digital art and design", "photo-1585790050230-5dd28404ccb9"]
  ]],
  ["computer-accessories", "Computer mice", [
    ["Wired USB mouse", "Plug-and-play mouse", "photo-1527814050087-3793815479db"],
    ["Wireless mouse", "Cord-free mouse", "photo-1615663245857-ac93bb7c39e7"],
    ["Bluetooth mouse", "For compatible devices", "photo-1613141411244-0e4ac259d217"],
    ["Ergonomic mouse", "Alternative hand position", "photo-1527864550417-7fd91fc51a46"],
    ["Gaming mouse", "Ask about buttons and DPI", "photo-1527814050087-3793815479db"]
  ]],
  ["computer-accessories", "Keyboards", [
    ["Wired USB keyboard", "Everyday keyboard", "photo-1587829741301-dc798b83add3"],
    ["Wireless keyboard", "Cord-free keyboard", "photo-1595225476474-87563907a212"],
    ["Bluetooth keyboard", "For compatible devices", "photo-1595044426077-d36d9236d54a"],
    ["Compact keyboard", "Space-saving keyboard", "photo-1511467687858-23d96c32e4ae"],
    ["Gaming keyboard", "Ask about switches and lighting", "photo-1587829741301-dc798b83add3"]
  ]],
  ["computer-accessories", "Storage & USB devices", [
    ["USB flash drive 32 GB", "Portable storage", "photo-1625948515291-69613efd103f"],
    ["USB flash drive 64 GB", "Portable storage", "photo-1531492746076-161ca9bcad58"],
    ["USB flash drive 128 GB", "Higher-capacity storage", "photo-1618410320928-25228d811631"],
    ["External hard drive", "Backup storage", "photo-1597848212624-e6d47f9a4a70"],
    ["External SSD", "Fast portable storage", "photo-1625948515291-69613efd103f"]
  ]],
  ["computer-accessories", "Headsets & webcams", [
    ["USB computer headset", "For calls and meetings", "photo-1590658268037-6bf12165a8df"],
    ["Bluetooth computer headset", "Wireless calls and audio", "photo-1606220945770-b5b6c2c55bf1"],
    ["USB webcam", "For video calls", "photo-1527443224154-c4a3942d3acf"],
    ["HD webcam with microphone", "Check resolution and audio", "photo-1585790050230-5dd28404ccb9"],
    ["Desktop speakers", "Audio for computer setups", "photo-1505740420928-5e560c06d30e"]
  ]],
  ["computer-accessories", "Laptop bags, hubs & stands", [
    ["Laptop backpack", "Check laptop size compatibility", "photo-1553062407-98eeb64c6a62"],
    ["Laptop sleeve", "Protective sleeve", "photo-1622560480654-d96214fdc887"],
    ["USB-C hub", "Check supported ports", "photo-1625948515291-69613efd103f"],
    ["Laptop cooling stand", "For airflow under laptops", "photo-1496181133206-80ce9b88a853"],
    ["Laptop stand", "Raise laptop for desk use", "photo-1588872657578-7efd1f1555ed"]
  ]]
];

const products = catalogue.flatMap(([category, subcategory, items]) =>
  items.map(([name, description, imageId]) => ({
    category, subcategory, name, description, image: photo(imageId)
  }))
);

const grid = document.getElementById("productGrid");
const search = document.getElementById("search");
const subcategory = document.getElementById("subcategory");
const count = document.getElementById("count");
let activeCategory = "all";

function whatsappLink(product) {
  const message = `Hi AJ's Electronic, please share the price and availability of ${product}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateSubcategories() {
  const options = [...new Set(products
    .filter(p => activeCategory === "all" || p.category === activeCategory)
    .map(p => p.subcategory))];

  subcategory.innerHTML = '<option value="all">All subcategories</option>' +
    options.map(name => `<option value="${name}">${name}</option>`).join("");
}

function renderProducts() {
  const query = search.value.trim().toLowerCase();
  const chosenSubcategory = subcategory.value;

  const filtered = products.filter(p =>
    (activeCategory === "all" || p.category === activeCategory) &&
    (chosenSubcategory === "all" || p.subcategory === chosenSubcategory) &&
    `${p.name} ${p.description} ${p.subcategory}`.toLowerCase().includes(query)
  );

  count.textContent = `${filtered.length} products found`;

  if (!filtered.length) {
    grid.innerHTML = "<p>No products found. Try another search.</p>";
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <img src="${p.image}" alt="Illustrative photo for ${p.name}" loading="lazy">
      <div class="product-info">
        <small>${p.subcategory}</small>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p><strong>Price on enquiry</strong></p>
        <a href="${whatsappLink(p.name)}" target="_blank" rel="noopener">Ask on WhatsApp ↗</a>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    updateSubcategories();
    renderProducts();
  });
});

search.addEventListener("input", renderProducts);
subcategory.addEventListener("change", renderProducts);

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mainNav").classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

updateSubcategories();
renderProducts();