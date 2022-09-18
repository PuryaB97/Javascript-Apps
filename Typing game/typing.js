const words =
  "id one good real one not school set they state against public long number word about after much need open change also".split(
    " "
  );
const wordsCount = words.length;

function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word
    .split("")
    .join("</span><span class='letter'>")}</span></div> `;
}

function newGame() {
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML += formatWord(randomWord());
  }
}

newGame();
