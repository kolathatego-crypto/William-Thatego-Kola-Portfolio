// Wait for the DOM to fully load before running scripts
// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Year in Footer
  // Automatically updates the copyright year so it's always current
  const footerText = document.querySelector('footer p');
  if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${currentYear} William Thatego. www.williamthatego-dev-portfolio.com`;
  }

  // 2. Interactive "View Project" Links
  // Handles clicks on your project cards gracefully
  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      
      // If the link is set to "#", show a helpful popup preview
      if (href === '#' || href === '') {
        event.preventDefault();
        const projectTitle = link.closest('.project-card')?.querySelector('h3')?.textContent || 'Project';
        alert(`You clicked to view "${projectTitle}". Add your live demo link in index.html when ready!`);
      }
    });
  });

  // 3. Highlight Active Navigation Link on Scroll
  // Subtle UX touch: highlights About, Project, or Contact in the top nav as you scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

});