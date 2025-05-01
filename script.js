// script.js

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });
  