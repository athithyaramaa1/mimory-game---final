function redirectToGame() {
    window.location.href="game.html"
}

// setTimeout(redirectToGame, 5000)
window.onload = () => {
    var audio = document.getElementById("myAudio");
    audio.play()
};
  
let messageDisplay = document.getElementById("message");
const array = ["Work more! 🥺", "Well try 😔", "That was so close! 😢 "]
let num = Math.floor(Math.random()*3);
messageDisplay.innerText=array[num];

let image = document.getElementById('random-image');
const imgArray = [
  "./assets/sad-baby-1.png",
  "./assets/sad-baby-2.png",
  "./assets/sad-baby-3.png"
];

image.src = imgArray[num];

const tryagain = document.getElementById('prev-page-btn')
tryagain.addEventListener("click", redirectToGame)

