let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    // Clear previous options
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

// Check if voices are available immediately
if (speechSynthesis.onvoiceschanged !== undefined) {
    populateVoiceList();
}

voiceSelect.addEventListener('change', function() {
    speech.voice = voices[this.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


 
