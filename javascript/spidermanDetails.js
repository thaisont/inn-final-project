const bodyGenre = document.getElementById("body__genre--spiderman");

const apiUrl =
  "https://rawg.io/api/games/marvels-spider-man-miles-morales?key=d0184df14199445a8da8df93d9558848";

async function getGenre() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const gameGenre = data.genres[0].name;

  console.log(data.genres[0].name);

  bodyGenre.innerHTML = `Genre : ${gameGenre} `;
}

getGenre();
