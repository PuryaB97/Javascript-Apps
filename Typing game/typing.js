const words =
  "id one good real one not school set they state against public long number word about after much need open change also".split(
    " "
  );
const wordsCount = words.length;

function addClass(el, name) {
  el.className += " " + name;
}

function removeClass(el, name) {
  el.className = el.className.replace(name, "");
}

function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex - 1];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word
    ?.split("")
    .join("</span><span class='letter'>")}</span></div> `;
}

function newGame() {
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML += formatWord(randomWord());
  }
  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".letter"), "current");
}

document.getElementById("game").addEventListener("keyup", (e) => {
  const key = e.key;
  const currentLetter = document.querySelector(".letter.current");
  const expected = currentLetter.innerHTML;
  const isLetter = key.length === 1 && key !== " ";

  console.log({ key, expected });

  if (isLetter) {
    if (currentLetter) {
      addClass(currentLetter, key === expected ? "correct" : "incorrect");
      removeClass(currentLetter, "current");
      addClass(currentLetter.nextSibling, "current");
    }
  }
});

newGame();
