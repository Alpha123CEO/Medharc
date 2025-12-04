// script.js — small UI helpers: mobile menu and contact form status
document.addEventListener('DOMContentLoaded', function() {
  // Set copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('primary-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      // toggle nav visibility for small screens
      var isHidden = nav.getAttribute('aria-hidden') === 'true';
      nav.setAttribute('aria-hidden', String(!isHidden));
    });
    // ensure initial aria-hidden for small screens
    if (window.innerWidth <= 900) nav.setAttribute('aria-hidden', 'true');
  }

  // Form UI status (for forms using Formspree or other POST handlers)
  var contactForm = document.getElementById('contactForm');
  var statusEl = document.getElementById('formStatus');
  if (contactForm && statusEl) {
    contactForm.addEventListener('submit', function(e) {
      // Provide immediate feedback; the form still posts to the form action.
      statusEl.textContent = 'Sending…';
      // Optionally: intercept and submit via fetch to keep user on page.
      // For now we let the browser handle the POST so Formspree / backend receives it.
    });
  }
});