const bodyDeveloper = document.getElementById("developer__ufc");

const apiUrl =
  "https://rawg.io/api/games/ufc-4?key=d0184df14199445a8da8df93d9558848";

async function getGenre() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const gameDeveloper = data.developers[0].name;

  console.log(data);

  bodyDeveloper.innerHTML = `Developer : ${gameDeveloper}`;
}

getGenre();
