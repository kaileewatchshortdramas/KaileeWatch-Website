// =============================================
// KAILEEWATCH SHORT DRAMAS STUDIOS
// Main Website Script
// =============================================


// ---------------------------------------------
// PHONE NUMBERS
// ---------------------------------------------

// Replace these with your actual numbers.

const receptionistNumber = "+14722120299";
const directorNumber = "+19106161804";


// ---------------------------------------------
// EPISODE DATA
// ---------------------------------------------

const episodes = [

  {
    number: 1,
    status: "complete",
    label: "COMPLETE"
  },

  {
    number: 2,
    status: "complete",
    label: "COMPLETE"
  },

  {
    number: 3,
    status: "complete",
    label: "COMPLETE"
  },

  {
    number: 4,
    status: "complete",
    label: "COMPLETE"
  },

  {
    number: 5,
    status: "production",
    label: "IN PRODUCTION"
  },

  {
    number: 6,
    status: "future",
    label: "NOT YET IN PRODUCTION",
    special: true
  },

  {
    number: 7,
    status: "future",
    label: "NOT YET IN PRODUCTION"
  },

  {
    number: 8,
    status: "future",
    label: "NOT YET IN PRODUCTION"
  },

  {
    number: 9,
    status: "future",
    label: "NOT YET IN PRODUCTION"
  },

  {
    number: 10,
    status: "future",
    label: "NOT YET IN PRODUCTION"
  }

];


// ---------------------------------------------
// BUILD EPISODE CARDS
// ---------------------------------------------

const episodeGrid =
  document.getElementById("episodeGrid");


if (episodeGrid) {

  episodeGrid.innerHTML = "";

  episodes.forEach((episode) => {

    const card =
      document.createElement("article");

    card.className =
      `episode-card ${episode.status}`;

    card.innerHTML = `

      ${
        episode.special
          ? `<span class="special-label">✦ MAJOR STORY EPISODE</span>`
          : ""
      }

      <div class="episode-number">
        ${String(episode.number).padStart(2, "0")}
      </div>

      <h3>
        Episode ${episode.number}
      </h3>

      <span class="episode-status">
        ${episode.label}
      </span>

    `;

    episodeGrid.appendChild(card);

  });

}


// ---------------------------------------------
// PRODUCTION PROGRESS
// ---------------------------------------------

const totalEpisodes =
  episodes.length;


const completedEpisodes =
  episodes.filter(
    episode => episode.status === "complete"
  ).length;


const progress =
  (completedEpisodes / totalEpisodes) * 100;


const progressFill =
  document.getElementById("progressFill");

const progressText =
  document.getElementById("progressText");

const progressPercentage =
  document.getElementById("progressPercentage");


if (progressFill) {

  progressFill.style.width =
    `${progress}%`;

}


if (progressText) {

  progressText.textContent =
    `${completedEpisodes} / ${totalEpisodes}`;

}


if (progressPercentage) {

  progressPercentage.textContent =
    `${Math.round(progress)}% of the series completed`;

}


// ---------------------------------------------
// PHONE LINKS
// ---------------------------------------------

const receptionistButton =
  document.getElementById(
    "receptionistButton"
  );


const directorButton =
  document.getElementById(
    "directorButton"
  );


if (receptionistButton) {

  receptionistButton.href =
    "tel:" + receptionistNumber;

}


if (directorButton) {

  directorButton.href =
    "tel:" + directorNumber;

}


// ---------------------------------------------
// FOOTER YEAR
// ---------------------------------------------

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}


// ---------------------------------------------
// CINEMATIC REVEAL
// ---------------------------------------------

const revealItems =
  document.querySelectorAll(
    ".series-card, .episode-card, .contact-card, .intro-grid > div"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(
          "visible"
        );

        observer.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12
    }
  );


revealItems.forEach((item) => {

  item.style.opacity = "0";

  item.style.transform =
    "translateY(25px)";

  item.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(item);

});


// ---------------------------------------------
// ADD VISIBLE ANIMATION DYNAMICALLY
// ---------------------------------------------

const revealStyle =
  document.createElement("style");


revealStyle.textContent = `

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

`;


document.head.appendChild(
  revealStyle
);