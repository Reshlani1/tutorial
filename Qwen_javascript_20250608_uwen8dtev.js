document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you! We'll get back to you soon.");
      quoteForm.reset();
    });
  }
});