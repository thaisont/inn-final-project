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

const apiUrl =
  "https://rawg.io/api/games/apex-legends?key=d0184df14199445a8da8df93d9558848";

async function getGenre() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  document.getElementById(
    "body__genre"
  ).innerHTML = `Genre : ${data.genres[0].name}`;
}

getGenre();
