"use strict";

class Reservation {
    constructor(){
        this.initReservation();
        this.toggleCanvas();
        this.closed();

        this.reservation();
        this.validation();
    }
}




Reservation.prototype.initReservation = function () {
    const closeIt = document.getElementById("close-it");
    const reserve = document.getElementById("reservation-box");

    const validateBtn = document.getElementById("validate");
    const canvas = document.getElementById("canvas");

    this.closed = function () {
        closeIt.addEventListener("click", function () {
            reserve.classList.add("hide");
        });
    };

    this.toggleCanvas = function () {
        validateBtn.addEventListener("click", function () {
            canvas.classList.remove("hide");
        });
    };
};




// Time calculator
function calculate() {
    let lastName = document.getElementById("last-name");
    let firstName = document.getElementById("first-name");

    let stationAddress = sessionStorage.getItem("stationaddress");
    let stationName = sessionStorage.getItem("stationname");

    let storedData = document.getElementById("reservation-data");

    var expiration = sessionStorage.getItem("expiration");


    var x = setInterval(function() {

        var currentTime = new Date().getTime();

        var gapTime = expiration - currentTime;
        var timer = sessionStorage.setItem("timer", gapTime);

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((gapTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((gapTime % (1000 * 60)) / 1000);

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
}




Reservation.prototype.reservation = function () {
    var reservation = sessionStorage.getItem("reservationEnabled");
    if (reservation === true) {
        sessionStorage.getItem("timer");

        calculate();
    }
};




Reservation.prototype.validation = function () {
    document.getElementById("validate").addEventListener("click",function() {

        localStorage.getItem("last-name");
        localStorage.getItem("first-name");

        sessionStorage.setItem("reservationEnabled", true);

        var reserve = sessionStorage.getItem("reservationEnabled");

        var currentTime = new Date().getTime();
        var delay = 20 * 60 * 1000;

        var countDownDate = new Date().getTime() + delay;
        var expiration = sessionStorage.setItem("expiration", countDownDate);
        var gapTime = expiration - currentTime;

        var timer = sessionStorage.setItem("timer", gapTime);

        calculate();
        document.getElementById("re-booking").classList.remove("hide");
        document.getElementById("re-booking").classList.add("flex");
    });
};