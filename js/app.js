const lat = document.getElementById("lat-input")
const long = document.getElementById("long-input")
const sendBtn = document.getElementById("send-btn")
const latOut = document.getElementById("lat-out")
const longOut = document.getElementById("long-out")

let map;

function initMap() {
    var options = {
        center: {lat: 53.350140, lng: -6.266155},
        zoom: 16,
    }

    map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: options.center,
        map: map
    })

    dublin = {coords: { "lat": 36.533333, "lng": -6.283333 }}
    addMarker(dublin)


    google.maps.event.addListener(map, 'click', function(event){
        addMarker({"coords": event.latLng})

        let latitude = event.latLng.lat()
        let longitude = event.latLng.lng()

        console.log(latitude)
        console.log(longitude)

        latOut.value = latitude
        longOut.value = longitude
//        latOut.insertAdjacentHTML("beforeend", latitude.toFixed(2))
//        longOut.insertAdjacentHTML("beforeend", longitude.toFixed(2))
    })
}

function addMarker(props){
    var marker = new google.maps.Marker({
        position: props.coords,
        map: map
    })
}

//  entry_id
//  title   (classification)
//  coments (breef description)
//  cordinates
//  date