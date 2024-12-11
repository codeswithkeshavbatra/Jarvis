let Btn1=document.querySelector("#strBtn");
// let Btn2=document.querySelector("#stpBtn");
// let btn3=document.querySelector("#spkBtn");
let showInstruction = document.querySelector(".show-instructions");
let time=document.querySelector("#time");
let internet=document.querySelector("#internet");
const SpeachRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new SpeachRecognition();
let instruciton = document.querySelector('.instruction')
recognition.continuous = true; 


//closetab array
let windowB = [];

//recognition start
recognition.onstart=function(){
    console.log("jarvis activated");
}

//recognition result
recognition.onresult=function(event){
    let current=event.resultIndex;
    let transcript=event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    if(transcript.includes("hello, jarvis")){
        Speakout("Hello sir");
    }

    if(transcript.includes("open youtube")){
        Speakout("opening youtube Boss");
        let a = window.open("https://www.youtube.com/");
        windowB.push(a);
    }

    if(transcript.includes("open facebook")){
        Speakout("opening  facebook sir");
        let a = window.open("https://www.facebook.com/");
        windowB.push(a);
    }

    if (transcript.includes("open google")) {
        Speakout("opening google");
        let a = window.open("https://www.google.com/");
        windowB.push(a)
      }

    if(transcript.includes("open github")){
        Speakout("opening  github sir");
        let a = window.open("https://www.github.com/");
        windowB.push(a);
    }

    if(transcript.includes("open my github account")){
        Speakout("opening  github account sir");
        let a = window.open("https://github.com/codeswithkeshavbatra");
        windowB.push(a);
    }

    if (transcript.includes("show me your commands")) {
        showInstruction.style.display = 'block';
    }

    if (transcript.includes('close command menu')) {
        showInstruction.style.display = 'none';
    }

    if(transcript.includes("who is")||transcript.includes("what is")||transcript.includes("serarch for")){
       Speakout("this is what i found of internet regarding" + transcript);
        let a = window.open(`https://www.google.com/search?q=${transcript.replace(" ", "+")}`, "_blank");
        windowB.push(a);
    }

    if(transcript.includes("open calculator")){
        Speakout("opening calculator sir");
        let a = window.open("calculator:///");
        windowB.push(a);
    }

    if (transcript.includes("open whatsapp")) {
        Speakout("opening whatsapp");
        let a = window.open("https://web.whatsapp.com/");
        windowB.push(a);
    }

    if (transcript.includes("open instagram")) {
        Speakout("opening instagram")
        let a = window.open("https://www.instagram.com/");
        windowB.push(a);
    }

    if (transcript.includes("close all tabs")) {
        Speakout("closing all tabs")
        windowB.forEach((e) => {
            e.close();
        });
    }
    console.log(transcript)
}

//wish
function wish(){
    let date=new Date;
    let hour=date.getHours();
    if(hour>=0 && hour<12){
        Speakout("Good morning boss....");
    }
    if(hour>=12 && hour<17){
        Speakout("Good afternoon boss....");
    }
    else if(hour>=17 && hour<=24){
        Speakout("Good evening boss....");
    }

}
//greeting
window.addEventListener('load', () => {
    Speakout("I am on ");
    wish();
    Speakout("how may i help you");
    // timer on load
    let Timer = new Date;
    let hr = Timer.getHours();
    let min = Timer.getMinutes();
    let sec = Timer.getSeconds();
    time.textContent = `${hr}:${min}:${sec}`;
    //connection on load
    if (navigator.onLine) {
        internet.textContent = "online";
    }
    else {
        internet.textContent = "ofline";
    }

    Speakout("Say show me your commands to see my all commands.");
});
//timer
setInterval(()=>{
    let Timer=new Date;
    let hr=Timer.getHours();
    let min=Timer.getMinutes();
    let sec=Timer.getSeconds();
    time.textContent=`${hr}:${min}:${sec}`;
},1000)

//recogniton end
recognition.onend=function(){
    console.log("jarvis deactivated");
}


Btn1.addEventListener('click',()=>{
    recognition.start();
    recognition.continuous=true;
});

// Btn2.addEventListener('click',()=>{
//     recognition.stop();
// });
// jarvis speaks
function Speakout(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text=message;
    speech.volume=1;
    window.speechSynthesis.speak(speech);
}

// setTimeout(() => {
//     instruciton.style.display = "none";
// },10000);

// btn3.addEventListener('click',()=>{
//     Speakout("Hello sir");
//     console.log("Speaking");
// })