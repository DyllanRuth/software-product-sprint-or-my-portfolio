let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -29.954, lng: -95.702 },
    zoom: 8,
  });
}
