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
