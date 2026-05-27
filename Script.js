const roles = [
  "Frontend Developer",
  "JavaScript Developer",
  "AI Project Builder",
  "Full Stack Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typing-text");
  const current = roles[roleIndex];

  if (!isDeleting) {
    element.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    element.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

window.onload = function () {
  document.getElementById("loading-screen").style.display = "none";
};
