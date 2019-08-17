"use strict";

// Create and launch the slider
var slider = new Slider();
slider.begin();

var map = new GoogleMap();
function initMap() {
    map.initMap();
}

var reservation = new Reservation();
reservation.initReservation();
reservation.closed();
reservation.toggleCanvasEle();

var canvas = new Canvas();
canvas.initCanvas();