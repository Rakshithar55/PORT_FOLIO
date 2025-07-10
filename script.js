// 1. Smooth scroll for sidebar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Highlight active section in sidebar (on scroll)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, header, div[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 100;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute('id');

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.w3-bar-item').forEach(link => {
        link.classList.remove('w3-black');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('w3-black');
        }
      });
    }
  });
});

// 3. Confirmation on form submit (fake behavior)
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent real submit
  alert("Thank you for reaching out, Raksh will get back to you soon!");
  this.reset(); // optional: clears the form
});
