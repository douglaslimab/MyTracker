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

    dublin = {coords: { lat: 36.533333, lng: -6.283333 }}
    addMarker(dublin)


    google.maps.event.addListener(map, 'click', function(event){
        addMarker({coords: event.latLng})
        console.log(JSON.stringify(event.latLng))

        while(latOut.firstChild){
            latOut.removeChild(latOut.firstChild)
        }

        latOut.insertAdjacentHTML("beforeend", JSON.stringify(event.latLng))
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