// API RAWG

// fetch(
//   "https://rawg.io/api/games/apex-legends?key=d0184df14199445a8da8df93d9558848"
// )
//   .then((response) => response.json())
//   .then((result) => handleResult(result))
//   .catch((error) => console.log("error", error));

// function handleResult(gameList) {
//   console.log(gameList);
// }

const bodyGenre = document.getElementById("body__genre");
const bodyDeveloper = document.getElementById("developer");

const apiUrl =
  "https://rawg.io/api/games/apex-legends?key=d0184df14199445a8da8df93d9558848";

async function getGenre() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const gameGenre = [
    data.genres[0].name,
    data.genres[1].name,
    data.genres[2].name,
    data.genres[3].name,
  ];

  let html = `Genre:`;

  gameGenre.forEach((genre) => {
    html += `${genre}`;
  });

  const gameDeveloper = data.developers[0].name;

  console.log(data);

  bodyGenre.innerHTML = html;
  bodyDeveloper.innerHTML = `Developer : ${gameDeveloper}`;
}

getGenre();

// const gameGenreTwo = data.genres[1].name;
// const gameGenreThree = data.genres[2].name;
// const gameGenreFour = data.genres[3].name;
