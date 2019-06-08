'use strict';

class Slider {
    constructor() {
        this.moveInSlide();
        this.moveSlide();
        this.playPauseSlide();
        this.playSlide();
        this.pauseSlide();
    }
}

let slideIndex = 1;

Slider.prototype.moveInSlide = function (number) {

    let i;
    const picInSlide = document.getElementsByClassName("picture");

    // Toggle the slide
    this.moveSlide = function() {
        const previousLabel = document.getElementById('prev-lb');
        const nextLabel = document.getElementById('next-lb');

        previousLabel.addEventListener('click', function () {
            Slider.prototype.moveInSlide( slideIndex-=1)
        });
        nextLabel.addEventListener('click', function () {
            Slider.prototype.moveInSlide(slideIndex +=1)
        });
    };


    if (number > picInSlide.length) {
        slideIndex = 1;
    }

    if (number < 1) {
        slideIndex = picInSlide.length;
    }

    for (i = 0; i < picInSlide.length; i++) {
        picInSlide[i].style.display = "none";
    }
    picInSlide[slideIndex-1].style.display = "block";

    // Manual keypress slide move
    document.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case "ArrowLeft":
                Slider.prototype.moveInSlide(slideIndex -=1);
                break;
            case "ArrowRight":
                Slider.prototype.moveInSlide(slideIndex +=1);
                break;
            default:
                return;
        }

        event.preventDefault();
    }, true);
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
        })
    };
};