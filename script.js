let currentIndex = 0;
let products = [];

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
const navbutton = document.querySelector('.nav-button');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
    navbutton.classList.toggle('active');

})


// Fetch products and display the first one
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            products = data;
            showProduct(currentIndex);  // Show the first product on load
        })
        .catch(err => console.error('Error fetching products:', err));
}

// Show a product by index
function showProduct(index) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';  // Clear the container first

    if (products.length > 0) {
        const product = products[index];
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');
        productContainer.appendChild(productImage);
    }
}

// Add event listeners for arrow buttons
function addScrollControls() {
    const leftArrow = document.querySelector('.scroll-button.left');
    const rightArrow = document.querySelector('.scroll-button.right');

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showProduct(currentIndex);
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < products.length - 1) {
            currentIndex++;
            showProduct(currentIndex);
        }
    });
}

// Fetch products on page load and add scroll controls
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    addScrollControls();
});
