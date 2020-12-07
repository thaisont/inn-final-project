const bodyGenre = document.getElementById("body__genre--nba");

const apiUrl =
  "https://rawg.io/api/games/nba-2k21?key=d0184df14199445a8da8df93d9558848";

async function getGenre() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const gameGenre = data.genres[0].name;
  const gameGenreTwo = data.genres[1].name;

  console.log(data);

  bodyGenre.innerHTML = `Genre : ${gameGenre}, ${gameGenreTwo} `;
}

getGenre();
