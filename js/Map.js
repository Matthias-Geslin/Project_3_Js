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


    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=58866263d27fa1a6d54be4b8a79069f811cd87fd", function (reponse) {
        var stations = JSON.parse(reponse);
        var lattitude, longitude;


        stations.forEach(function (station) {
            lattitude = station.position.lat;
            longitude = station.position.lng;

            // Array of markers
            var markers = [
                {
                    position: {
                        lat: lattitude,
                        lng: longitude
                    },
                }
            ];


            // Loop through markers
            for (var i = 0; i < markers.length; i++) {
                // Add marker
                addMarker(markers[i]);
            }
        })


        // Add Marker Function
        function addMarker(markers) {
            var marker = new google.maps.Marker({
                position: markers.coords,
                map: map,
            });

            // Check for customicon
            if (markers.iconImage) {
                marker.setIcon(markers.iconImage);
            }

            // Check content
            if (markers.content) {
                var infoWindow = new google.maps.InfoWindow({
                    content: markers.content
                });

                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            }
        }
    })
}