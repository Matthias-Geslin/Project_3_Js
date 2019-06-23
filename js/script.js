'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
    // Create and launch the slider
    var slider = new Slider();

    var map = new Map();

    var reservation = new Reservation();
    reservation.initReservation();

    var canvas = new Canvas();
    canvas.initCanvas();
});