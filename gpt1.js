    document.addEventListener("DOMContentLoaded", () => {
  const startBox = document.querySelector(".start-box");
  const startBtn = document.querySelector(".start-btn");
  const infoBox = document.querySelector(".info-box");
  const exitBtn = document.querySelector(".exit-btn");
  const navLinks = document.querySelectorAll(".nav a");
  const pages = document.querySelectorAll(".page");

  // Hide all pages initially
  pages.forEach(page => (page.style.display = "none"));
  infoBox.style.display = "none"; // hide instructions
  startBox.style.display = "block"; // show home/start first

  // Start Quiz -> show instructions
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startBox.style.display = "none";
      infoBox.style.display = "block";
    });
  }

  // Exit instructions -> go back to start
  if (exitBtn) {
    exitBtn.addEventListener("click", () => {
      infoBox.style.display = "none";
      startBox.style.display = "block";
    });
  }

  // Function to hide all pages
  function hideAllPages() {
    pages.forEach(page => (page.style.display = "none"));
    startBox.style.display = "none"; // also hide startBox when navigating
    infoBox.style.display = "none"; // hide instructions when navigating
  }

  // Navigation logic
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // remove active class from all
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      hideAllPages();

      const target = link.textContent.trim().toLowerCase(); // Home, About, Services, Contact

      if (target === "home") {
        startBox.style.display = "block"; // show start box instead of #home
      } else {
        const targetPage = document.getElementById(target);
        if (targetPage) {
          targetPage.style.display = "block";
        }
      }
    });
  });
});
