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
        if(!isDrawing) return;

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

    const buttonReservation = document.getElementById("validate");
    function enable() {
        buttonReservation.removeAttribute("disabled");
    }
    canvas.addEventListener("mousedown", function () {
            setTimeout(enable,2500);
    });

    function disable() {
        buttonReservation.setAttribute("disabled","");
    }
    canvas.addEventListener("mouseout", function () {
        setTimeout(disable,5000);
    });

    // canvas.addEventListener("touchstart", (e) => {
    //     isDrawing = true;
    //     [lastX, lastY] = [e.targetTouches[0].layerX, e.targetTouches[0].layerY];
    // });
    // canvas.addEventListener("touchmove", (e) => draw(e.targetTouches[0].layerX, e.targetTouches[0].layerY));
    // canvas.addEventListener("touchend", () => isDrawing = false);
    // canvas.addEventListener("touchcancel", () => isDrawing = false);
 };