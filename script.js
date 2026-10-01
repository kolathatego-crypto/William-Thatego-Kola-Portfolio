document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.getElementById("home-page");
  const mainPortfolio = document.getElementById("main-portfolio");
  const viewPortfolioBtn = document.getElementById("view-portfolio-btn");
  const backHomeBtn = document.getElementById("back-home-btn");

  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  const certInput = document.getElementById("cert-input");
  const certList = document.getElementById("cert-list");

  // Show Main Portfolio when "Viwe Portfolio" button is clicked
  viewPortfolioBtn.addEventListener("click", () => {
    homePage.classList.remove("active");
    mainPortfolio.classList.add("active");
    window.scrollTo(0, 0);
  });

  // Return to Home Page
  backHomeBtn.addEventListener("click", () => {
    mainPortfolio.classList.remove("active");
    homePage.classList.add("active");
    window.scrollTo(0, 0);
  });

  // Tab switching logic for ABOUT, SKILLS, PROJECTS, CONTRACTS
  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      // Set active nav button
      navBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Set active tab content
      tabContents.forEach((content) => {
        if (content.id === targetId) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });

  // Handle Certificate File Uploads
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
            <p>${file.name}</p>
          `;
        } else {
          item.innerHTML = `
            <div style="padding: 20px 0; font-size: 2rem;">📄</div>
            <p>${file.name}</p>
          `;
        }

        certList.appendChild(item);
      };

      reader.readAsDataURL(file);
    });
  });
});

