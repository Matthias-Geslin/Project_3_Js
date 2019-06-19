'use strict';

var Map = function() {
    this.mapInit();
};

Map.prototype.mapInit = function () {

};

function initMap() {
    var options = {
        zoom: 13,
        center: {lat: 47.2173, lng: -1.5534}
    };

    var map = new google.maps.Map(document.getElementById('map'), options);


    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=58866263d27fa1a6d54be4b8a79069f811cd87fd", function (reponse) {
        var stations = JSON.parse(reponse);
        var lattitude, longitude;
        stations.forEach(function (station) {
            lattitude = station.position.lat;
            longitude = station.position.lng;
            addMarker(station);
        })

        // Add Marker Function
        function addMarker(station) {
            var marker = new google.maps.Marker({
                position: station.position,
                map: map,
            });

            // Check for customicon
            if (station.iconImage) {
                marker.setIcon(station.iconImage);
            }

            // Check content
            if (station.name) {
                var infoWindow = new google.maps.InfoWindow({
                    content: station.name
                });
                const reserve = document.getElementById('reservation-box');
                marker.addListener('click', function () {

                    reserve.classList.remove('hide');
                    reserve.classList.add('flex');
                });
            }
        }
    })
}