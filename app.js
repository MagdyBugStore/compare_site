// ===========================================================
// DeviceHub — e-commerce demo with Cart + Compare (max 5)
// Routing: hash-based with slug URLs
//   #/                 -> product grid
//   #/product/:slug    -> product detail
//   #/compare          -> compare table (up to 5 products)
//   #/cart             -> cart page
// ===========================================================

const STORAGE_KEYS = { cart: "dh_cart", compare: "dh_compare" };
const MAX_COMPARE = 5;

// ---------- state helpers ----------
function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
}
function setCart(items) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
  updateHeaderCounts();
}
function getCompare() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.compare) || "[]");
}
function setCompare(slugs) {
  localStorage.setItem(STORAGE_KEYS.compare, JSON.stringify(slugs));
  updateHeaderCounts();
}

function findProduct(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

function updateHeaderCounts() {
  const cart = getCart();
  const cartTotalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cart-count").textContent = cartTotalQty;
  document.getElementById("compare-count").textContent = getCompare().length;
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---------- cart actions ----------
function addToCart(slug) {
  const cart = getCart();
  const existing = cart.find(i => i.slug === slug);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ slug, qty: 1 });
  }
  setCart(cart);
  const p = findProduct(slug);
  showToast(`Added "${p.name}" to cart`);
}

function removeFromCart(slug) {
  setCart(getCart().filter(i => i.slug !== slug));
  render();
}

function changeQty(slug, delta) {
  const cart = getCart();
  const item = cart.find(i => i.slug === slug);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  setCart(cart);
  render();
}

// ---------- compare actions ----------
function isInCompare(slug) {
  return getCompare().includes(slug);
}

function toggleCompare(slug) {
  let list = getCompare();
  if (list.includes(slug)) {
    list = list.filter(s => s !== slug);
    setCompare(list);
    render();
    return;
  }
  if (list.length >= MAX_COMPARE) {
    showToast(`You can compare up to ${MAX_COMPARE} devices. Remove one first.`);
    return;
  }
  list.push(slug);
  setCompare(list);
  const p = findProduct(slug);
  showToast(`Added "${p.name}" to compare (${list.length}/${MAX_COMPARE})`);
  render();
}

function clearCompare() {
  setCompare([]);
  render();
}

// ---------- image placeholder ----------
function placeholder(spec, extraClass = "") {
  return `
    <div class="img-placeholder ${extraClass}" style="aspect-ratio:${spec.w}/${spec.h}">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <span>${spec.label}</span>
      <span class="dim">${spec.w} × ${spec.h}px</span>
    </div>`;
}

function productImage(p, slot) {
  const spec = IMAGE_SPEC[slot];
  if (p.image) {
    return `<img src="${p.image}" alt="${p.name}" class="prod-img" style="aspect-ratio:${spec.w}/${spec.h}">`;
  }
  return placeholder(spec);
}

// ===========================================================
// ROUTER
// ===========================================================
function parseRoute() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "product" && parts[1]) return { name: "product", slug: decodeURIComponent(parts[1]) };
  if (parts[0] === "compare") return { name: "compare" };
  if (parts[0] === "cart") return { name: "cart" };
  return { name: "notfound" };
}

function render() {
  updateHeaderCounts();
  const route = parseRoute();
  const app = document.getElementById("app");
  switch (route.name) {
    case "home": app.innerHTML = renderHome(); break;
    case "product": app.innerHTML = renderProduct(route.slug); break;
    case "compare": app.innerHTML = renderCompare(); break;
    case "cart": app.innerHTML = renderCart(); break;
    default: app.innerHTML = `<div class="empty-state"><h2>404</h2><p>Page not found.</p><a href="#/">Back to shop</a></div>`;
  }
  attachEvents();
  window.scrollTo({ top: 0, behavior: "instant" });
}

// ===========================================================
// VIEW: Home / Product grid
// ===========================================================
function renderHome() {
  const cards = PRODUCTS.map(p => `
    <article class="card" data-slug="${p.slug}">
      <a href="#/product/${p.slug}" class="card-img-link">
        ${productImage(p, "card")}
      </a>
      <div class="card-body">
        <span class="brand-tag">${p.brand}</span>
        <h3><a href="#/product/${p.slug}">${p.name}</a></h3>
        <p class="card-spec">${p.display.size} · ${p.platform.chipset.split("(")[0].trim()}</p>
        <p class="price">${p.priceDisplay.split("/")[0].trim()}</p>
        <div class="card-actions">
          <button class="btn btn-primary" data-action="add-cart" data-slug="${p.slug}">Add to Cart</button>
          <button class="btn btn-outline ${isInCompare(p.slug) ? "active" : ""}" data-action="toggle-compare" data-slug="${p.slug}">
            ${isInCompare(p.slug) ? "✓ Comparing" : "+ Compare"}
          </button>
        </div>
      </div>
    </article>
  `).join("");

  return `
    <section class="page-head">
      <h1>Shop Devices</h1>
      <p>Browse smartphones, add to your cart, or compare up to ${MAX_COMPARE} devices side-by-side.</p>
    </section>
    <div class="grid">${cards}</div>
  `;
}

