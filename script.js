document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.getElementById("home-page");
  const mainPortfolio = document.getElementById("main-portfolio");
  const viewPortfolioBtn = document.getElementById("view-portfolio-btn");
  const backHomeBtn = document.getElementById("back-home-btn");

  const navBtns = document.querySelectorAll(".nav-btn");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".close-btn");

  const certInput = document.getElementById("cert-input");
  const certList = document.getElementById("cert-list");

  // Show Main Portfolio view
  viewPortfolioBtn.addEventListener("click", () => {
    homePage.classList.remove("active");
    mainPortfolio.classList.add("active");
  });

  // Return to Home Page
  backHomeBtn.addEventListener("click", () => {
    mainPortfolio.classList.remove("active");
    homePage.classList.add("active");
  });

  // Open Modal Popup when clicking ABOUT, SKILLS, PROJECTS, CONTRACTS
  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetModalId = btn.getAttribute("data-target");
      const targetModal = document.getElementById(targetModalId);
      if (targetModal) {
        targetModal.classList.add("open");
      }
    });
  });

  // Close Modal on 'X' click
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("open");
    });
  });

  // Close Modal on clicking background
  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  });

  // Certificate Upload Handler
  certInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const item = document.createElement("div");
        item.className = "cert-item";

        if (file.type.startsWith("image/")) {
          item.innerHTML = `
            <img src="${event.target.result}" alt="${file.name}">
            <p style="font-size:0.75rem;">${file.name}</p>
          `;
        } else {
          item.innerHTML = `
            <div style="font-size: 1.5rem;">📄</div>
            <p style="font-size:0.75rem;">${file.name}</p>
          `;
        }

        certList.appendChild(item);
      };

      reader.readAsDataURL(file);
    });
  });
});


