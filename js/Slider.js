'use strict';

const Slider = function () {
    this.moveInSlide();
    this.playPauseSlide();
    this.playSlide();
    this.pauseSlide();
};


var slideIndex = 1;
Slider.prototype.moveInSlide = function (number) {
    let i;
    const picInSlide = document.getElementsByClassName("picture");

    // Toggle the slide
    function moveInSlide(number) {
        slideIndex += number;
    }

    if ( number > picInSlide.length) {
        slideIndex = 1;
    }

    if ( number < 1) {
        slideIndex = picInSlide.length;
    }

    for (i = 0; i < picInSlide.length; i++) {
        picInSlide[i].style.display = "none";
    }
    picInSlide[slideIndex-1].style.display = "block";
};


Slider.prototype.playPauseSlide = function () {
    let time;
    const playInSlide = document.getElementById("play");
    const pauseInSlide = document.getElementById("pause");

    // Slide Play effect
    this.playSlide = function () {
        playInSlide.addEventListener('click', function () {
            time = window.setInterval(autoInSlide, 5000);
            pauseInSlide.classList.remove('hide');
            playInSlide.classList.add('hide');
        });
    };

    function autoInSlide() {
        Slider.prototype.moveInSlide(slideIndex +=1);
    }

    // Slide pause effect
    this.pauseSlide = function () {
        pauseInSlide.addEventListener('click', function () {
            window.clearInterval(time);
            pauseInSlide.classList.add('hide');
            playInSlide.classList.remove('hide');
        })};
};