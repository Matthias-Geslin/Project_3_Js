"use strict";

class Reservation {
    constructor(){
        this.initReservation();
        this.toggleCanvas();
        this.closed();

        this.storage();
    }
}

Reservation.prototype.initReservation = function () {
    const closeIt = document.getElementById("close-it");
    const reserve = document.getElementById("reservation-box");

    const validateBtn = document.getElementById("validate");
    const canvas = document.getElementById("canvas");

    this.closed = function () {
        closeIt.addEventListener("click", function () {
            reserve.classList.remove("flex");
            reserve.classList.add("hide");
            canvas.classList.add("hide");
        });
    };

    this.toggleCanvas = function () {
        validateBtn.addEventListener("click", function () {
            canvas.classList.remove("hide");
            canvas.classList.add("flex");
        });
    };
};

Reservation.prototype.storage = function () {
    let lastName;
    lastName = document.getElementById("last-name");

    let firstName;
    firstName = document.getElementById("first-name");

    let stationAddress;
    stationAddress = sessionStorage.getItem("stationaddress");

    let stationName;
    stationName = sessionStorage.getItem("stationname");

    document.getElementById("validate").addEventListener("click",function() {
        if ((lastName !== undefined) && (firstName !== undefined)) {
            localStorage.setItem("lastname", lastName.value);
            localStorage.setItem("firstname", firstName.value);
        }
    });

    let storedData = document.getElementById("reservation-data");
    storedData.innerText = "Vélo réservé à la station " + stationName + ", à l'adresse: " +stationAddress + ". Par " + lastName.value + " " + firstName.value + ". Temps restant: ";
};



