'use strict';

var Reservation = function () {
    this.initReservation();
    this.toggleReservation();
    this.toggleCanvas();
    this.closed();
};




Reservation.prototype.initReservation = function () {
    const mapTile = document.getElementById('map');

    const closeIt = document.getElementById('close-it');
    const reserve = document.getElementById('reservation-box');

    const validateBtn = document.getElementById('validate');
    const canvas = document.getElementById('canvas');

    this.toggleReservation = function () {
        mapTile.addEventListener('click', function () {
            reserve.classList.remove('hide');
            reserve.classList.add('flex');
        })
    };

   this.closed = function () {
        closeIt.addEventListener('click', function () {
            reserve.classList.remove('flex');
            reserve.classList.add('hide');
            canvas.classList.add('hide');
        })
    };


   this.toggleCanvas = function () {
        validateBtn.addEventListener('click', function () {
            canvas.classList.remove('hide');
            canvas.classList.add('flex');
        })
    };
};


// class Reservation  {
//     constructor(){
//         this.initReservation();
//         this.toggleReservation();
//         this.closed();
//         this.toggleCanvas();
//         this.mapTile = document.getElementById('map');
//         this.closeIt = document.getElementById('close-it');
//         this.reserve = document.getElementById('reservation-box');
//         this.validateBtn = document.getElementById('validate');
//         this.canvas = document.getElementById('canvas');
//     }
// }


//
// Reservation.prototype.toggleReservation = function () {
//     this.mapTile.addEventListener('click', function () {
//         this.reserve.classList.remove('hide');
//         this.reserve.classList.add('flex');
//     })
// };
//
//
// Reservation.prototype.closed = function () {
//     this.closeIt.addEventListener('click', function () {
//         this.reserve.classList.remove('flex');
//         this.reserve.classList.add('hide');
//         this.canvas.classList.add('hide');
//     })
// };
//
//
// Reservation.prototype.toggleCanvas = function () {
//     this.validateBtn.addEventListener('click', function () {
//         this.canvas.classList.remove('hide');
//         this.canvas.classList.add('flex');
//     })
// };