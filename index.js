let body = document.body;
let products = [
  {
    id: 1,
    name: "Plain Cotton T-Shirt",
    price: 2500,
    image: "images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  },
  {
    id: 2,
    name: "Golf Polo T-Shirt",
    price: 2200,
    image: "images/men-golf-polo-t-shirt-blue.jpg",
  },
  {
    id: 3,
    name: "Women's Chunky Beanie",
    price: 1800,
    image: "images/women-chunky-beanie-gray.webp",
  },
  {
    id: 4,
    name: "Men's Chino Pants",
    price: 3500,
    image: "images/men-chino-pants-beige.jpg",
  },
  {
    id: 5,
    name: "Fleece Jogger",
    price: 2800,
    image: "images/women-french-terry-fleece-jogger-camo.jpg",
  },
  {
    id: 6,
    name: "Popover Hoodie",
    price: 3200,
    image: "images/women-stretch-popover-hoodie-black.jpg",
  },
  {
    id: 7,
    name: "Fleece Zip-Up Hoodie",
    price: 3000,
    image: "images/men-cozy-fleece-zip-up-hoodie-red.jpg",
  },
  {
    id: 8,
    name: "Women's Beach Sandals",
    price: 3000,
    image: "images/women-beach-sandals.jpg",
  },
  {
    id: 9,
    name: "Athletic Cotton Socks",
    price: 3000,
    image: "images/athletic-cotton-socks-6-pairs.jpg",
  },
  {
    id: 10,
    name: "Plain Hooded Fleece Sweatshirt",
    price: 3000,
    image: "images/plain-hooded-fleece-sweatshirt-yellow.jpg",
  },
];

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
  productList = products.map((product) => {
    let productHTML = document.createElement("div");
    productHTML.classList.add("products-container");
    productHTML.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <p class="product-name">${product.name}</p>
      <p class="product-price">$${product.price}</p>
      <button class="button-cart" data-id="${product.id}">Add to Cart</button>
    `;
    return productHTML;
  });
  productList.forEach((productHTML) => {
    document.getElementById("content").appendChild(productHTML);
  });
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
