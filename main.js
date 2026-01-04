// Dark Mode
const content = document.getElementById("bodyContent");
const mode = document.getElementById("mode");

mode.addEventListener("click", () => {
  content.classList.toggle("dark-mode");
});

// Appear Card Info
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const content = card.querySelector(".card-content");

    if (content) {
      content.classList.toggle("appear");
    }
  });
});

// Appear Sub Card Info
const subCards = document.querySelectorAll(".sub-card");

subCards.forEach((sub_card) => {
  sub_card.addEventListener("click", () => {
    const info = sub_card.querySelector(".sub-card-info");

    if (info) {
      info.classList.toggle("appear");
    }
  });
});
