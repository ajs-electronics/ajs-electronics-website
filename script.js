
"use strict";

const WHATSAPP_NUMBER = "254700763735";

/*
  Image URLs below are selected for product relevance.
  External image services may occasionally return a different item.
  Replace these with your own product photos for best results.
*/

const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=650&q=80`;

const products = [
  // PHONES — 20
  {name:"Apple iPhone",cat:"phones",sub:"iPhone",desc:"Explore available iPhone models and storage options.",img:image("photo-1592750475338-74b7b21085ab")},
  {name:"Samsung Galaxy S Series",cat:"phones",sub:"Samsung",desc:"Premium Samsung smartphone options.",img:image("photo-1610945265064-0e34e5519bbf")},
  {name:"Samsung Galaxy A Series",cat:"phones",sub:"Samsung",desc:"Everyday phones for work and entertainment.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"Tecno Camon",cat:"phones",sub:"Tecno",desc:"Explore Tecno smartphone options.",img:image("photo-1598327105666-5b89351aff97")},
  {name:"Tecno Spark",cat:"phones",sub:"Tecno",desc:"Affordable Android phone options.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"Infinix Note",cat:"phones",sub:"Infinix",desc:"Large-screen phone options.",img:image("photo-1598327105666-5b89351aff97")},
  {name:"Infinix Hot",cat:"phones",sub:"Infinix",desc:"Smartphones for daily communication.",img:image("photo-1592750475338-74b7b21085ab")},
  {name:"Itel Smartphones",cat:"phones",sub:"Itel",desc:"Entry-level smartphone options.",img:image("photo-1580910051074-3eb694886505")},
  {name:"Google Pixel",cat:"phones",sub:"Google Pixel",desc:"Explore Pixel phone models.",img:image("photo-1598327105666-5b89351aff97")},
  {name:"Xiaomi Redmi",cat:"phones",sub:"Xiaomi",desc:"Android phones for different budgets.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"OnePlus Phones",cat:"phones",sub:"OnePlus",desc:"Performance-focused phone options.",img:image("photo-1592750475338-74b7b21085ab")},
  {name:"Oppo Smartphones",cat:"phones",sub:"Oppo",desc:"Explore Oppo smartphone options.",img:image("photo-1598327105666-5b89351aff97")},
  {name:"Vivo Smartphones",cat:"phones",sub:"Vivo",desc:"Phones for photography and everyday use.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"Huawei Smartphones",cat:"phones",sub:"Huawei",desc:"Ask about available Huawei models.",img:image("photo-1592750475338-74b7b21085ab")},
  {name:"Nokia Smartphones",cat:"phones",sub:"Nokia",desc:"Explore available Nokia phones.",img:image("photo-1580910051074-3eb694886505")},
  {name:"Refurbished Smartphones",cat:"phones",sub:"Refurbished Phones",desc:"Confirm condition, battery and warranty.",img:image("photo-1592750475338-74b7b21085ab")},
  {name:"Dual SIM Smartphones",cat:"phones",sub:"Dual SIM",desc:"Phones with dual SIM functionality.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"5G Smartphones",cat:"phones",sub:"5G Phones",desc:"Ask about compatible 5G models.",img:image("photo-1598327105666-5b89351aff97")},
  {name:"Android Tablets",cat:"phones",sub:"Tablets",desc:"Explore tablet options for work and entertainment.",img:image("photo-1544244015-0df4b3ffc6b0")},
  {name:"Feature Phones",cat:"phones",sub:"Feature Phones",desc:"Simple phones for calls and texts.",img:image("photo-1511707171634-5f897ff02aa9")},

  // PHONE ACCESSORIES — 20
  {name:"Phone Cases and Covers",cat:"phone-accessories",sub:"Cases & Covers",desc:"Protective cases for compatible phone models.",img:image("photo-1603313011101-320f26a4f6f6")},
  {name:"Screen Protectors",cat:"phone-accessories",sub:"Screen Protectors",desc:"Screen protection for compatible devices.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"USB-C Chargers",cat:"phone-accessories",sub:"Chargers",desc:"Charging adapters for compatible phones.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"iPhone Chargers",cat:"phone-accessories",sub:"Chargers",desc:"Ask about compatible Apple charging options.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"USB-C Charging Cables",cat:"phone-accessories",sub:"Charging Cables",desc:"USB-C cables for compatible devices.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"Lightning Cables",cat:"phone-accessories",sub:"Charging Cables",desc:"Charging cables for compatible Apple devices.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"Power Banks",cat:"phone-accessories",sub:"Power Banks",desc:"Portable power for charging on the go.",img:image("photo-1609091839311-d5365f9ff1c5")},
  {name:"Wireless Earbuds",cat:"phone-accessories",sub:"Earbuds",desc:"Wireless listening options for compatible devices.",img:image("photo-1606220945770-b5b6c2c55bf1")},
  {name:"Wired Earphones",cat:"phone-accessories",sub:"Earphones",desc:"Wired audio options for compatible devices.",img:image("photo-1505740420928-5e560c06d30e")},
  {name:"Bluetooth Headphones",cat:"phone-accessories",sub:"Headphones",desc:"Wireless headphones for music and calls.",img:image("photo-1505740420928-5e560c06d30e")},
  {name:"Phone Holders",cat:"phone-accessories",sub:"Phone Holders",desc:"Stands and holders for your phone.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"Car Phone Mounts",cat:"phone-accessories",sub:"Car Accessories",desc:"Mounts for convenient in-car phone placement.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"Car Chargers",cat:"phone-accessories",sub:"Car Accessories",desc:"Charging options for use in vehicles.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"OTG Adapters",cat:"phone-accessories",sub:"Adapters",desc:"Connect supported phones to USB accessories.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"SIM Tools and Ejectors",cat:"phone-accessories",sub:"SIM Accessories",desc:"Small tools for SIM trays and cards.",img:image("photo-1511707171634-5f897ff02aa9")},
  {name:"Bluetooth Speakers",cat:"phone-accessories",sub:"Speakers",desc:"Portable speakers for music and audio.",img:image("photo-1608043152269-423dbba4e7e1")},
  {name:"Phone Camera Accessories",cat:"phone-accessories",sub:"Camera Accessories",desc:"Ask about compatible mobile photography accessories.",img:image("photo-1516035069371-29a1b244cc32")},
  {name:"Smart Watches",cat:"phone-accessories",sub:"Smart Watches",desc:"Wearable devices with phone connectivity.",img:image("photo-1523275335684-37898b6baf30")},
  {name:"Wireless Charging Pads",cat:"phone-accessories",sub:"Chargers",desc:"Wireless chargers for supported phones.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"Phone Grip Holders",cat:"phone-accessories",sub:"Phone Holders",desc:"Grips to help hold your phone securely.",img:image("photo-1511707171634-5f897ff02aa9")},

  // COMPUTERS AND LAPTOPS — 20
  {name:"HP Core i5 Laptops",cat:"computers",sub:"HP",desc:"Ask about generation, RAM and storage.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"HP Core i7 Laptops",cat:"computers",sub:"HP",desc:"Explore higher-performance HP laptop options.",img:image("photo-1588872657578-7efd1f1555ed")},
  {name:"HP ProBook",cat:"computers",sub:"HP",desc:"Business laptops for work and study.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"HP EliteBook",cat:"computers",sub:"HP",desc:"Explore business-class HP laptops.",img:image("photo-1588872657578-7efd1f1555ed")},
  {name:"Dell Latitude",cat:"computers",sub:"Dell",desc:"Business laptop options for productivity.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"Dell Inspiron",cat:"computers",sub:"Dell",desc:"Laptop options for home and work.",img:image("photo-1517336714731-489689fd1ca8")},
  {name:"Dell XPS",cat:"computers",sub:"Dell",desc:"Explore premium Dell laptop options.",img:image("photo-1588872657578-7efd1f1555ed")},
  {name:"Lenovo ThinkPad",cat:"computers",sub:"Lenovo",desc:"Business laptops for productivity.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"Lenovo IdeaPad",cat:"computers",sub:"Lenovo",desc:"Laptops for study, home and office.",img:image("photo-1517336714731-489689fd1ca8")},
  {name:"Lenovo Yoga",cat:"computers",sub:"Lenovo",desc:"Explore convertible laptop options.",img:image("photo-1588872657578-7efd1f1555ed")},
  {name:"Acer Aspire",cat:"computers",sub:"Acer",desc:"Everyday laptops for different needs.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"Acer TravelMate",cat:"computers",sub:"Acer",desc:"Business and productivity laptop options.",img:image("photo-1517336714731-489689fd1ca8")},
  {name:"ASUS VivoBook",cat:"computers",sub:"ASUS",desc:"Laptops for study and everyday work.",img:image("photo-1588872657578-7efd1f1555ed")},
  {name:"ASUS ZenBook",cat:"computers",sub:"ASUS",desc:"Explore slim ASUS laptop options.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"Apple MacBook Air",cat:"computers",sub:"Apple MacBook",desc:"Ask about available MacBook models.",img:image("photo-1517336714731-489689fd1ca8")},
  {name:"Apple MacBook Pro",cat:"computers",sub:"Apple MacBook",desc:"Explore MacBook Pro options.",img:image("photo-1517336714731-489689fd1ca8")},
  {name:"Microsoft Surface",cat:"computers",sub:"Microsoft Surface",desc:"Portable computer options from Surface.",img:image("photo-1588872657578-7efd1f1555ed")},
  {name:"Gaming Laptops",cat:"computers",sub:"Gaming Laptops",desc:"Ask about graphics, RAM and gaming performance.",img:image("photo-1593642632823-8f785ba67e45")},
  {name:"Chromebooks",cat:"computers",sub:"Chromebooks",desc:"Laptops designed around ChromeOS.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"Desktop Computers",cat:"computers",sub:"Desktop Computers",desc:"Ask about available desktop configurations.",img:image("photo-1587831990711-23ca6441447b")},

  // COMPUTER ACCESSORIES — 20
  {name:"Wireless Mouse",cat:"computer-accessories",sub:"Mice",desc:"Wireless mice for laptops and desktops.",img:image("photo-1527814050087-3793815479db")},
  {name:"Wired USB Mouse",cat:"computer-accessories",sub:"Mice",desc:"USB mice for everyday computer use.",img:image("photo-1527814050087-3793815479db")},
  {name:"Mechanical Keyboard",cat:"computer-accessories",sub:"Keyboards",desc:"Ask about available keyboard layouts.",img:image("photo-1587829741301-dc798b83add3")},
  {name:"USB Keyboard",cat:"computer-accessories",sub:"Keyboards",desc:"Keyboards for compatible computers.",img:image("photo-1587829741301-dc798b83add3")},
  {name:"Wireless Keyboard and Mouse Set",cat:"computer-accessories",sub:"Keyboard & Mouse Sets",desc:"Convenient wireless desktop accessories.",img:image("photo-1587829741301-dc798b83add3")},
  {name:"Laptop Bags",cat:"computer-accessories",sub:"Laptop Bags",desc:"Carry and protect your laptop.",img:image("photo-1553062407-98eeb64c6a62")},
  {name:"Laptop Backpacks",cat:"computer-accessories",sub:"Laptop Bags",desc:"Backpacks for laptops and accessories.",img:image("photo-1553062407-98eeb64c6a62")},
  {name:"Laptop Cooling Pads",cat:"computer-accessories",sub:"Cooling Pads",desc:"Cooling accessories for compatible laptops.",img:image("photo-1496181133206-80ce9b88a853")},
  {name:"Laptop Stands",cat:"computer-accessories",sub:"Laptop Stands",desc:"Raise your laptop for a comfortable setup.",img:image("photo-1527864550417-7fd91fc51a46")},
  {name:"USB Flash Drives",cat:"computer-accessories",sub:"Flash Drives",desc:"Portable storage in different capacities.",img:image("photo-1618410320928-25228d811631")},
  {name:"External Hard Drives",cat:"computer-accessories",sub:"External Drives",desc:"Additional storage for your files.",img:image("photo-1531492746076-161ca9bcad58")},
  {name:"External SSD Drives",cat:"computer-accessories",sub:"External Drives",desc:"Portable solid-state storage options.",img:image("photo-1531492746076-161ca9bcad58")},
  {name:"Computer RAM",cat:"computer-accessories",sub:"RAM & SSD",desc:"Ask about compatible RAM type and capacity.",img:image("photo-1531492746076-161ca9bcad58")},
  {name:"Internal SSD Drives",cat:"computer-accessories",sub:"RAM & SSD",desc:"Storage upgrades for compatible computers.",img:image("photo-1531492746076-161ca9bcad58")},
  {name:"External DVD Drives",cat:"computer-accessories",sub:"External Drives",desc:"External optical drives for supported computers.",img:image("photo-1587831990711-23ca6441447b")},
  {name:"USB Hubs",cat:"computer-accessories",sub:"USB Hubs",desc:"Expand available USB connections.",img:image("photo-1625842268584-8f3296236761")},
  {name:"Laptop Chargers",cat:"computer-accessories",sub:"Laptop Chargers",desc:"Find a charger compatible with your laptop.",img:image("photo-1583863788434-e58a36330cf0")},
  {name:"HDMI Cables",cat:"computer-accessories",sub:"HDMI Cables",desc:"Connect computers to compatible displays.",img:image("photo-1625842268584-8f3296236761")},
  {name:"Computer Monitors",cat:"computer-accessories",sub:"Monitors",desc:"Displays for home, office and study.",img:image("photo-1527443224154-c4a3942d3acf")},
  {name:"Webcams",cat:"computer-accessories",sub:"Webcams",desc:"Webcams for video meetings and online learning.",img:image("photo-1587829741301-dc798b83add3")}
];

const categoryNames = {
  phones: "Phones",
  "phone-accessories": "Phone Accessories",
  computers: "Computers & Laptops",
  "computer-accessories": "Computer Accessories"
};

const categoryButtons = document.querySelectorAll(".category-card");
const subcategoryContainer = document.getElementById("subcategoryButtons");
const searchInput = document.getElementById("productSearch");
const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

let activeCategory = "all";
let activeSubcategory = "all";

function getCategories() {
  if (activeCategory !== "all") {
    return products.filter(p => p.cat === activeCategory);
  }
  return products;
}

function buildSubcategories() {
  subcategoryContainer.innerHTML = "";

  const available = getCategories();
  const subs = ["all", ...new Set(available.map(p => p.sub))];

  subs.forEach(sub => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subcategory-button";
    button.textContent = sub === "all" ? "All Subcategories" : sub;

    if (sub === activeSubcategory) button.classList.add("active");

    button.addEventListener("click", () => {
      activeSubcategory = sub;
      buildSubcategories();
      renderProducts();
    });

    subcategoryContainer.appendChild(button);
  });
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  productGrid.innerHTML = "";

  const filtered = products.filter(p => {
    const categoryMatch = activeCategory === "all" || p.cat === activeCategory;
    const subcategoryMatch = activeSubcategory === "all" || p.sub === activeSubcategory;
    const textMatch = (p.name + " " + p.desc + " " + p.sub + " " + categoryNames[p.cat])
      .toLowerCase().includes(query);
    return categoryMatch && subcategoryMatch && textMatch;
  });

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image";

    const img = document.createElement("img");
    img.src = p.img;
    img.alt = p.name;
    img.loading = "lazy";
    img.onerror = () => {
      img.onerror = null;
      img.src = "https://placehold.co/600x400/eef2f7/10233f?text=" +
        encodeURIComponent(p.name);
    };

    const info = document.createElement("div");
    info.className = "product-info";

    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = p.sub;

    const title = document.createElement("h3");
    title.textContent = p.name;

    const desc = document.createElement("p");
    desc.textContent = p.desc;

    const button = document.createElement("button");
    button.className = "btn whatsapp";
    button.type = "button";
    button.textContent = "Ask on WhatsApp";

    button.addEventListener("click", () => {
      const message = `Hello AJ's Electronic, I'm interested in ${p.name}. Please share the price, specifications and availability.`;
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener"
      );
    });

    imageWrap.appendChild(img);
    info.append(tag, title, desc, button);
    card.append(imageWrap, info);
    productGrid.appendChild(card);
  });

  resultCount.textContent = `Showing ${filtered.length} of ${products.length} products`;

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No matching products found. Try another search or category.";
    productGrid.appendChild(empty);
  }
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.filter;
    activeSubcategory = "all";
    buildSubcategories();
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

menuToggle.addEventListener("click", () => {
  const opened = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

buildSubcategories();
renderProducts();