// ===========================================================
// VIEW: Product detail (#/product/:slug)
// ===========================================================
function renderProduct(slug) {
  const p = findProduct(slug);
  if (!p) {
    return `<div class="empty-state"><h2>Product not found</h2><a href="#/">Back to shop</a></div>`;
  }

  const specRows = [
    ["Network", p.network],
    ["Announced", p.launch.announced],
    ["Status", p.launch.status],
    ["Dimensions", p.body.dimensions],
    ["Weight", p.body.weight],
    ["Build", p.body.build],
    ["Protection", p.body.protection],
    ["Display Type", p.display.type],
    ["Display Size", p.display.size],
    ["Resolution", p.display.resolution],
    ["OS", p.platform.os],
    ["Chipset", p.platform.chipset],
    ["CPU", p.platform.cpu],
    ["GPU", p.platform.gpu],
    ["Internal Memory", p.memory.internal],
    ["Main Camera", p.main_camera.lenses.join(" • ")],
    ["Main Camera Video", p.main_camera.video],
    ["Selfie Camera", p.selfie_camera.lenses.join(" • ")],
    ["Loudspeaker", p.sound.loudspeaker],
    ["3.5mm Jack", p.sound.jack_3_5mm],
    ["WLAN", p.comms.wlan],
    ["Bluetooth", p.comms.bluetooth],
    ["USB", p.comms.usb],
    ["Sensors", (p.features.sensors || []).join(", ")],
    ["Battery", p.battery.type],
    ["Charging", p.battery.charging],
    ["Colors", (p.misc.colors || []).join(", ")],
    ["Price", p.priceDisplay],
  ];

  return `
    <a href="#/" class="back-link">&larr; Back to shop</a>
    <div class="product-detail">
      <div class="product-media">
        ${productImage(p, "gallery")}
      </div>
      <div class="product-info">
        <span class="brand-tag">${p.brand}</span>
        <h1>${p.name}</h1>
        <p class="price-lg">${p.priceDisplay.split("/")[0].trim()}</p>
        <p class="full-price">${p.priceDisplay}</p>
        <div class="product-actions">
          <button class="btn btn-primary btn-lg" data-action="add-cart" data-slug="${p.slug}">Add to Cart</button>
          <button class="btn btn-outline btn-lg ${isInCompare(p.slug) ? "active" : ""}" data-action="toggle-compare" data-slug="${p.slug}">
            ${isInCompare(p.slug) ? "✓ In Compare" : "+ Add to Compare"}
          </button>
        </div>
      </div>
    </div>

    <h2 class="section-title">Full Specifications</h2>
    <table class="spec-table">
      <tbody>
        ${specRows.map(([label, val]) => `
          <tr><th>${label}</th><td>${val || "—"}</td></tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

// ===========================================================
// VIEW: Compare (#/compare) — up to 5 devices, full spec rows
// ===========================================================
const COMPARE_SPEC_GROUPS = [
  { group: "Overview", rows: [
    ["Price", p => p.priceDisplay],
    ["Announced", p => p.launch.announced],
    ["Status", p => p.launch.status],
  ]},
  { group: "Body", rows: [
    ["Dimensions", p => p.body.dimensions],
    ["Weight", p => p.body.weight],
    ["Build", p => p.body.build],
    ["Protection", p => p.body.protection],
  ]},
  { group: "Display", rows: [
    ["Type", p => p.display.type],
    ["Size", p => p.display.size],
    ["Resolution", p => p.display.resolution],
  ]},
  { group: "Platform", rows: [
    ["OS", p => p.platform.os],
    ["Chipset", p => p.platform.chipset],
    ["CPU", p => p.platform.cpu],
    ["GPU", p => p.platform.gpu],
  ]},
  { group: "Memory", rows: [
    ["Internal", p => p.memory.internal],
    ["Card Slot", p => p.memory.card_slot],
  ]},
  { group: "Main Camera", rows: [
    ["Lenses", p => p.main_camera.lenses.join("<br>")],
    ["Video", p => p.main_camera.video],
  ]},
  { group: "Selfie Camera", rows: [
    ["Lenses", p => p.selfie_camera.lenses.join("<br>")],
    ["Video", p => p.selfie_camera.video],
  ]},
  { group: "Battery", rows: [
    ["Type", p => p.battery.type],
    ["Charging", p => p.battery.charging],
  ]},
  { group: "Connectivity", rows: [
    ["WLAN", p => p.comms.wlan],
    ["Bluetooth", p => p.comms.bluetooth],
    ["USB", p => p.comms.usb],
    ["NFC", p => p.comms.nfc],
  ]},
];

function renderCompare() {
  const slugs = getCompare();
  const products = slugs.map(findProduct).filter(Boolean);

  if (products.length === 0) {
    return `
      <div class="empty-state">
        <h2>No devices to compare yet</h2>
        <p>Pick up to ${MAX_COMPARE} devices from the shop to compare specs side-by-side.</p>
        <a href="#/" class="btn btn-primary">Browse devices</a>
      </div>`;
  }

  const head = `
    <tr>
      <th class="row-label-col">Spec</th>
      ${products.map(p => `
        <th class="compare-col">
          <div class="compare-col-head">
            ${productImage(p, "thumb")}
            <div>
              <a href="#/product/${p.slug}">${p.name}</a>
              <button class="link-btn" data-action="toggle-compare" data-slug="${p.slug}">Remove</button>
            </div>
          </div>
        </th>`).join("")}
    </tr>`;

  const body = COMPARE_SPEC_GROUPS.map(g => `
    <tr class="group-row"><td colspan="${products.length + 1}">${g.group}</td></tr>
    ${g.rows.map(([label, fn]) => `
      <tr>
        <th class="row-label-col">${label}</th>
        ${products.map(p => `<td>${fn(p) || "—"}</td>`).join("")}
      </tr>`).join("")}
  `).join("");

  return `
    <section class="page-head">
      <h1>Compare Devices</h1>
      <p>${products.length} / ${MAX_COMPARE} devices selected.
        <button class="link-btn" data-action="clear-compare">Clear all</button>
      </p>
    </section>
    <div class="table-scroll">
      <table class="compare-table">
        <thead>${head}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
}

// ===========================================================
// VIEW: Cart (#/cart)
// ===========================================================
function renderCart() {
  const cart = getCart();
  if (cart.length === 0) {
    return `
      <div class="empty-state">
        <h2>Your cart is empty</h2>
        <a href="#/" class="btn btn-primary">Browse devices</a>
      </div>`;
  }

  const rows = cart.map(item => {
    const p = findProduct(item.slug);
    if (!p) return "";
    const lineTotal = (p.price * item.qty).toFixed(2);
    return `
      <tr>
        <td class="cart-thumb-cell">${productImage(p, "thumb")}</td>
        <td>
          <a href="#/product/${p.slug}">${p.name}</a>
          <div class="muted">${p.priceDisplay.split("/")[0].trim()} each</div>
        </td>
        <td class="qty-cell">
          <button class="qty-btn" data-action="qty-dec" data-slug="${p.slug}">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-action="qty-inc" data-slug="${p.slug}">+</button>
        </td>
        <td class="price-cell">$${lineTotal}</td>
        <td><button class="link-btn" data-action="remove-cart" data-slug="${p.slug}">Remove</button></td>
      </tr>`;
  }).join("");

  const total = cart.reduce((sum, item) => {
    const p = findProduct(item.slug);
    return sum + (p ? p.price * item.qty : 0);
  }, 0).toFixed(2);

  return `
    <section class="page-head"><h1>Your Cart</h1></section>
    <div class="table-scroll">
      <table class="cart-table">
        <thead><tr><th></th><th>Product</th><th>Qty</th><th>Total</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="cart-summary">
      <span>Order Total</span>
      <strong>$${total}</strong>
    </div>
    <button class="btn btn-primary btn-lg" data-action="checkout">Checkout</button>
  `;
}

// ===========================================================
// EVENT DELEGATION
// ===========================================================
function attachEvents() {
  document.querySelectorAll("[data-action]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const action = el.dataset.action;
      const slug = el.dataset.slug;
      if (action === "add-cart") addToCart(slug);
      if (action === "toggle-compare") toggleCompare(slug);
      if (action === "remove-cart") removeFromCart(slug);
      if (action === "qty-inc") changeQty(slug, 1);
      if (action === "qty-dec") changeQty(slug, -1);
      if (action === "clear-compare") clearCompare();
      if (action === "checkout") { showToast("Demo checkout — order placed!"); setCart([]); render(); }
      if (action === "add-cart" || action === "toggle-compare") {
        // refresh button state in place without full reroute jank
        render();
      }
    });
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
