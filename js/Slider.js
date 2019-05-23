'use strict';

var Slider = function () {
    this.moveInSlide();
};


var slideIndex = 1;
Slider.prototype.moveInSlide = function (number) {
    var i;
    var picInSlide = document.getElementsByClassName("picture");

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