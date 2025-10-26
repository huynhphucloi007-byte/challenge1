const gradientBox = document.getElementById('gradient-box');
let startColor = 0;

function animateGradient() {
  startColor += 0.5;
  gradientBox.style.background = `linear-gradient(to right, hsl(${startColor}, 100%, 50%), hsl(${startColor + 100}, 100%, 70%))`;
  requestAnimationFrame(animateGradient);
}

animateGradient();
