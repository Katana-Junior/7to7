let body = document.body;

let iconCart = document.querySelector(".icon-cart");

let closeCart = document.querySelector(".close");

let productListHTML = document.querySelector(".products-list");

let productList = [];
let cart = [];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const addDataToCart = () => {
  productListHTML.innerHTML = "";
  productList.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Ksh ${product.price}</p>
      <button class="button-cart" data-id="${product.id}">ADD TO CART</button>
    `;
    productListHTML.appendChild(productItem);
  });
};
productListHTML.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("button-cart")) {
    const id = target.dataset.id;
    const prod = productList.find((p) => p.id == id);
    if (prod) addToCart(prod);
  }
});

const renderProducts = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      productList = data.products;
      console.log(productList);
      addDataToCart(); // populate the DOM after loading
    })
    .catch((error) => console.error("Error fetching products:", error));
};

renderProducts();
