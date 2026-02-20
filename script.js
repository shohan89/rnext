// DOM elements
const price = document.getElementById('price');
const total = document.getElementById('total');
console.log("🚀 ~ total:", total)
const addToCartBtn = document.getElementById('addToCartBtn');


// State or data
const productPrice = 5000;
let totalPrice = 0;

// Set product price initially
price.innerText = `৳ ${productPrice}`;

// Set total price initially
total.innerText = `৳ ${totalPrice}`;

// Add event listener
addToCartBtn.addEventListener('click', () => {
    totalPrice += productPrice;

    // Update the UI
    total.innerText = `৳ ${totalPrice}`;
})