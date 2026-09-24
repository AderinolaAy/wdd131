document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

  const galleryGrid = document.querySelector(".gallery-grid");

  // Render function
  function renderTemples(filteredTemples) {
    galleryGrid.innerHTML = ""; // clear
    filteredTemples.forEach(temple => {
      const card = document.createElement("figure");
      card.classList.add("temple-card");

      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = `${temple.templeName} Temple`;

      const caption = document.createElement("figcaption");
      caption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area} sq ft
      `;

      card.appendChild(img);
      card.appendChild(caption);
      galleryGrid.appendChild(card);
    });
  }

  // Initial render
  renderTemples(temples);

  // Filtering logic
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      let filtered = temples;

      if (filter === "old") {
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 2000);
      } else if (filter === "new") {
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) >= 2000);
      } else if (filter === "large") {
        filtered = temples.filter(t => t.area > 90000);
      } else if (filter === "small") {
        filtered = temples.filter(t => t.area < 10000);
      }

      renderTemples(filtered);
    });
  });
});

// Temple data
const temples = [
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Adelaide Australia",
    location: "Marden South Australia",
    dedicated: "1999, May, 29",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Pesega Apia",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome Italy",
    dedicated: "2019, March, 10",
    area: 70000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-13906-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo Japan",
    dedicated: "1980, October, 27",
    area: 53500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-13907-main.jpg"
  },
];
