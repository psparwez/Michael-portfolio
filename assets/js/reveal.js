ScrollReveal().reveal("header", {
  duration: 1500,
  delay: 500,
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 300,
};

// || ** HOME

ScrollReveal().reveal("#home .left-side h1", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal("#home .left-side p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("#home .left-side .buttons button", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal("#home .right-side figure > img", {
  ...scrollRevealOption,
  delay: 1000,
  distance: "100px",
  origin: "right",
});
ScrollReveal().reveal("#home .right-side .icons .icon ", {
  delay: 1000,
  scale: 0.8,
  interval: 500,
});

// || ** SPONSOR
ScrollReveal().reveal(".sponsors-images img", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

// || ** SERVICES
ScrollReveal().reveal(".service-card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

// || ** ABOUT ME

ScrollReveal().reveal("#about .left-side img", {
  ...scrollRevealOption,
  delay: 500,
  scale: 0.8,
});
ScrollReveal().reveal(".contact-info p", {
  ...scrollRevealOption,
  delay: 2000,
  interval: 500,
});
ScrollReveal().reveal(".about-bottom a", {
  ...scrollRevealOption,
  delay: 2300,
});
ScrollReveal().reveal(".divider", {
  ...scrollRevealOption,
  delay: 2500,
  origin: "left",
});
ScrollReveal().reveal(".social-lists p", {
  ...scrollRevealOption,
  delay: 2700,
  origin: "left",
});
ScrollReveal().reveal(".social-lists .social-icons a", {
  ...scrollRevealOption,
  delay: 3000,
  interval: 500,
});

// || ** SKILLSET

ScrollReveal().reveal(".label", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section-text", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".section-heading", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".section-description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".skillset-btn", {
  ...scrollRevealOption,
  delay: 1600,
  origin: "buttom",
  scale: 0.8,
});

// || **  PROJECTS

ScrollReveal().reveal(".portfolio-card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
  distance: "30px",
  scale: 0.9,
});

// || ** CTA

ScrollReveal().reveal(".cta-container", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".cta-container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".cta-container h2", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".cta-container .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// || ** COUNTER
ScrollReveal().reveal(".counter-grid", {
  ...scrollRevealOption,
});

// || ** EDUCATION & QUALIFICATION

ScrollReveal().reveal(".edu-lists li h3", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".edu-lists li p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

// || ** BLOG
ScrollReveal().reveal(".blog-list li", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

// || ** FOOTER

ScrollReveal().reveal(".footer-top h2", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".footer-top .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".footer-bottom .social-lists li", {
  ...scrollRevealOption,
  delay: 2000,
  interval: 500,
  distance: "30px",
});
ScrollReveal().reveal(".footer-bottom p", {
  ...scrollRevealOption,
  distance: "30px",
});
