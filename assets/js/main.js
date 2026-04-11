function toggleNav() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('active');
  });
});
