// ==========================================
// KaileeWatch Short Dramas Studios
// Customer Service Website
// ==========================================

// PUT YOUR TWO PHONE NUMBERS HERE.
// Use the international format:
// +1 followed by the 10-digit number.

const receptionistNumber = "+14722120299";
const directorNumber = "+19106161804";


// ------------------------------------------
// Update phone links
// ------------------------------------------

const receptionistButton =
  document.getElementById("receptionistButton");

const directorButton =
  document.getElementById("directorButton");

if (receptionistButton) {
  receptionistButton.href =
    "tel:" + receptionistNumber;
}

if (directorButton) {
  directorButton.href =
    "tel:" + directorNumber;
}


// ------------------------------------------
// Current year
// ------------------------------------------

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}


// ------------------------------------------
// Smooth reveal animation
// ------------------------------------------

const revealElements =
  document.querySelectorAll(
    ".contact-card, .about-box, .production-card"
  );

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});