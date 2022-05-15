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

const $scoreplayerone = document.querySelector(".score-player-one");
const $scoreplayertwo = document.querySelector(".score-player-two");

let currentMove = "X";
let scorePlayer1 = 0;
let scorePlayer2 = 0;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function toggleMove() {
  /*if (currentMove == "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }*/
  //exmplo IF tenar: CurrentMove "é igual" CurrentMove "é" 'X' "?"" 'O' "senão" "X"
  currentMove = currentMove == "X" ? "O" : "X";
}

function verifyGame() {
  let filledField = 0;

  for (const condition of winConditions) {
    const fieldIndex0 = condition[0];
    const fieldIndex1 = condition[1];
    const fieldIndex2 = condition[2];

    const $field1 = $boardList[fieldIndex0];
    const $field2 = $boardList[fieldIndex1];
    const $field3 = $boardList[fieldIndex2];

    if (
      $field1.innerHTML != "" &&
      $field1.innerHTML == $field2.innerHTML &&
      $field2.innerHTML == $field3.innerHTML
    ) {
      return currentMove;
    }
  }

  for (const $field of $boardList) {
    if ($field.innerHTML != "") filledField++;
  }

  if (filledField == 9) return "draw";
}

function resetBattleField() {
  for (const $displayGame of $boardList) {
    $displayGame.innerHTML = "";
  }
}

function move(boardIndex) {
  const $displayGame = $boardList[boardIndex];

  if ($displayGame.innerHTML != "") return;
  $displayGame.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    addPoint(gameResult);
    printScore();
    setTimeout(resetBattleField, 1000);
  }

  if (gameResult == "draw") {
    setTimeout(resetBattleField, 1000);
  }

  toggleMove();
}

function addPoint(winner) {
  if (winner == "X") scorePlayer1++;

  if (winner == "O") scorePlayer2++;
}

function printScore() {
  $scoreplayerone.innerHTML =
    scorePlayer1 < 10 ? "0" + scorePlayer1 : scorePlayer1;
  $scoreplayertwo.innerHTML =
    scorePlayer2 < 10 ? "0" + scorePlayer2 : scorePlayer2;
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
