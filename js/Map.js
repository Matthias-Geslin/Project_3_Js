'use strict';

var Map = function () {
    this.initMap();
};

Map.prototype.initMap = function init() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGg5NzQiLCJhIjoiY2p3NjZqMTM5MDQxejN6a2FxcjFpN3JrbyJ9.amRXQwFMWe9k6NqKLiGdQw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        // [long, lat]
        center: [-1.5534, 47.2173],
        zoom: 10
    });


    var marker = new mapboxgl.Marker()
        .setLngLat([-1.5534, 47.2173])
        .addTo(map);



    // Geolocation control
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));


    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());


    // toggle interaction menu
    document.getElementById('listing-group').addEventListener('change', function(e) {
        var handler = e.target.id;
        if (e.target.checked) {
            map[handler].enable();
        } else {
            map[handler].disable();
        }
    });
};


// var Marker = ({
//         "number": 123,
//         "contractName" : "Nantes",
//         "name": "nom station",
//         "address": "adresse indicative",
//         "position": {
//             "latitude": 45.774204,
//             "longitude": 4.867512
//         },
//         "banking": true,
//         "bonus": false,
//         "status": "OPEN",
//         "lastUpdate": "2019-04-08T12:23:34Z",
//         "connected": true,
//         "overflow": true,
//         "shape": null,
//         "totalStands": {
//             "availabilities": {
//                 "bikes": 15,
//                 "stands": 25
//             },
//             "capacity": 40
//         },
//         "mainStands": {
//             "availabilities": {
//                 "bikes": 15,
//                 "stands": 15
//             },
//             "capacity": 30
//         },
//         "overflowStands": {
//             "availabilities": {
//                 "bikes": 0,
//                 "stands": 10
//             },
//             "capacity": 10
//         }
//     })