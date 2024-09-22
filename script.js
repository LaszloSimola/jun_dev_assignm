let currentIndex = 0;
let products = [];

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');

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
        productImage.srcset = `${product.image} 1x, ${product.imageLarge} 2x`;
        productImage.alt = product.title;
        productImage.classList.add('product-image');
        productContainer.loading = "lazy";
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

document.addEventListener('DOMContentLoaded', () => {
    fetchPhotos();
});
function fetchPhotos() {
    fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
        .then(response => response.json())
        .then(data => {
            const imageTextContainer = document.getElementById('imageTextContainer');
            data.photos.forEach(photo => {
                const imageTextItem = document.createElement('div');
                imageTextItem.classList.add('image-text-item');

                const img = document.createElement('img');
                img.src = photo.url;
                img.alt = photo.title || "Image";
                img.classList.add('right-image');

                const textContainer = document.createElement('div');
                const title = document.createElement('h3');
                title.textContent = photo.title || "Image Title";
                title.style.marginBottom = '2px';
                const description = document.createElement('p');
                description.textContent = "Many years ago, I worked for my parents who own a video production company.";
                description.classList.add('image-description');

                const line = document.createElement('hr'); // Create a horizontal line
                line.style.border = 'none'; // Remove default border
                line.style.borderTop = '1px solid #ccc'; // Add a custom line style
                line.style.margin = '10px 0'; // Adjust margins as needed


                const author = document.createElement('p'); // Add author text
                author.textContent = "By: Peter Rowardson";
                author.style.color = 'grey';
                author.style.marginTop = '2px';
                author.style.fontSize = '0.9rem';


                textContainer.appendChild(title);
                textContainer.appendChild(description);
                textContainer.appendChild(line);
                textContainer.appendChild(author);
                imageTextItem.appendChild(img);
                imageTextItem.appendChild(textContainer);
                imageTextContainer.appendChild(imageTextItem);
            });
        })
        .catch(err => console.error('Error fetching photos:', err));
}

