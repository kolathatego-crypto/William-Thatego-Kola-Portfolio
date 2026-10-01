// Unhide portfolio sections when clicking View Portfolio
function showPortfolio() {
    const content = document.getElementById("portfolioContent");
    const button = document.getElementById("viewBtn");

    content.style.display = "block";
    content.scrollIntoView({ behavior: 'smooth' });
    button.style.display = "none";
}

// Unhide portfolio and scroll straight to tapped section (About / Project / Contact)
function revealAndScroll(sectionId) {
    const content = document.getElementById("portfolioContent");
    const button = document.getElementById("viewBtn");

    content.style.display = "block";
    button.style.display = "none";

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
