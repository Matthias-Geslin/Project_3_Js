'use strict';

var Reservation = function () {
    this.initReservation();
    this.toggled();
};


Reservation.prototype.initReservation = function () {
    const toggleCanvas = document.getElementById('validate');
    const canvas = document.getElementById('canvas');

    this.toggled = function () {
        toggleCanvas.addEventListener('click', function () {
        canvas.classList.remove('hide');
        })
    };
};