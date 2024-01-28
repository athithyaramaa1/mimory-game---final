window.onload = () => {
    var audio = document.getElementById("myAudio");
    audio.play()
};
  

function redirectToGame() {
    window.location.href="index.html"
  }
  
  const tryagain = document.getElementById('prev-page-btn')
  tryagain.addEventListener("click", redirectToGame)
