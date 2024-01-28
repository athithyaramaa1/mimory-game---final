function Login() {
  var body = document.body;
  body.classList.toggle("opened");
}

function playVideo() {
  var video = document.getElementById("myVideo");
  video.muted = false;
  video.play();
}

window.onload = () => {
  var video = document.getElementById("myVideo");
  video.click();

  var audio = document.getElementById("myAudio");
  audio.play()
  };


document.forms[0].onsubmit = (e) => {
  e.preventDefault();
};

function contact() {
  window.location.href = "contact.html"
}

function about() {
  window.location.href= "about.html"
}

let username = document.getElementById("username")
let playBtn = document.getElementById("next-pg")
let arr = []

playBtn.addEventListener('click', function() {
  let storeName = username.value;
  username.innerHTML = " ";
  arr.push(storeName)

  if (storeName.trim() !== "") {
    localStorage.setItem("username", arr)
      
    setTimeout(() => {
      window.location.href = "game.html"
    }, 540);
  }else{
    alert("Please enter your name: ")
  }
})