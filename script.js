document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".snowflake");
    var audioFiles = ["audio/sn1.wav", "audio/sn2.wav", "audio/sn3.wav", "audio/sn4.wav", "audio/sn5.wav", "audio/sn6.wav"];
    var audioElements = [];

    // Load audio elements
    audioFiles.forEach(function(file, index) {
        var audio = new Audio(file);
        audio.addEventListener("ended", function() {
            // Reset the audio playback position to the beginning
            audio.currentTime = 0;
        });
        audioElements.push(audio);

        buttons[index].addEventListener("click", function() {
            // Play the corresponding audio file
            audioElements[index].play();

            // Add a class to represent the active state
            buttons[index].classList.add("active");

            // Set a timeout to remove the active class after a set time (e.g., 1 second)
            setTimeout(function() {
                buttons[index].classList.remove("active");
            }, 3000); // Adjust the duration in milliseconds as needed
        });
    });
});
