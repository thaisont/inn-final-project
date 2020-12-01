const burgerNav = document.querySelector(".burger__icon");
const burgerOutside = document.querySelector(".burger__outside");
const burgerDisplay = document.querySelector(".burger__background");
const body = document.querySelector("body");
const burgerActive = document.querySelector(".burger__icon animate");

//Toggle nav
burgerNav.addEventListener("click", function () {
  burgerDisplay.classList.toggle("burger-active");
  burgerOutside.classList.toggle("burger__outside--active");
  burgerNav.classList.toggle("animate");
  body.classList.add("body__stop-scroll");
});

burgerOutside.addEventListener("click", function (event) {
  burgerDisplay.classList.remove("burger-active");
  burgerOutside.classList.remove("burger__outside--active");
  burgerNav.classList.remove("animate");
  body.classList.remove("body__stop-scroll");
});

burgerActive.addEventListener("click", function (event) {
  body.classList.remove("body__stop-scroll");
});

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

// IGDB API

//Client ID - rkh8yp9twik1pqb6h9el1mur2ah3fs
// Client secret - 9srh1ecwcti9dy8um1p4pfjpb7xv0c

// {
//     "access_token": "hhdi4so0l7uzp8xqd165c628lzss71",
//     "expires_in": 5598967,
//     "token_type": "bearer"
// }

// // end point
// https://api.igdb.com/v4/genres

let myHeaders = new Headers();
myHeaders.append("Client-ID", "rkh8yp9twik1pqb6h9el1mur2ah3fs");
myHeaders.append("Authorization", "Bearer hhdi4so0l7uzp8xqd165c628lzss71");
myHeaders.append("Content-Type", "application/javascript");
myHeaders.append(
  "Cookie",
  "__cfduid=d8e13647ba8cc255b89736ed9484294be1606685768"
);

let raw = "fields checksum,created_at,name,slug,updated_at,url;";

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://api.igdb.com/v4/genres/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

// axios({
//   url: "https://api.igdb.com/v4/genres",
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Client-ID": "Client rkh8yp9twik1pqb6h9el1mur2ah3fs",
//     Authorization: "Bearer hhdi4so0l7uzp8xqd165c628lzss71",
//   },
//   data: "fields checksum,created_at,name,slug,updated_at,url;",
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// async function data() {
//   const response = await fetch(
//     "https://id.twitch.tv/oauth2/tokenclient_id=rkh8yp9twik1pqb6h9el1mur2ah3fs&client_secret=70e1marefy5em3c2spjr58pvrqlp2t&grant_type=client_credentials"
//   );
//   const twitchData = await response.json();
// }
