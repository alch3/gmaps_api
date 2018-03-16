function initMap() {
    var latLng = new google.maps.LatLng(48.864716, 2.349014);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: latLng
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();

            document.getElementById('lat').value = lat;
            document.getElementById('lng').value = lng;
        } else {
            alert("Le géocodage n'a pas pu être effectué pour la raison suivante : " + status);
        }
    });
}
