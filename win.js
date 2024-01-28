window.onload = () => {
    var audio = document.getElementById("myAudio");
    audio.play()
};
  

function redirectToGame() {
    window.location.href="game.html"
}


const tryagain = document.getElementById('prev-page-btn')
tryagain.addEventListener("click", redirectToGame)