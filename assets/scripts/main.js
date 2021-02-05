// main.js

// TODO
// Grab variables that will change
var button = document.getElementById('honk-btn');
var img = document.getElementById('sound-image');
var sound = document.getElementById('horn-sound');
var volImg = document.getElementById('volume-image');
var volNum = document.getElementById('volume-number');
var volSlider = document.getElementById('volume-slider');
var radioHorn = document.getElementById('radio-air-horn');
var radioCar = document.getElementById('radio-car-horn');
var radioParty = document.getElementById('radio-party-horn');

// update volume of slider & number & audio
volNum.addEventListener("input", () => {
    volSlider.value = volNum.value;
    sound.volume = volSlider.value/100;
    changeVolImg(volNum.value);
});

volSlider.addEventListener("input", () => {
    volNum.value = volSlider.value;
    sound.volume = volNum.value/100;
    changeVolImg(volSlider.value);
});

// update horn image 
radioHorn.addEventListener("click", () => {
    img.src = "./assets/media/images/air-horn.svg";
});

radioCar.addEventListener("click", () => {
    img.src = "./assets/media/images/car.svg";
});

radioParty.addEventListener("click", () => {
    img.src = "./assets/media/images/party-horn.svg";
});

button.addEventListener('click', event => {
    if (radioHorn.checked == true) {
        sound.src = "./assets/media/audio/air-horn.mp3";
    }
    if (radioCar.checked == true) {
        sound.src = "./assets/media/audio/car-horn.mp3";
    }
    if (radioParty.checked == true) {
        sound.src = "./assets/media/audio/party-horn.mp3";
    }
    sound.play();
    event.preventDefault();
});

//change volume and volume image
const changeVolImg  = val => {
    if (val > 66 && val <= 100) {
        volImg.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    } else if (val > 33 && val <= 66) {
        volImg.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    } else if (val > 0 && val <= 33) {
        volImg.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    } else {
        volImg.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
};
