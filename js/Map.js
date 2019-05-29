'use strict';

var Map = function () {


// https://api.mapbox.com/styles/v1/matth974/cjw66q9n1062y1co77y5ceo5x.html?fresh=true&title=true&access_token=pk.eyJ1IjoibWF0dGg5NzQiLCJhIjoiY2p3NjZqMTM5MDQxejN6a2FxcjFpN3JrbyJ9.amRXQwFMWe9k6NqKLiGdQw#12.0/48.866500/2.317600/0
// style url :   mapbox://styles/matth974/cjw66q9n1062y1co77y5ceo5x
// Access token : pk.eyJ1IjoibWF0dGg5NzQiLCJhIjoiY2p3NjZqMTM5MDQxejN6a2FxcjFpN3JrbyJ9.amRXQwFMWe9k6NqKLiGdQw


    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGg5NzQiLCJhIjoiY2p3NjZqMTM5MDQxejN6a2FxcjFpN3JrbyJ9.amRXQwFMWe9k6NqKLiGdQw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/matth974/cjw66q9n1062y1co77y5ceo5x',
        center: [2.317600, 48.866500],
        zoom: 12.0
    });
};