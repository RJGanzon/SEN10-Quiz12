// script.js

function createLavenderBurst() {
  const numPetals = 30;
  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${3 + Math.random() * 2}s`;
    petal.style.opacity = Math.random();
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 5000);
  }
}

window.addEventListener("load", () => {
  createLavenderBurst();
  console.log("Lavender burst activated!");
});
