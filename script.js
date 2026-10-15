
const products = [
  {
    name: "HP ProBook Laptop",
    category: "Laptops",
    price: 19999,
    emoji: "💻"
  },
  {
    name: "Core i5 Laptop",
    category: "Laptops",
    price: 30000,
    emoji: "💻"
  },
  {
    name: "Android Smartphone",
    category: "Phones",
    price: 15000,
    emoji: "📱"
  },
  {
    name: "Tablet",
    category: "Phones",
    price: 18000,
    emoji: "📱"
  },
  {
    name: "Wireless Headphones",
    category: "Audio",
    price: 2500,
    emoji: "🎧"
  },
  {
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 3000,
    emoji: "🔊"
  },
  {
    name: "Wireless Mouse",
    category: "Accessories",
    price: 800,
    emoji: "🖱️"
  },
  {
    name: "USB Keyboard",
    category: "Accessories",
    price: 1200,
    emoji: "⌨️"
  },
  {
    name: "Smart Watch",
    category: "Smart Devices",
    price: 3500,
    emoji: "⌚"
  },
  {
    name: "Home Fridge",
    category: "Home Appliances",
    price: 38000,
    emoji: "🧊"
  }
];

let selectedCategory = "";

function displayProducts(list) {
  const grid = document.getElementById("productGrid");

  grid.innerHTML = list.map(product => `
    <article class="product">
      <div class="picture">${product.emoji}</div>
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p class="price">
        KSh ${product.price.toLocaleString("en-KE")}
      </p>
      <button class="btn"
        onclick="orderProduct('${product.name}')">
        Enquire on WhatsApp
      </button>
    </article>
  `).join("");
}

function searchProducts() {
  const query = document.getElementById("search")
    .value.toLowerCase();

  const results = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    const matchesCategory =
      !selectedCategory ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  displayProducts(results);
}

function filterCategory(category) {
  selectedCategory = category;
  searchProducts();
}

function orderProduct(name) {
  const phone = "2547XXXXXXXX";

  if (phone === "2547XXXXXXXX") {
    alert("Add your business WhatsApp number in the code first.");
    return;
  }

  const message = encodeURIComponent(
    "Hello AJ's Electronic, I am interested in " + name
  );

  window.open(
    "https://wa.me/" + phone + "?text=" + message,
    "_blank"
  );
}

displayProducts(products);