const burger = document.querySelector(".burger");
const burgerNav = document.querySelector(".burger__icon");
const burgerOutside = document.querySelector(".burger__outside");
const burgerDisplay = document.querySelector(".burger__background");
const body = document.querySelector("body");

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

//d0184df14199445a8da8df93d9558848

// https://api.rawg.io/api/platforms?key=d0184df14199445a8da8df93d9558848

// https://api.rawg.io/api/games?key=d0184df14199445a8da8df93d9558848

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

// let myHeaders = new Headers();
// myHeaders.append("Client-ID", "rkh8yp9twik1pqb6h9el1mur2ah3fs");
// myHeaders.append("Authorization", "Bearer hhdi4so0l7uzp8xqd165c628lzss71");
// myHeaders.append("Content-Type", "application/javascript");
// myHeaders.append(
//   "Cookie",
//   "__cfduid=d8e13647ba8cc255b89736ed9484294be1606685768"
// );

// let raw =
//   'search "Apex Legends season 7"; fields name,release_dates,genres.name,rating,slug,involved_companies;';

// let requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };
