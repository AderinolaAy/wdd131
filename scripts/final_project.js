// Interactive features for RHADER Records

// Listen Now button
document.getElementById('listenBtn').addEventListener('click', function() {
  alert("Redirecting to RHADER Records latest releases!");
  window.open("https://audiomack.com/rhader", "_blank");
});

// Contact Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
