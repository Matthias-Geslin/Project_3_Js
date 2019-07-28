"use strict";

class Canvas {
    constructor() {
        this.initCanvas();
    }
}

Canvas.prototype.initCanvas = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

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

    const nom = document.getElementById("last-name");
    const prenom = document.getElementById("first-name");
    const buttonReservation = document.getElementById("validate");

    function enable() {
        buttonReservation.removeAttribute("disabled");
    }
    canvas.addEventListener("mousedown", function () {
        if (nom.value && prenom.value !== "") {
            setTimeout(enable,4000);
        }
    });

    function disable() {
        buttonReservation.setAttribute("disabled","");
    }
    canvas.addEventListener("mouseout", function () {
        setTimeout(disable,5000);
    });
};