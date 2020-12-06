//Google Map

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5045, lng: -0.0865 },
    zoom: 16,
    mapId: "4a22f8a771c6f75",
  });

  //Marker
  const marker = new google.maps.Marker({
    position: { lat: 51.5045, lng: -0.0865 },
    map,
    title: "INN",
  });

  //info window

  const infowindow = new google.maps.InfoWindow({
    content: "INN HQ",
  });

  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
}
