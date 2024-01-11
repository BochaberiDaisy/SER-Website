const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1.5;
    console.log(text_speak)

    window.speechSynthesis.speak(text_speak);

}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour >= 0 && hour < 12){
        speak("Good morning Daisy");

    }
    else if(hour == 12){
        speak("Good Afternoon Daisy");
    }

    else if(hour > 12 && hour < 17){
        speak("Good Evening Daisy");
    }
    else {
        speak("Hello Daisy");

    }
}

window.addEventListener('load', ()=>{
    speak("Activating S-E-R");
    speak("Launch Successful");
    wishMe();
}
)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
    
}
btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message){

    const speech = new SpeechSynthesisUtterance();
    speech.text = "I failed to understand you, kindly try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Daisy";
        speech.text = finalText;

    }
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);

}
    
