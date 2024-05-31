// content.js
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.pointerEvents = 'none';

document.body.appendChild(overlay);

const canvas = document.createElement('canvas');
overlay.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

// Draw a simple parabola
for (let x = 0; x < canvas.width; x++) {
  const y = 0.001 * Math.pow(x - canvas.width / 2, 2) + canvas.height / 2;
  ctx.fillRect(x, y, 1, 1);
}
