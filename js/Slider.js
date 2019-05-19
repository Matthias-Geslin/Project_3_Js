'use strict';

var n;
var slideIndex = 1;

const Slider = function (n) {
    this.initSlider(slideIndex);
};

// plusSlider onclick html
function plusSlider(n) {
    Slider.prototype.initSlider(slideIndex += n);
}

Slider.prototype.initSlider = function () {

    var i;
    var x = document.getElementsByClassName("picture");

    if (n > x.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
};


