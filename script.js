document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll with custom slow timing
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Contact form submission
  const form = document.getElementById("trip-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      formMessage.style.color = "#16a34a";
      formMessage.style.marginTop = "15px";
      formMessage.style.fontWeight = "500";
      formMessage.textContent = `Ευχαριστούμε ${name}! Λάβαμε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.`;
      form.reset();
    });
  }
});
