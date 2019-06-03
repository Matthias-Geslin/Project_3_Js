'use strict';

class Map {
    constructor(){
        this.initMap;
    }

};

Map.prototype.initMap = function () {
    var map = L.map('map').setView([47.2173, -1.5534], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWF0dGg5NzQiLCJhIjoiY2p3NjZqMTM5MDQxejN6a2FxcjFpN3JrbyJ9.amRXQwFMWe9k6NqKLiGdQw'
    }).addTo(map);

    var marker = L.marker([47.2173, -1.5534]).addTo(map);
};