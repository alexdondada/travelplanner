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


// Function to switch tabs inside the trip modal
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const btns = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  btns.forEach(btn => btn.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Open Modal with custom data
function openTripModal(title, price, image, badge) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-badge').textContent = badge;
  document.getElementById('modal-header-bg').style.backgroundImage = `url('${image}')`;
  
  document.getElementById('trip-modal').style.display = 'flex';
}

function closeTripModal() {
  document.getElementById('trip-modal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  // Close modal when clicking 'X' or outside the box
  const closeModalBtn = document.getElementById('close-modal');
  const modalOverlay = document.getElementById('trip-modal');

  if(closeModalBtn) {
    closeModalBtn.addEventListener('click', closeTripModal);
  }

  if(modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeTripModal();
    });
  }

  // Connect sample trip cards to modal trigger
  const tripButtons = document.querySelectorAll('.trip-card .btn');
  tripButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if(index === 0) {
        openTripModal(
          'Amalfi Coast & Tuscany Slow Travel', 
          '€2,400', 
          'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
          '10 Days / 9 Nights'
        );
      } else if(index === 1) {
        openTripModal(
          'Stress-Free Greek Island Hopping', 
          '€1,950', 
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
          '8 Days / 7 Nights'
        );
      } else {
        openTripModal(
          'Scottish Highlands & Castles', 
          '€1,800', 
          'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=80',
          '7 Days / 6 Nights'
        );
      }
    });
  });
});
