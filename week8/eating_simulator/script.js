const audio = new Audio('win.mp3');
const baby = new Audio('BabyCrying.mp3');
// const audio = new Audio('KatyPerryFirework.mp3');

function toggleSound() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function toggleSoundThreeSeconds() {
    baby.play();
    setTimeout(function () {
        audio.pause();
    }, 3000); // Set timeout to pause after 3 seconds (3000 milliseconds)
    baby.currentTime = 0;
}