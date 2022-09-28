const typingText = document.querySelector(".typing-text p");
inpField = document.querySelector(".wrapper .input-field");

let charIndex = 0;

function randomPragraph() {
  let randIndex = Math.floor(Math.random() * paragraphs.length);
  paragraphs[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });

  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  const characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
}

randomPragraph();
inpField.addEventListener("input", initTyping);
