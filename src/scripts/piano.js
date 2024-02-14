const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume_slider input");
const mappedKeys = [];
const keychecks = document.querySelector(".keys-check input");
const audio = new Audio(`src/sounds/a.wav`);
const playTune = (key)=>{
    audio.src = `src/sounds/${key}.wav`;
    audio.play();
    //console.log(mappedKeys);
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    //console.log("Ativou!");
    setTimeout(()=>{
        //console.log("Desatiovou!");
        clickedKey.classList.remove("active");
    },500);
};
pianoKeys.forEach((key)=>{
    //console.log(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e)=>{
    //console.log(e);
    if(mappedKeys.includes(e.key))playTune(e.key);
});

const handleAudio = (e)=>{
    audio.volume = e.target.value;
}

const showHideKeys = (e)=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleAudio);

keychecks.addEventListener("click", showHideKeys);