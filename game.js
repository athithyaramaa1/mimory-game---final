let sequence = [];
let playerSequence = [];

let currentFlashIndex = undefined;
let currentTurn = undefined;
let isPlayerCorrect = undefined;
let isComputerTurn = undefined;
let intervalId;
let isSoundEnabled = true;
let isGameOn = false;
let isGameWon = undefined;

const turnDisplay = document.querySelector("#turn");
const topLeftButton = document.querySelector("#topleft");
const topRightButton = document.querySelector("#topright");
const bottomLeftButton = document.querySelector("#bottomleft");
const bottomRightButton = document.querySelector("#bottomright");
const powerButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const nameDisplay = document.getElementById('store-display');
nameDisplay.innerHTML = localStorage.getItem("username");

powerButton.addEventListener("click", (event) => {
  if (powerButton.classList.contains("clicked")) {
    isGameOn = true;
    turnDisplay.innerHTML = "--";
    prompt('Now click on start to begin. The challenge unfolds ^^');
  } else {
    isGameOn = false;
    turnDisplay.innerHTML = "";
    clearButtonColors();
    clearInterval(intervalId);
  }
});

// Added this event listener to toggle the "clicked" class when the image is clicked
powerButton.addEventListener("click", (event) => {
  powerButton.classList.toggle("clicked");
});

startButton.addEventListener("click", (event) => {
  if (isGameOn || isGameWon) {
    startGame();
  }
});

function startGame() {
  isGameWon = false;
  sequence = [];
  playerSequence = [];
  currentFlashIndex = 0;
  intervalId = 0;
  currentTurn = 1;
  turnDisplay.innerHTML = 1;
  isPlayerCorrect = true;
  
  for (let i = 0; i < 20; i++) {
    sequence.push(Math.ceil(Math.random() * 4));
  }

  isComputerTurn = true;
  intervalId = setInterval(gameTurn, 775);
}

function gameTurn() {
  isGameOn = false;

  if (currentFlashIndex === currentTurn) {
    clearInterval(intervalId);
    isComputerTurn = false;
    clearButtonColors();
    isGameOn = true;
  }

  if (isComputerTurn) {
    clearButtonColors();
    setTimeout(() => {
      if (sequence[currentFlashIndex] === 1) flashButtonOne();
      if (sequence[currentFlashIndex] === 2) flashButtonTwo();
      if (sequence[currentFlashIndex] === 3) flashButtonThree();
      if (sequence[currentFlashIndex] === 4) flashButtonFour();
      currentFlashIndex++;
    }, 200);
  }
}

function flashButtonOne() {
  if (isSoundEnabled) {
    let audio = document.getElementById('clip1');
    audio.play();
  }
  isSoundEnabled = true;
  topLeftButton.style.backgroundColor = "lightskyblue";
}

function flashButtonTwo() {
  if (isSoundEnabled) {
    let audio = document.getElementById('clip2');
    audio.play();
  }
  isSoundEnabled = true;
  topRightButton.style.backgroundColor = "yellow";
}

function flashButtonThree() {
  if (isSoundEnabled) {
    let audio = document.getElementById('clip3');
    audio.play();
  }
  isSoundEnabled = true;
  bottomLeftButton.style.backgroundColor = "tomato";
}

function flashButtonFour() {
  if (isSoundEnabled) {
    let audio = document.getElementById('clip4');
    audio.play();
  }
  isSoundEnabled = true;
  bottomRightButton.style.backgroundColor = "lightgreen";
}

function clearButtonColors() {
  topLeftButton.style.backgroundColor = "darkblue";
  topRightButton.style.backgroundColor = "goldenrod";
  bottomLeftButton.style.backgroundColor = "darkred";
  bottomRightButton.style.backgroundColor = "darkgreen";
}

function flashColor() {
  topLeftButton.style.backgroundColor = "lightskyblue";
  topRightButton.style.backgroundColor = "yellow";
  bottomLeftButton.style.backgroundColor = "tomato";
  bottomRightButton.style.backgroundColor = "lightgreen";
}

function checkPlayerInput() {
  if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
    isPlayerCorrect = false;
    setTimeout(redirectLoseHTML, 5000);
  }

  if (playerSequence.length === 20 && isPlayerCorrect) {
    winGame();
  }

  if (!isPlayerCorrect) {
    flashColor();
    turnDisplay.innerHTML = "NO!";
    setTimeout(() => {
      turnDisplay.innerHTML = currentTurn;
      clearButtonColors();
      startGame();
    }, 800);
    isSoundEnabled = false;
    setTimeout(redirectLoseHTML, 2000);
  }

  if (currentTurn === playerSequence.length && isPlayerCorrect && !isGameWon) {
    currentTurn++;
    playerSequence = [];
    isComputerTurn = true;
    currentFlashIndex = 0;
    turnDisplay.innerHTML = currentTurn;
    intervalId = setInterval(gameTurn, 775);
  }
}

topLeftButton.addEventListener("click", (event) => {
  if (isGameOn) {
    playerSequence.push(1);
    checkPlayerInput();
    flashButtonOne();
    if (!isGameWon) {
      setTimeout(() => {
        clearButtonColors();
      }, 300);
    }
  }
});

topRightButton.addEventListener("click", (event) => {
  if (isGameOn) {
    playerSequence.push(2);
    checkPlayerInput();
    flashButtonTwo();
    if (!isGameWon) {
      setTimeout(() => {
        clearButtonColors();
      }, 300);
    }
  }
});

bottomLeftButton.addEventListener("click", (event) => {
  if (isGameOn) {
    playerSequence.push(3);
    checkPlayerInput();
    flashButtonThree();
    if (!isGameWon) {
      setTimeout(() => {
        clearButtonColors();
      }, 300);
    }
  }
});

bottomRightButton.addEventListener("click", (event) => {
  if (isGameOn) {
    playerSequence.push(4);
    checkPlayerInput();
    flashButtonFour();
    if (!isGameWon) {
      setTimeout(() => {
        clearButtonColors();
      }, 300);
    }
  }
});

function winGame() {
  flashColor();
  turnDisplay.innerHTML = "WIN!!";
  isGameOn = false;
  isGameWon = true;
  setTimeout(redirectWinHTML, 3000);
}

function redirectWinHTML() {
  window.location.href = "win.html";
}

function redirectLoseHTML() {
  window.location.href = "lose.html";
}