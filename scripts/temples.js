// temples.js

// Footer copyright year and last modified
document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Last modified
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Hamburger menu setup
  const nav = document.querySelector("nav ul");
  const header = document.querySelector("header");

  // Create hamburger button
  const hamburgerBtn = document.createElement("button");
  hamburgerBtn.classList.add("hamburger");
  hamburgerBtn.setAttribute("aria-label", "Toggle navigation");
  hamburgerBtn.textContent = "☰"; // Hamburger icon
  header.insertBefore(hamburgerBtn, nav);

  // Toggle menu visibility
  hamburgerBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
      hamburgerBtn.textContent = "✖"; // Close icon
    } else {
      hamburgerBtn.textContent = "☰"; // Hamburger icon
    }
  });
});
