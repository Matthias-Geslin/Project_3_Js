"use strict";

class Reservation {
    constructor() {
        this.closeIt = document.getElementById("close-it");
        this.reserve = document.getElementById("reservation-box");

        this.validateBtn = document.getElementById("validate");
        this.canvas = document.getElementById("canvas");

        this.lastName = document.getElementById("lastname");
        this.firstName = document.getElementById("firstname");
        this.storedLastName = localStorage.getItem("lastname");
        this.storedFirstName = localStorage.getItem("firstname");

        this.blockInfoResa = document.getElementById("infoReservation");
        this.lastNameConfirm = document.getElementById("lastNameConfirm");
        this.firstNameConfirm = document.getElementById("firstNameConfirm");
        this.stationAdressConfirm = document.getElementById("stationConfirm");
        this.minTimer = document.getElementById("minTimer");
        this.secTimer = document.getElementById("secTimer");

        this.noReservation = document.getElementById("noReservation");
        this.resConfirmed = document.getElementById("resConfirmed");
        this.reservationTimerUp = document.getElementById("reservationTimerUp");
        this.stationAddress = sessionStorage.getItem("stationaddress");
        this.buttonReservation = document.getElementById("validate");

        this.timeMin = sessionStorage.getItem("timeMin");
        this.timeSec = sessionStorage.getItem("timeSec");
        this.timer = "";
    }
}


Reservation.prototype.initReservation = function () {
    this.closeIt.addEventListener("click", this.hideReservation.bind(this));
    this.validateBtn.addEventListener("click", this.toggleCanvas.bind(this));
    this.buttonReservation.addEventListener("click", this.checkData.bind(this));

    if(this.timeSec === 0 && this.timeMin === 0) {
        sessionStorage.setItem("stationaddress", "");
        sessionStorage.setItem("stationname", "");
    }

    if(this.timeMin !== null && this.timeSec !== isNaN) {
        this.displayConfirmResa();
        this.startTimer();
    }
};


Reservation.prototype.hideReservation = function () {
    this.reserve.classList.add("hide");
};


Reservation.prototype.toggleCanvas = function () {
    this.canvas.classList.remove("hide");
};


Reservation.prototype.checkData = function () {
    if (this.lastName.value === "") {
        alert("Merci de renseigner votre nom pour valider votre réservation.");
    }
    else if (this.firstName.value === "") {
        alert("Merci de renseigner votre prénom pour valider votre réservation.");
    }
    else {
        this.storeData();
    }
};


Reservation.prototype.storeData = function () {
    localStorage.setItem("lastname", this.lastName.value);
    localStorage.setItem("firstname", this.firstName.value);

    this.storedLastName = localStorage.getItem("lastname");
    this.storedFirstName = localStorage.getItem("firstname");

    this.stationAddress = sessionStorage.getItem("stationaddress");

    // Display of the square with reservations info
    this.noReservation.classList.add("hide");
    this.reservationTimerUp.classList.add("hide");
    this.resConfirmed.classList.remove("hide");
    this.blockInfoResa.style.backgroundColor = "rgba(51,255,51,0.5)";
    this.timeMin = 20;
    this.timeSec = 0;

    this.setInfoResa();
    clearInterval(this.timer);
    this.startTimer();
};


Reservation.prototype.startTimer = function () {
    this.timer = setInterval(this.countDown.bind(this), 1000);
};


Reservation.prototype.countDown = function () {
    sessionStorage.setItem("timeMin",this.timeMin);
    sessionStorage.setItem("timeSec",this.timeSec);
    this.displayConfirmResa();
    this.timeSec--;
    if (this.timeSec < 0) {
        this.timeSec = 59;
        this.timeMin--;
    }
    if (this.timeMin < 0) {
        this.resConfirmed.classList.add("hide");
        this.reservationTimerUp.classList.remove("hide");
        this.blockInfoResa.style.backgroundColor = "rgba(220,28,40,0.5)";
        clearInterval(this.timer);
    }
};


Reservation.prototype.displayConfirmResa = function () {
    this.timeMin = sessionStorage.getItem("timeMin");
    this.timeSec = sessionStorage.getItem("timeSec");
    this.setInfoResa();
    this.noReservation.classList.add("hide");
    this.resConfirmed.classList.remove("hide");
    this.resConfirmed.style.display = "block";
    this.blockInfoResa.style.backgroundColor = "rgba(51,255,51,0.5)";
};


Reservation.prototype.setInfoResa = function () {
    this.lastNameConfirm.innerText = this.storedLastName;
    this.firstNameConfirm.innerText = this.storedFirstName;
    this.stationAdressConfirm.innerText = this.stationAddress;
    this.minTimer.innerText = this.timeMin;
    this.secTimer.innerText = this.timeSec;
};
