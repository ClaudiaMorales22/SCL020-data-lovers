import data from "./data/athletes/athletes.js";
import { getFemaleAthletes } from "./data.js";


const athletes = data.athletes;

const femaleathletes = athletes.filter((person) => person.gender === "F");
//const maleathletes = athletes.filter((person) => person.gender === "M");
const femaleathletesContainer = document.querySelector("#allAthletes");

document.addEventListener("DOMContentLoaded", () => {
  //const femaleathletesContainer = document.querySelector("#allAthletes");
  for (let i = 0; i < femaleathletes.length; i++) {
    const athleteCard = document.createElement("div");
    athleteCard.className = "athlete";
    athleteCard.innerHTML += `
              <img src="${"images/Niña.jpeg"}" alt="">
              <ul>
                  <p>Nombre: ${femaleathletes[i].name}</p>
                  <p>País: ${femaleathletes[i].team}</p>
                  <p>Deporte: ${femaleathletes[i].sport}</p>
                  <p>Medalla: ${femaleathletes[i].medal}</p>
              </ul>
          `;
    femaleathletesContainer.appendChild(athleteCard);
  }
});


// *** Búsqueda ***

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", (event) => {
  let textoBuscado = event.target.value.toLowerCase();
  let matchedAthletes = femaleathletes.filter((atleta) => {
    return atleta.name.toLowerCase().includes(textoBuscado);
  });
renderAthlete(matchedAthletes);
});



// *** Ordenar ***


const ordenar = document.querySelector("#sort");
console.log(ordenar);
ordenar.addEventListener("change", (e) => {
  let ordenados = [];

  if (e.target.value === "A-Z") {
    ordenados = femaleathletes.sort((a, b) => a.name.localeCompare(b.name));
    renderAthlete(ordenados);
  } else if (e.target.value === "Z-A") {
    ordenados = femaleathletes.sort((a, b) => b.name.localeCompare(a.name));
    renderAthlete(ordenados);
  }
});


// *** Medallas ***

const medals = document.querySelector("#medals");
medals.addEventListener("change", (e) => {
  let premiados = [];

  if (e.target.value === "Gold") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Gold");
    renderAthlete(premiados);
    
  } else if (e.target.value === "Silver") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Silver");
    renderAthlete(premiados);

  } else if (e.target.value === "Bronze") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Bronze");
    renderAthlete(premiados);
  }
});

// *** País ***

const team = document.querySelector("#team");
team.addEventListener("change", (e) => {
  let equipo = femaleathletes.filter((atleta) => atleta.team === "Argentina");
  renderAthlete(equipo);

});

// *** Deporte ***

const sport = document.querySelector("#sport");
sport.addEventListener("change", (e) => {
  let deporte = femaleathletes.filter((atleta) => atleta.sport === "Volleyball");
  renderAthlete(deporte);
});




//   if (e.target.value === "A-Z") {
//     ordenados = femaleathletes.sort((a, b) =>
//       a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
//     );
//     renderAthlete(ordenados);
//   } else if (e.target.value === "Z-A") {
//     ordenados = femaleathletes.sort((a, b) => {
//       if (a.name.toLowerCase() < b.name.toLowerCase()) {
//         return 1;
//       } else {
//         return -1;
//       }
//     });
//     renderAthlete(ordenados);
//   }

// ;


function renderAthlete(atletas) {
  const containerAthletes = document.querySelector("#allAthletes");
  containerAthletes.innerHTML = "";
  atletas.forEach((atleta) => {
    const athleteCard = document.createElement("div");
    athleteCard.className = "athlete";
    athleteCard.innerHTML += `
              <img src="${"images/Niña.jpeg"}" alt="">
              <ul>
                  <p>Nombre: ${atleta.name}</p>
                  <p>País: ${atleta.team}</p>
                  <p>Deporte: ${atleta.sport}</p>
                  <p>Medalla: ${atleta.medal}</p>
              </ul>
          `;
    containerAthletes.appendChild(athleteCard);
  });
}
