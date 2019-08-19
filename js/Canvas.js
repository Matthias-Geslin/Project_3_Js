"use strict";

class Canvas {
    constructor() {
        this.enable();
        this.disable();
    }
}

Canvas.prototype.initCanvas = function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

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

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.layerX, e.layerY];
    });
    canvas.addEventListener("mousemove", (e) => draw(e.layerX, e.layerY));
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);
};



Canvas.prototype.enable = function () {
    let canvas = document.getElementById("canvas");
    let lastName = document.getElementById("last-name");
    let firstName = document.getElementById("first-name");
    let buttonReservation = document.getElementById("validate");

    // Enabling the validate button
    function enable() {
        buttonReservation.removeAttribute("disabled");
    }
    canvas.addEventListener("mousedown", function () {
        if (lastName.value && firstName.value !== "") {
            setTimeout(enable,2000);
        }
    });
};


Canvas.prototype.disable = function () {
    let canvas = document.getElementById("canvas");
    let buttonReservation = document.getElementById("validate");

    // Disabling the validate button
    function disable() {
        buttonReservation.setAttribute("disabled","");
    }
    canvas.addEventListener("mouseout", function () {
        setTimeout(disable,10000);
    });
};