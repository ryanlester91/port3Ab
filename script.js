const pianoKeys = document.querySelectorAll(".key");

let audio = new Audio("tunes/a.mp3")  //by default, audio src is "a" tune
 
const playTune = (key) => {
    audio.src = `tunes/${key}.mp3`
    audio.play(); //playing audio
}

pianoKeys.forEach(key => {
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
})