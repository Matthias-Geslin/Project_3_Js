"use strict";

class Canvas {
    constructor() {
        this.enable();
        this.clear();
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

    function draw(X, Y) {        if(!isDrawing) {            return;        }

        // set the color
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(X, Y);
        ctx.stroke();
        [lastX, lastY] = [X, Y];
    }

    canvas.addEventListener("mousedown", (e) => {        isDrawing = true;        [lastX, lastY] = [e.layerX, e.layerY];    });
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
        if (lastName.value !== "" && firstName.value !== "") {
            window.setTimeout(enable,1000);
        }
    });
};



Canvas.prototype.clear = function () {
    let buttonReservation = document.getElementById("validate");
    let canvas = document.getElementById("canvas");

    function disable() {
        buttonReservation.setAttribute("disabled","");
    }

    buttonReservation.addEventListener("click", function () {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.setTimeout(disable,500);
    });
};