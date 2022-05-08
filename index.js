const $displaygame0 = document.querySelector(".displaygame0");
const $displaygame1 = document.querySelector(".displaygame1");
const $displaygame2 = document.querySelector(".displaygame2");
const $displaygame3 = document.querySelector(".displaygame3");
const $displaygame4 = document.querySelector(".displaygame4");
const $displaygame5 = document.querySelector(".displaygame5");
const $displaygame6 = document.querySelector(".displaygame6");
const $displaygame7 = document.querySelector(".displaygame7");
const $displaygame8 = document.querySelector(".displaygame8");

const $boardList = document.querySelectorAll(".display-game-item");

let currentMove = "X";

function toggleMove() {
  if (currentMove == "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
}

function verifyGame() {
  if (
    $boardList[0].innerHTML != "" &&
    $boardList[0].innerHTML == $boardList[1].innerHTML &&
    $boardList[1].innerHTML == $boardList[2].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[3].innerHTML != "" &&
    $boardList[3].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[5].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[6].innerHTML != "" &&
    $boardList[6].innerHTML == $boardList[7].innerHTML &&
    $boardList[7].innerHTML == $boardList[8].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[0].innerHTML != "" &&
    $boardList[0].innerHTML == $boardList[3].innerHTML &&
    $boardList[3].innerHTML == $boardList[6].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[1].innerHTML != "" &&
    $boardList[1].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[7].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[2].innerHTML != "" &&
    $boardList[2].innerHTML == $boardList[5].innerHTML &&
    $boardList[5].innerHTML == $boardList[8].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[0].innerHTML != "" &&
    $boardList[0].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[8].innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardList[2].innerHTML != "" &&
    $boardList[2].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[6].innerHTML
  ) {
    return currentMove;
  }

  if (
    $displaygame0.textContent != "" &&
    $displaygame1.textContent != "" &&
    $displaygame2.textContent != "" &&
    $displaygame3.textContent != "" &&
    $displaygame4.textContent != "" &&
    $displaygame5.textContent != "" &&
    $displaygame6.textContent != "" &&
    $displaygame7.textContent != "" &&
    $displaygame8.textContent != ""
  ) {
    return "draw";
  }
}

function move(boardIndex) {
  const $displayGame = $boardList[boardIndex];

  if ($displayGame.innerHTML != "") return;
  $displayGame.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  if (gameResult == "draw") {
    alert("empate");
  }

  toggleMove();
}

function addBoardListeners() {
  for (let index = 0; index < $boardList.length; index++) {
    const $displayGame = $boardList[index];

    $displayGame.addEventListener("click", function () {
      move(index);
    });
  }
}
addBoardListeners();
