document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".snowflake");
    var audioFiles = ["audio/sn1.wav", "audio/sn2.wav", "audio/sn3.wav", "audio/sn4.wav", "audio/sn7.wav", "audio/sn6.wav"];
    var audioElements = [];

    audioFiles.forEach(function(file, index) {
        var audio = new Audio(file);
        audio.addEventListener("ended", function() {
            audio.currentTime = 0;
        });
        audioElements.push(audio);

        buttons[index].addEventListener("click", function() {
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0;
            }

            audioElements[index].play();

            buttons[index].classList.add("active");

            setTimeout(function() {
                buttons[index].classList.remove("active");
            }, 3000); 
        });
    });
});
