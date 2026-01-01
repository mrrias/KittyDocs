// Dark Mode
const content = document.getElementById("bodyContent");
const mode = document.getElementById("mode");

mode.addEventListener("click", () => {
  content.classList.toggle("dark-mode");
});

// Appear Sub Card Info
const subCards = document.querySelectorAll(".sub-card");

subCards.forEach((card) => {
  card.addEventListener("click", () => {
    const info = card.querySelector(".sub-card-info");

    if (info) {
      info.classList.toggle("appear");
    }
  });
});
