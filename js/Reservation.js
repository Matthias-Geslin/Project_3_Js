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
            reserve.classList.add("hide");
        });
    };

    this.toggleCanvas = function () {
        validateBtn.addEventListener("click", function () {
            canvas.classList.remove("hide");
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

    // Time calculator
    function calculate() {
        var expiration = sessionStorage.getItem("expiration");
        var x = setInterval(function() {

            var currentTime = new Date().getTime();

            var gapTime = expiration - currentTime;
            var timer = sessionStorage.setItem("timer", gapTime);

            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((gapTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((gapTime % (1000 * 60)) / 1000);


            let time = document.querySelector(".time");
            if(gapTime > 0) {
                time.innerHTML = minutes + "min et " + seconds + "s.</p>" ;
            }else {
                clearInterval(x);
            }
        } ,1000);
    }

    var reserve = sessionStorage.getItem("reservationEnabled");

    if (reserve !== true){
        var gapTime = sessionStorage.getItem("Timer");
        calculate();
    }

    let time = document.querySelector(".time");
    var currentTime = new Date().getTime();
    var delay = 20 * 60 * 1000;
    var countDownDate = new Date().getTime() + delay;
    var expiration = sessionStorage.setItem("expiration", countDownDate);
    var gapTime = expiration - currentTime;

    var timer = sessionStorage.setItem("timer", gapTime);
    time.innerText = timer;

    document.getElementById("validate").addEventListener("click",function() {
        if ((lastName !== "") && (firstName !== "")) {
            localStorage.setItem("lastname", lastName.value);
            localStorage.setItem("firstname", firstName.value);
        }
    });

    let storedData = document.getElementById("reservation-data");
    storedData.innerText = "Vélo réservé à la station " + stationName + ", à l'adresse: " +stationAddress + ". Par " + lastName.value + " " + firstName.value + ". Temps restant: ";
};



