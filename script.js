// ─── 1. LIST YOUR FONT NAMES (must match what you wrote in @font-face) ───
const fonts = [
  'Font1',
  'Font2',
  'Font3',
  // Add every font name you declared in style.css
];

// ─── 2. THE ORIGINAL TEXT ───
const originalWord = 'REPLIKA';

// ─── 3. BINARY GLITCH EFFECT ───
const el = document.getElementById('replika-text');
const binaryChars = ['0', '1'];

function glitchText() {
  const letters = originalWord.split('');

  // Randomly corrupt 1–3 characters
  const numToChange = Math.floor(Math.random() * 3) + 1;
  const indices = [];
  while (indices.length < numToChange) {
    const i = Math.floor(Math.random() * letters.length);
    if (!indices.includes(i)) indices.push(i);
  }

  indices.forEach(i => {
    letters[i] = binaryChars[Math.floor(Math.random() * 2)];
  });

  el.textContent = letters.join('');

  // Restore original after a short flicker
  setTimeout(() => {
    el.textContent = originalWord;
  }, 120);
}

// Run glitch every 300–600ms (random feel)
function scheduleGlitch() {
  const delay = Math.random() * 300 + 300;
  setTimeout(() => {
    glitchText();
    scheduleGlitch();
  }, delay);
}
scheduleGlitch();

// ─── 4. FONT ROTATION ───
let currentFontIndex = 0;

function rotateFont() {
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
  el.style.fontFamily = fonts[currentFontIndex];
}

// Change font every 0.5 seconds
setInterval(rotateFont, 500);