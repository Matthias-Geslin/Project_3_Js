'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
    // Create and launch the slider
    var slider = new Slider();
    // slider.moveInSlide();

    var map = new Map();
    map.mapInit();

    var reservation = new Reservation();
    reservation.initReservation();

    var canvas = new Canvas();
    canvas.initCanvas();
});