import data from "./data/athletes/athletes.js";
import { getFemaleAthletes } from "./data.js";

let total = document.querySelector(".filter-button");
const athletes = data.athletes;

const femaleathletes = athletes.filter((person) => person.gender === "F");

const femaleathletesContainer = document.querySelector("#allAthletes");
total.textContent = femaleathletes.length;

document.addEventListener("DOMContentLoaded", () => {
  
  for (let i = 0; i < femaleathletes.length; i++) {
    const athleteCard = document.createElement("div");
    athleteCard.className = "athlete";
    athleteCard.innerHTML += `
              <img src="${"images/Niña.jpeg"}" alt="">
                  <p>Nombre: ${femaleathletes[i].name}</p>
                  <p>País: ${femaleathletes[i].team}</p>
                  <p>Deporte: ${femaleathletes[i].sport}</p>
                  <p>Medalla: ${femaleathletes[i].medal}</p>
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
total.textContent = matchedAthletes.length;
});

// *** Ordenar ***


const ordenar = document.querySelector("#sort");
ordenar.addEventListener("change", (e) => {
  let ordenados = [];
  
  if (e.target.value === "A-Z") {
    ordenados = ordenadaAZ;
    renderAthlete(ordenados);
    console.log(ordenados.length);
    total.textContent = ordenados.length;
  } else if (e.target.value === "Z-A") {
    ordenados = femaleathletes.sort((a, b) => b.name.localeCompare(a.name));
    total.textContent = ordenados.length;
    renderAthlete(ordenados);
  }
});


// *** Medallas ***

const medals = document.querySelector("#medals");
medals.addEventListener("change", (e) => {
  let premiados = [];

  if (e.target.value === "Gold") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Gold");
    total.textContent = premiados.length;
    renderAthlete(premiados);
    
  } else if (e.target.value === "Silver") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Silver");
    total.textContent = premiados.length;
    renderAthlete(premiados);

  } else if (e.target.value === "Bronze") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Bronze");
    total.textContent = premiados.length;
    renderAthlete(premiados);
  }
});

// *** País ***

const team = document.querySelector("#team");
team.addEventListener("change", (e) => {
  let equipo = femaleathletes.filter((atleta) => atleta.team === "Argentina");
  total.textContent = equipo.length;
  renderAthlete(equipo);

});

// *** Deporte ***

const sport = document.querySelector("#sport");
sport.addEventListener("change", (e) => {
  let deporte = femaleathletes.filter((atleta) => atleta.sport === "Volleyball");
  total.textContent = deporte.length;
  renderAthlete(deporte);
});



function renderAthlete(atletas) {
  const containerAthletes = document.querySelector("#allAthletes");
  containerAthletes.innerHTML = "";
  atletas.forEach((atleta) => {
    const athleteCard = document.createElement("div");
    athleteCard.className = "athlete";
    athleteCard.innerHTML += `
              <img src="${"images/Niña.jpeg"}" alt="">
              
                  <p>Nombre: ${atleta.name}</p>
                  <p>País: ${atleta.team}</p>
                  <p>Deporte: ${atleta.sport}</p>
                  <p>Medalla: ${atleta.medal}</p>
              
          `;
    containerAthletes.appendChild(athleteCard);
  });
}



//select

//team de atletas mujeres
const teamAthletes = femaleathletes.map(({team})=>team);
//console.log(teamAthletes);

//elimina teams repetidos
const ultimateTeam = teamAthletes.filter((item,index)=>{
  return teamAthletes.indexOf(item) === index;
  })
  //console.log(ultimateTeam);

  //ordenar team
  let sortTeam = ultimateTeam.sort();

  //agregar teams al select

 function loadTeam() {
  let team = ultimateTeam; //Tu array de teams
  let select = document.getElementById("team"); //Seleccionamos el select
  
  for(var i=0; i < team.length; i++){ 
      let option = document.createElement("option"); //Creamos la opcion
      option.innerHTML = team[i]; //Metemos el texto en la opción
      select.appendChild(option); //Metemos la opción en el select
  }
}
loadTeam();

//mostrar data filtrada por team