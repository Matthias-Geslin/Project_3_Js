'use strict';

class Reservation {
    constructor(){
        this.initReservation();
        this.toggleCanvas();
        this.closed();

        this.storage();
    }
}

Reservation.prototype.initReservation = function () {
    const closeIt = document.getElementById('close-it');
    const reserve = document.getElementById('reservation-box');

    const validateBtn = document.getElementById('validate');
    const canvas = document.getElementById('canvas');

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

Reservation.prototype.storage = function () {
    var lastName;
    lastName = document.getElementById('last-name');
    var firstName;
    firstName = document.getElementById('first-name');

    var stationAddress;
    stationAddress = sessionStorage.getItem('stationAddress');
    var stationName;
    stationName = sessionStorage.getItem('stationName');

    document.getElementById("validate").addEventListener("click",function() {
        if ((lastName !== undefined) && (firstName !== undefined)) {
            localStorage.setItem("lastname", lastName.value);
            localStorage.setItem("firstname", firstName.value);
        }
    });

    sessionStorage.setItem('lastname', lastName.value);
    sessionStorage.setItem('firstname', firstName.value);

    var storedData = document.getElementById('reservation-data');
    storedData.innerText = "Vélo réservé à la station " + stationName + ", à l'adresse: " +stationAddress + ". Par " + lastName.value + " " + firstName.value + ". Temps restant: ";
};
