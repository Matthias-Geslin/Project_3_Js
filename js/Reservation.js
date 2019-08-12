"use strict";

class Reservation {
    constructor(){
        this.closed();
        this.toggleCanvasEle();

        this.reservation();
        this.validation();

        this.closeIt = document.getElementById("close-it");
        this.reserve = document.getElementById("reservation-box");

        this.validateBtn = document.getElementById("validate");
        this.canvas = document.getElementById("canvas");
    }
}




Reservation.prototype.initReservation = function () {
    this.closed = function () {
        this.closeIt.addEventListener("click", this.hideReservation.bind(this));
    };

    this.toggleCanvasEle = function () {
        this.validateBtn.addEventListener("click", this.toggleCanvas.bind(this));
    };
};


Reservation.prototype.hideReservation = function () {
    this.reserve.classList.add("hide");
};


Reservation.prototype.toggleCanvas = function () {
    this.canvas.classList.remove("hide");
};




// Time calculator
Reservation.prototype.calculate = function () {
    let lastName = document.getElementById("last-name");
    let firstName = document.getElementById("first-name");

    let stationAddress = sessionStorage.getItem("stationaddress");
    let stationName = sessionStorage.getItem("stationname");

    let storedData = document.getElementById("reservation-data");

    let expiration = sessionStorage.getItem("expiration");


    let x = setInterval(function() {

        let currentTime = new Date().getTime();

        let gapTime = expiration - currentTime;
        let timer = sessionStorage.setItem("timer", gapTime);

        // Time calculations for days, hours, minutes and seconds
        let minutes = Math.floor((gapTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((gapTime % (1000 * 60)) / 1000);

        if(gapTime > 0) {
            storedData.innerHTML = "<p>Vélo réservé à la station " + stationName + ", à l'adresse: " +stationAddress + ". Par " + lastName.value + " " + firstName.value + ". Temps restant: " + minutes + "min et " + seconds + "s.</p>" ;
            sessionStorage.setItem("reservationEnabled", true);
        }else {
            sessionStorage.setItem("reservationEnabled", false);
            clearInterval(x);
            window.location.reload().sessionStorage.clear();
            window.alert("Votre session à expirée ainsi que votre réservation.");
        }
    } ,1000);
    localStorage.setItem("last-name", lastName.value);
    localStorage.setItem("first-name", firstName.value);
};




Reservation.prototype.reservation = function () {
    let reservation = sessionStorage.getItem("reservationEnabled");
    if (reservation === true) {
        sessionStorage.getItem("timer");

        this.calculate();
    }
};




Reservation.prototype.validation = function () {
    document.getElementById("validate").addEventListener("click",function() {

        localStorage.getItem("last-name");
        localStorage.getItem("first-name");

        sessionStorage.setItem("reservationEnabled", true);

        let reserve = sessionStorage.getItem("reservationEnabled");

        let currentTime = new Date().getTime();
        let delay = 20 * 60 * 1000;

        let countDownDate = new Date().getTime() + delay;
        let expiration = sessionStorage.setItem("expiration", countDownDate);
        let gapTime = expiration - currentTime;

        let timer = sessionStorage.setItem("timer", gapTime);

        this.calculate();
        document.getElementById("re-booking").classList.remove("hide");
        document.getElementById("re-booking").classList.add("flex");
    });
};