const bodyGenre = document.getElementById("body__genre--cod");
const bodyDeveloper = document.getElementById("developer__cod");

const apiUrl =
  "https://rawg.io/api/games/call-of-duty-black-ops-cold-war?key=d0184df14199445a8da8df93d9558848";

async function getGenre() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const gameGenre = data.genres[0].name;
  const gameDeveloper = data.developers[0].name;
  const gameDeveloperTwo = data.developers[1].name;

  console.log(data);

  bodyGenre.innerHTML = `Genre : ${gameGenre} `;
  bodyDeveloper.innerHTML = `Developer : ${gameDeveloper}, ${gameDeveloperTwo}`;
}

getGenre();
