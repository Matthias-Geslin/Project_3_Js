"use strict";

// Create and launch the slider
var slider = new Slider();
slider.begin();

var map = new GoogleMap();
map.initMap();

var reservation = new Reservation();
reservation.initReservation();

var canvas = new Canvas();
canvas.initCanvas();
