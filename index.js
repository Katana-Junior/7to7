let body = document.body;

let iconCart = document.querySelector(".icon-cart");

let closeCart = document.querySelector(".close");

let productListHTML = document.querySelector(".cart-items");

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
      productList = data.product;
      console.log(productList);
    })
    .catch((error) => console.error("Error fetching products:", error));
};

renderProducts();

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
  document.getElementById("content").innerHTML = `
  <h2>About Us</h2>
  <p>Welcome to our online store! We are passionate about providing high-quality products that enhance your lifestyle.
   Our mission is to offer a wide range of items that cater to your needs and preferences,
    all while ensuring excellent customer service. Thank you for choosing us for your shopping experience!</p>
`;
});
const addTocart = () => {
  productListHTML.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((product) => {
      let cartItemHTML = document.createElement("div");
      cartItemHTML.classList.add("products-container");
      cartItemHTML.innerHTML = `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name}" class="cart-item-image">
      <div class="cart-item-details">
        <p class="cart-item-name">${product.name}</p>
        <p class="cart-item-price">$${product.price}</p>
      </div>
    </div>
    `;
      productListHTML.appendChild(cartItemHTML);
    });
  }
  productListHTML.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    if (buttonClicked.classList.contains("button-cart")) {
      alert("Added to cart!");
    }
  });
};
//Search functionality
const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const performSearch = () => {
  const query = searchBar.value.trim().toLowerCase();
  const searchResults = productList.filter((product) =>
    product.name.toLowerCase().includes(query),
  );
  displaySearchResults(searchResults);
};
searchButton.addEventListener("click", performSearch);
searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});
const displaySearchResults = (results) => {
  const searchResultsContainer = document.querySelector(".search-results");
  searchResultsContainer.innerHTML = "";
  if (results.length > 0) {
    results.forEach((product) => {
      const productHTML = document.createElement("div");
      productHTML.classList.add("search-result-item");
      productHTML.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="search-result-image">
        <p class="search-result-name">${product.name}</p>
        <p class="search-result-price">$${product.price}</p>
      `;
      searchResultsContainer.appendChild(productHTML);
    });
  } else {
    searchResultsContainer.innerHTML = `<p>No products found.</p>`;
  }
};
