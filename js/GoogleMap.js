"use strict";

class GoogleMap {
    constructor(){
        this.nantes = {lat: 47.2173, lng: -1.5534};
    }

    initMap() {
        var gMap = new google.maps.Map(document.getElementById("google-map"), {
            zoom: 13,
            center: this.nantes
        });

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=58866263d27fa1a6d54be4b8a79069f811cd87fd",
            function (reponse) {

                function addMarker(station) {
                    let stationStatus = document.getElementById("station-status");

                    var marker = new google.maps.Marker({
                        position: station.position,
                        map: gMap,
                        icon:""
                    });
                    // Check if station Open
                    if (station.status === "OPEN") {
                        marker.icon= {
                            url: "img/green.png",
                        };
                        stationStatus.textContent = "Ouverte";
                    } else {
                        marker.icon= {
                            url:"img/red.png"
                        };
                        stationStatus.textContent = "Fermée";
                    }

                    // Check content
                    if (station.name) {
                        var infoWindow = new google.maps.InfoWindow({
                            content: station.name
                        });
                        const reserve = document.getElementById("reservation-box");

                        marker.addListener("click", function () {

                            reserve.classList.remove("hide");
                            reserve.classList.add("flex");

                            const stationName = document.getElementById("station-name");
                            const stationAddress = document.getElementById("station-address");
                            const bikeStands = document.getElementById("station-stands");
                            const availableBikes = document.getElementById("available-bikes");
                            const buttonReservation = document.getElementById("validate");

                            // Status infos
                            if (station.status === "OPEN") {
                                stationStatus.textContent = "Ouverte";
                            } else {
                                stationStatus.textContent = "Fermée";
                            }

                            // Removing excessive numbers with regex
                            const regex = /#0+0/gm;
                            const nameString = `${station.name}`;
                            const addressString = `${station.address}`;
                            const subst = "";

                            // The substituted value will be contained in the result variable
                            const nameTruncated = nameString.replace(regex, subst);
                            const addressTruncated = addressString.replace(regex, subst);

                            stationName.innerText = "Nom: " + nameTruncated;
                            stationAddress.innerText = "Adresse: " + addressTruncated;
                            bikeStands.innerText = station.bike_stands + " supports à vélo.";

                            if (station.available_bikes < 1) {
                                availableBikes.innerText = "Aucun vélo de disponible à cette station.";
                                buttonReservation.classList.add("hide");
                            } else if (station.available_bikes > 0) {
                                availableBikes.innerText = station.available_bikes + " vélo(s) restant(s) disponible(s).";
                                buttonReservation.classList.remove("hide");
                            }
                            sessionStorage.setItem("stationname", nameTruncated);
                            sessionStorage.setItem("stationaddress", addressTruncated);
                        });
                    }

                }

                var stations = JSON.parse(reponse);
                var latitude, longitude;
                // Add Markers for each station latitude & longitude
                stations.forEach(function (station) {
                    latitude = station.position.lat;
                    longitude = station.position.lng;
                    addMarker(station);
                });
            });
    }
}