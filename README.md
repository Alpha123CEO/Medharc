# MEDHARC, LLC — Static Website (Starter)

This repository contains a static, multi-page website for MEDHARC, LLC implementing the website plan you provided. It's built with plain HTML, CSS, and a small JavaScript helper.

Included files
- index.html — Home / landing
- about.html — Company story, founder, mission
- services.html — Detailed services and example packages
- contact.html — Contact form (Formspree placeholder)
- styles.css — Central stylesheet
- script.js — Small UI helpers (mobile menu, form status)
- assets/logo.svg — Simple SVG logo placeholder

Local preview
1. Put the files in a folder (preserve the `assets/` directory).
2. Open `index.html` in your browser, or run a local server:
   - Python 3: `python -m http.server 8000`
   - Node: `npx http-server` or `npx serve`
   Then open http://localhost:8000

Contact form
- The contact form posts to Formspree by default. Replace the `action` attribute in `contact.html` with your Formspree form URL (or your backend endpoint) before going live:
  - Example: `action="https://formspree.io/f/abcd1234`"

Customizations & next steps
- Replace the placeholder logo with your official logo at `assets/logo.svg`.
- Update contact details, founder name, and any legal disclaimers.
- Add SSL and host on GitHub Pages, Netlify, or Vercel for easy deployment.
- If you want a client portal later, I can convert this into a Next.js app with authentication and a simple dashboard.

If you'd like I can:
- Push these files to a new or existing GitHub repository for you (you provided Alpha123CEO/MEDharc).
- Convert the site to WordPress/Elementor, Next.js, or another stack.
- Wire up an actual form backend and deploy to a hosting provider.
