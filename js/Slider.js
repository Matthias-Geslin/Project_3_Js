'use strict';

class Slider {
    constructor(containerID) {
        this.container = document.getElementById(containerID) || document.body;
        this.slides = this.container.querySelectorAll('.picture');
        this.total = this.slides.length - 1;
        this.current = 0;

        // start on slide 1
        this.slide(this.current);
        document.getElementById("prev-lb").addEventListener("click", this.prev.bind(this));
        document.getElementById("next-lb").addEventListener("click", this.next.bind(this));
    }
}


// NEXT
Slider.prototype.next = function (interval) {
    (this.current === this.total) ? this.current = 0 : this.current += 1;

    this.stop();
    this.slide(this.current);

    if(typeof interval === 'number' && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function() {
            context.next(interval);
        }, interval);
    }
};



// PREVIOUS
Slider.prototype.prev = function (interval) {
    (this.current === 0) ? this.current = this.total : this.current -= 1;

    this.stop();
    this.slide(this.current);

    if(typeof interval === 'number' && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function() {
            context.prev(interval);
        }, interval);
    }
};



// STOP PLAYING
Slider.prototype.stop = function () {
    clearTimeout(this.run);
};



// SELECT SLIDE
Slider.prototype.slide = function (index) {
    if (index >= 0 && index <= this.total) {
        this.stop();
        for (var s = 0; s <= this.total; s++) {
            if (s === index) {
                this.slides[s].style.display = "inline-block";
            } else {
                this.slides[s].style.display = 'none';
            }
        }
    } else {
        alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
    }
};






