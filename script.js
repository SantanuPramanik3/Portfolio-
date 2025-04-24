document.addEventListener("DOMContentLoaded", function () {
    // Particles.js Initialization
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.2 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1, direction: 'none', out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
        }
      },
      retina_detect: true
    });
    // Active link on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
      // Animate circles
      document.querySelectorAll(".circle").forEach(circle => {
        const percent = parseInt(circle.getAttribute("data-percent"));
        const color = circle.getAttribute("data-color");
        circle.style.background = `conic-gradient(${color} 0% ${percent}%, rgba(255,255,255,0.05) ${percent}%)`;
        circle.style.color = color;
      });
      // Tab switching
      const tabs = document.querySelectorAll(".tab");
      const grids = document.querySelectorAll(".skills-grid");
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          grids.forEach(grid => {
            grid.classList.remove("active");
            if (grid.id === tab.dataset.target) {
              grid.classList.add("active");
            }
          });
        });
      });
    });
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        // Filter logic
        projectCards.forEach(card => {
          const cardCategory = card.classList.contains(filterValue) || filterValue === "all";
          if (cardCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Thank you! Your order request has been received.");
    });
  });
  // Wait for the DOM to fully load
    document.addEventListener("DOMContentLoaded", function () {
      const contactForm = document.getElementById("contactForm");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          // Optionally, you can add validation here
          // Show success message (you can replace with toast/animation)
          alert("Thank you! Your message has been sent successfully.");
          // Reset the form
          contactForm.reset();
        });
      }
    });
  document.addEventListener("DOMContentLoaded", function () {
      const scrollBtn = document.getElementById("scrollToTopBtn");
      window.addEventListener("scroll", () => {
        scrollBtn.style.display = (window.scrollY > 200) ? "block" : "none";
      });
      scrollBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    });