document.addEventListener("DOMContentLoaded", () => {
  // sticky header

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Toggle theme
  const toggleBtn = document.querySelector("[data-theme-toggle-btn]");

  const body = document.body;

  // Set the theme based on user click
  toggleBtn.addEventListener("click", () => {
    // Toggle the 'dark' class on the body
    body.classList.toggle("dark");
    body.classList.remove("active");

    // Save the current theme in localStorage (as a string "dark" or "light")
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });

  // Get the theme from localStorage on page load
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  //  smooth scroll slow and fast
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - 80; // Adjust for offset
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Total animation time in ms
        let startTime = null;

        const easeInOutQuad = (time, start, change, duration) => {
          time /= duration / 2;
          if (time < 1) return (change / 2) * time * time + start;
          time--;
          return (-change / 2) * (time * (time - 2) - 1) + start;
        };

        const animateScroll = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const run = easeInOutQuad(
            elapsedTime,
            startPosition,
            distance,
            duration
          );
          window.scrollTo(0, run);
          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    });
  });

  // Skill bar animate

  const skillBars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // Trigger when at least 10% is visible
  );

  skillBars.forEach((bar) => observer.observe(bar));

  //  Counter update

  const counters = document.querySelectorAll(".counter-item h3");

  const animateCounter = (counter) => {
    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ""), 10); // Extract the number
    const duration = 2000; // Animation duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / target));

    let current = 0;
    const increment = target / (duration / stepTime);

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.textContent =
          target + (counter.textContent.includes("+") ? "+" : "");
      } else {
        counter.textContent = Math.floor(current);
        setTimeout(updateCounter, stepTime);
      }
    };

    updateCounter();
  };

  const observerCounter = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  counters.forEach((counter) => observerCounter.observe(counter));
});

const dataCategoryBts = document.querySelectorAll(".tabs li"),
  allProjectsCard = document.querySelectorAll(".portfolio-card");

const shareIcon = document.querySelectorAll(".share-icon");

dataCategoryBts.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove 'active' class from all buttons and add it to the clicked one
    dataCategoryBts.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    // Filter projects based on the selected category
    allProjectsCard.forEach((project) => {
      const projectCategory = project.getAttribute("data-category");
      const category = btn.getAttribute("data-category");

      // Show all projects if '*' is clicked
      if (category === "*" || projectCategory === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Project share button

const shareIcons = document.querySelectorAll(".share-icon");
const URL = "https://github.com/psparwez";

shareIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (navigator.share) {
      navigator
        .share({
          url: URL, // Share the current page URL
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      // Fallback behavior for desktop browsers (not supported)
      alert(
        "Web Share API is not supported on this device. You can copy the link manually."
      );
    }
  });
});

// Book call button

const bookCallBtn = document.querySelector("[data-book-call]");

bookCallBtn?.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:3000/contact.html";
});

// Toggle menu
const toggleMenuBtns = document.querySelectorAll("[data-menu-toggle-btn]");
const menu = document.querySelector("[data-menu-lists]");

function toggleMenu() {
  menu.classList.toggle("active");
  toggleMenuBtns.forEach((toggleMenuBtn) => {
    toggleMenuBtn.classList.toggle("active");
  });
  document.body.classList.toggle("active");
}

toggleMenuBtns.forEach((toggleMenuBtn) => {
  toggleMenuBtn.addEventListener("click", toggleMenu);
});

const liItems = menu.querySelectorAll("ul li");

if (window.innerWidth <= 850) {
  liItems.forEach((liItem) => {
    liItem.addEventListener("click", toggleMenu);
  });
}
