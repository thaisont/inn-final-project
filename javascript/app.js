const burger = document.querySelector(".burger");
const burgerNav = document.querySelector(".burger__icon");
const burgerOutside = document.querySelector(".burger__outside");
const burgerDisplay = document.querySelector(".burger__background");
const body = document.querySelector("body");
const genre = document.getElementById("genre-test");

//Toggle nav
burger.addEventListener("click", function () {
  burgerDisplay.classList.toggle("burger-active");
  burgerOutside.classList.toggle("burger__outside--active");
  burgerNav.classList.toggle("animate");
  body.classList.add("stop-scroll");
});

burgerOutside.addEventListener("click", function (event) {
  burgerDisplay.classList.remove("burger-active");
  burgerOutside.classList.remove("burger__outside--active");
  burgerNav.classList.remove("animate");
  body.classList.remove("stop-scroll");
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

// IGDB API DETAILS

//Client ID - rkh8yp9twik1pqb6h9el1mur2ah3fs
// Client secret - 9srh1ecwcti9dy8um1p4pfjpb7xv0c

// {
//     "access_token": "hhdi4so0l7uzp8xqd165c628lzss71",
//     "expires_in": 5598967,
//     "token_type": "bearer"
// }

// // end point
// https://it53gz3qc0.execute-api.us-west-2.amazonaws.com/production/v4/games
// https://api.igdb.com/v4/games

// https://it53gz3qc0.execute-api.us-west-2.amazonaws.com/production/v4/games

// IGDB API

let myHeaders = new Headers();
myHeaders.append("Client-ID", "rkh8yp9twik1pqb6h9el1mur2ah3fs");
myHeaders.append("Authorization", "Bearer hhdi4so0l7uzp8xqd165c628lzss71");
myHeaders.append("Content-Type", "application/javascript");
myHeaders.append(
  "Cookie",
  "__cfduid=d8e13647ba8cc255b89736ed9484294be1606685768"
);

let raw =
  'search "Apex Legends season 7"; fields name,release_dates,genres.name,rating,slug,involved_companies;';

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => handleResult(result[0].genres[0].name))
  .catch((error) => console.log("error", error));

console.log(data);

function handleResult(gameList) {
  genre.innerHTML = gameList;
  console.log(gameList);
}

// async function getData() {
//   const response = await fetch(
//     "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/"
//   );
//   const result = await response.result();
// }

// getData();
