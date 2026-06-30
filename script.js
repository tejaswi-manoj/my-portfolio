const words = ["a builder.", "an artist.", "a writer.", "a debater.", "a content creator.", "a cuber."];
const delayTyping = 150;
const delayErasing = 100;
const delayBetweenWords = 2000;
let wordIndex = 0;
let charIndex = 0;

const typedTextSpan = document.getElementById("typed-text");

function type() {
  if (charIndex < words[wordIndex].length) {
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, delayTyping);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, delayErasing);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, delayTyping + 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 1000);
});


function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}