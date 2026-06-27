const words = ["an engineer.", "an artist.", "a writer.", "a debater.", "a content creator."];
const delayTyping = 150;
const delayErasing = 100;
const delayBetweenWords = 2000; // Pause when word is fully typed
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
    if (wordIndex >= words.length) wordIndex = 0; // Loop back to start
    setTimeout(type, delayTyping + 500); // Short pause before next word
  }
}

// Initialize the loop on page load
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 1000);
});