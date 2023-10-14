const sounds = document.querySelectorAll(".sounds");
const pads = document.querySelectorAll(".box button");

pads.forEach(function(pad, index) {
    pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
    });
});