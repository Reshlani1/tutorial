document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you! Your request has been sent.");
      form.reset();
    });
  }
});