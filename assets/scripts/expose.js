// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  const audioElement = document.querySelector("audio");
  const inputElement = document.getElementById('volume');
  const button = document.querySelector('button');
  var currentHorn;
  const jsConfetti = new JSConfetti();

  button.addEventListener('click', event => {
    audioElement.play();
    if(currentHorn == "party-horn"){
      jsConfetti.addConfetti();
    }
  });

  selectElement.addEventListener('change', (event) => {
    const imgHorn = document.querySelector('img[alt="No image selected"]');
    imgHorn.src = `./assets/images/${event.target.value}.svg`;
    audioElement.src = `./assets/audio/${event.target.value}.mp3`;
    currentHorn = event.target.value;
    console.log(audioElement.src);
  });

  inputElement.addEventListener('input', (event) => {
    const imgAudio = document.querySelector('img[alt="Volume level 2"');
    const audioVolume = event.target.value / 100;
    if(event.target.value == 0){
      imgAudio.src = "assets/icons/volume-level-0.svg";
    }
    else if(event.target.value >= 1 && event.target.value  < 33){
      imgAudio.src = "assets/icons/volume-level-1.svg";
    }
    else if(event.target.value >= 33 && event.target.value  < 67){
      imgAudio.src = "assets/icons/volume-level-2.svg";
    }
    else{
      imgAudio.src = "assets/icons/volume-level-3.svg"
    }
    audioElement.volume = audioVolume;
    console.log(audioElement.volume);
  });
  
  console.log(audioElement.src);
}