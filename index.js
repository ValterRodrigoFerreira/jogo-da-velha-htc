const $displaygame0 = document.querySelector(".displaygame0");
const $displaygame1 = document.querySelector(".displaygame1");
const $displaygame2 = document.querySelector(".displaygame2");
const $displaygame3 = document.querySelector(".displaygame3");
const $displaygame4 = document.querySelector(".displaygame4");
const $displaygame5 = document.querySelector(".displaygame5");
const $displaygame6 = document.querySelector(".displaygame6");
const $displaygame7 = document.querySelector(".displaygame7");
const $displaygame8 = document.querySelector(".displaygame8");

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
    $displaygame0.innerHTML != "" &&
    $displaygame0.innerHTML == $displaygame1.innerHTML &&
    $displaygame1.innerHTML == $displaygame2.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame3.innerHTML != "" &&
    $displaygame3.innerHTML == $displaygame4.innerHTML &&
    $displaygame4.innerHTML == $displaygame5.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame6.innerHTML != "" &&
    $displaygame6.innerHTML == $displaygame7.innerHTML &&
    $displaygame7.innerHTML == $displaygame8.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame0.innerHTML != "" &&
    $displaygame0.innerHTML == $displaygame3.innerHTML &&
    $displaygame3.innerHTML == $displaygame6.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame1.innerHTML != "" &&
    $displaygame1.innerHTML == $displaygame4.innerHTML &&
    $displaygame4.innerHTML == $displaygame7.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame2.innerHTML != "" &&
    $displaygame2.innerHTML == $displaygame5.innerHTML &&
    $displaygame5.innerHTML == $displaygame8.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame0.innerHTML != "" &&
    $displaygame0.innerHTML == $displaygame4.innerHTML &&
    $displaygame4.innerHTML == $displaygame8.innerHTML
  ) {
    return currentMove;
  }
  if (
    $displaygame2.innerHTML != "" &&
    $displaygame2.innerHTML == $displaygame4.innerHTML &&
    $displaygame4.innerHTML == $displaygame6.innerHTML
  ) {
    return currentMove;
  }
}

$displaygame0.addEventListener("click", function () {
  if ($displaygame0.innerHTML != "") return;
  $displaygame0.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame1.addEventListener("click", function () {
  if ($displaygame1.innerHTML != "") return;
  $displaygame1.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame2.addEventListener("click", function () {
  if ($displaygame2.innerHTML != "") return;
  $displaygame2.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame3.addEventListener("click", function () {
  if ($displaygame3.innerHTML != "") return;
  $displaygame3.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame4.addEventListener("click", function () {
  if ($displaygame4.innerHTML != "") return;
  $displaygame4.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame5.addEventListener("click", function () {
  if ($displaygame5.innerHTML != "") return;
  $displaygame5.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame6.addEventListener("click", function () {
  if ($displaygame6.innerHTML != "") return;
  $displaygame6.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame7.addEventListener("click", function () {
  if ($displaygame7.innerHTML != "") return;
  $displaygame7.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});

$displaygame8.addEventListener("click", function () {
  if ($displaygame8.innerHTML != "") return;
  $displaygame8.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMove();
});
