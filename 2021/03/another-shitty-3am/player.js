var audioPlayers = document.querySelectorAll(".audio-player__container");

for (var i = 0; i < audioPlayers.length; i++) {
  (function() {
    var newI = i;

    var audioBtn = audioPlayers[newI].querySelector(".toggle");
    var durationText = audioPlayers[newI].querySelector(".time-end");
    var currentText = audioPlayers[newI].querySelector(".time-start");
    var scrubber = audioPlayers[newI].querySelector(".scrubber__scrubber");
    var dial = audioPlayers[newI].querySelector(".dial");
    var source = audioPlayers[newI].querySelector(".file-path").innerHTML;
    var scrubberRect = scrubber.getBoundingClientRect();
    var scrubberWidth = scrubberRect.right - scrubberRect.left;
    var dialRect = dial.getBoundingClientRect();
    var dialWidth = dialRect.right - dialRect.left;
    var distance = scrubberWidth - dialWidth;
    var audio = new Audio();
    var position = 0;
    var playhead;

    ///////////////
    // Set up audio
    ///////////////

    function setAudio(src) {
      audio.src = src;
      // set duration and time it takes to fill each progress bar once audio is loaded
      audio.addEventListener("loadedmetadata", function() {
        // sets duration label
        duration = audio.duration;
        console.log(duration);
        var minutes = Math.floor(duration / 60);
        var seconds = duration - (minutes * 60);
        durationText.innerText = minutes + ":" + seconds.toFixed(0);
      });
    }

    setAudio(source);
  
    ////////////////////////////////////
    // Update Current Time
    ////////////////////////////////////
    
    function updateCurrentTime() {
      var minutes = Math.floor(audio.currentTime / 60);
      var seconds = audio.currentTime - (minutes * 60);
      if (seconds <= 9) {
        currentText.innerText = minutes + ":" + "0" + seconds.toFixed(0);
      } else if (seconds >=10) {
        currentText.innerText = minutes + ":" + seconds.toFixed(0);
      }
      setTimeout(updateCurrentTime, 10);
    }
    
    ////////////////////////////////////
    // Draggable Scrubber
    ////////////////////////////////////

    Draggable.create(dial, {
      type: "x",
      edgeResistance: 1,
      bounds: scrubber,
      lockAxis: true,
      throwProps: false,
      onPress: function() {
        pauseAll();
      },
      onDragEnd: function() {
        position = this.x / distance;
        playAll(position);
        updatedCurrentTime();
      }
    });

    /////////////////////
    // Clickable Scrubber
    /////////////////////

    function updateOnClick(event) {
      pauseAll();
      var xPosition =
        event.clientX -
        scrubber.getBoundingClientRect().left -
        dial.clientWidth / 2;
      TweenMax.to(dial, 1, { x: xPosition });
      position = xPosition / scrubber.clientWidth;
      playAll(position);
    }

    scrubber.addEventListener("click", updateOnClick);

    /////////////////////
    // Play/Pause Toggle
    /////////////////////

    function playAll(pos) {
      audioBtn.classList.remove("paused");
      audioBtn.classList.add("playing");
      audio.currentTime = pos * audio.duration;
      audio.play();
      positionPlayhead();
      updateCurrentTime(audio.currentTime);
    }

    function pauseAll() {
      audioBtn.classList.remove("playing");
      audioBtn.classList.add("paused");
      clearInterval(playhead);
      audio.pause();
    }

    audioBtn.addEventListener("click", function() {
      if (audioBtn.classList.contains("playing")) {
        pauseAll();
      } else {
        playAll(audio.currentTime / audio.duration);
      }
    });

    /////////////////////////
    // Restart Clip on Finish
    /////////////////////////
    audio.addEventListener("ended", function() {
      btn.classList.remove("playing");
      btn.classList.add("paused");
      clearInterval(playhead);
      audio.pause();
      audio.currentTime = 0;
      TweenMax.to(dial, 1, { x: 0 });
    });

    function positionPlayhead() {
      playhead = setInterval(function() {
        TweenMax.set(dial, {
          x: audio.currentTime / audio.duration * distance
        });
      }, 30);
    }

    /////////////////////////////////
    // Reset player on window resize
    /////////////////////////////////

    window.addEventListener("resize", function() {
      // reset size of scrubber
      scrubberRect = scrubber.getBoundingClientRect();
      scrubberWidth = scrubberRect.right - scrubberRect.left;
      dial = scrubberContainer.querySelector(".dial");
      dialRect = dial.getBoundingClientRect();
      dialWidth = dialRect.right - dialRect.left;
      distance = scrubberWidth - dialWidth;
    });
  })();
}