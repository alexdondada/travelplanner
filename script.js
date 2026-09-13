document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Simple Contact Form Handling
  const form = document.getElementById("trip-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;

      // Simulate a successful form submission
      formMessage.style.color = "#16a34a"; // Green color
      formMessage.textContent = `Thank you, ${name}! We've received your trip details and will contact you within 24 hours.`;

      // Clear the inputs
      form.reset();
    });
  }
});
