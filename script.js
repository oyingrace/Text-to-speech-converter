let speech = new SpeechSynthesisUtterance();

let voices = [];

//To select from a list of voices
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
voices = window.speechSynthesis.getVoices();
//The initial voice should play first
speech.voice = voices[0];

voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option
(voice.name, i));
};

//To change voices
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});

// To link the button to the speech
document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});