// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Code from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  var synth = window.speechSynthesis;
  var voiceSelect = document.getElementById('voice-select');
  var voices = [];

  const button = document.querySelector('button');

  function populateVoiceList() {
    voices = synth.getVoices();

    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', event => {
    const imgFace = document.querySelector('img[alt="Smiling face"]');
    var theText = document.getElementById("text-to-speak").value;
    console.log(theText);

    var utterThis = new SpeechSynthesisUtterance(theText);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
  
    //imgFace.src = 'assets/images/smiling-open.png';
    synth.speak(utterThis);
    //imgFace.src = 'assets/images/smiling.png';
    var timer = setInterval(
      function(){ 
        console.log("hi");
        if(synth.speaking == true){
          imgFace.src = 'assets/images/smiling-open.png'; 
        }
        else{
          imgFace.src = 'assets/images/smiling.png'
          clearInterval(timer);
        }
      }
    , 10);
  });
}