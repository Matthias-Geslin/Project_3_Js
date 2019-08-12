"use strict";

class Canvas {
    constructor() {
        this.enable();
        this.disable();

        this.canvas = document.getElementById("canvas");

        this.lastName = document.getElementById("last-name");
        this.firstName = document.getElementById("first-name");
        this.buttonReservation = document.getElementById("validate");
    }
}

Canvas.prototype.initCanvas = function () {
    var ctx = this.canvas.getContext("2d");

// define the type of the draw pointer
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 3;

// set the origin of the draw
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function draw(X, Y) {
        if(!isDrawing) {
            return;
        }

        // set the color
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(X, Y);
        ctx.stroke();
        [lastX, lastY] = [X, Y];
    }

    this.canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.layerX, e.layerY];
    });
    this.canvas.addEventListener("mousemove", (e) => draw(e.layerX, e.layerY));
    this.canvas.addEventListener("mouseup", () => isDrawing = false);
    this.canvas.addEventListener("mouseout", () => isDrawing = false);
};



Canvas.prototype.enable = function () {
    // Enabling the validate button
    function enable() {
        this.buttonReservation.removeAttribute("disabled");
    }
    this.canvas.addEventListener("mousedown", function () {
        if (this.lastName.value && this.firstName.value !== "") {
            setTimeout(enable,4000);
        }
    });
};


Canvas.prototype.disable = function () {
    // Disabling the validate button
    function disable() {
        this.buttonReservation.setAttribute("disabled","");
    }
    this.canvas.addEventListener("mouseout", function () {
        setTimeout(disable,5000);
    });
};