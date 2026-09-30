// Product array
const products = [
  { id: 1, name: "Smart Speaker" },
  { id: 2, name: "Wireless Headphones" },
  { id: 3, name: "Fitness Tracker" },
  { id: 4, name: "Smartphone Case" }
];

// Populate select options dynamically
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
