let body = document.body;
let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
