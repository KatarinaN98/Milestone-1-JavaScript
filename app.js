const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    description: "Description for product 1.",
    image: "https://static.igopromo.com/ish/Images/IGO/490x490/136730.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    description: "Description for product 2.",
    image: "https://imagedelivery.net/Zzk03ekrhVcCLA2TZCP3WQ/36205635/base",
  },
  // Add more products as needed
];

// Function to generate product elements dynamically
function generateProductElements() {
  const productContainer = document.getElementById("product-list");

  products.forEach((product) => {
    const productElement = document.createElement("li");

    productElement.innerHTML = `
      <div class="image-container">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;

    productContainer.appendChild(productElement);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateProductElements);

  