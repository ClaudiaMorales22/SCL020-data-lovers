import data from "./data/athletes/athletes.js";
import { getFemaleAthletes, ordenadosAZ, ordenadosZA, filtroTeam, filtroMedallas, filtroDeporte } from "./data.js";


let total = document.querySelector(".filter-button");
//const athletes = data.athletes;

const femaleathletes = getFemaleAthletes(data);




document.addEventListener("DOMContentLoaded", () => {
  renderAthlete(femaleathletes)
  total.textContent = femaleathletes.length;
});


// * Búsqueda *
const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", (event) => {
  let textoBuscado = event.target.value.toLowerCase();
  let matchedAthletes = femaleathletes.filter((atleta) => {
    return atleta.name.toLowerCase().includes(textoBuscado);
  });
renderAthlete(matchedAthletes);
total.textContent = matchedAthletes.length;
});


// * Ordenar *
const ordenar = document.querySelector("#sort");
ordenar.addEventListener("change", (e) => {
  let ordenados = [];
    if (e.target.value === "A-Z") {
    ordenados = ordenadosAZ(femaleathletes);
    
    total.textContent = ordenados.length;
    renderAthlete(ordenados);
    
   
  } else if (e.target.value === "Z-A") {
    ordenados = ordenadosZA(femaleathletes);
    total.textContent = ordenados.length;
    renderAthlete(ordenados);
  }
});


// * Medallas *
const medals = document.querySelector("#medals");
medals.addEventListener("change", (e) => {
  let premiados = filtroMedallas(femaleathletes, e)
  renderAthlete(premiados);
  total.textContent = premiados.length;
});
 

// * País *
const team = document.querySelector("#team");
team.addEventListener("change", (e) => {
  let equipo = filtroTeam(femaleathletes, e)
  renderAthlete(equipo);
  total.textContent = equipo.length;
  
});

// * Deporte *

const sport = document.querySelector("#sport");
sport.addEventListener("change", (e) => {
  let deporte = filtroDeporte(femaleathletes, e)
  total.textContent = deporte.length;
  renderAthlete(deporte);
});



function renderAthlete(atletas) {
  const containerAthletes = document.querySelector("#allAthletes");
  containerAthletes.innerHTML = "";
  atletas.forEach((atleta) => {
    const athleteCard = document.createElement("div");
    athleteCard.className = "athlete";
    athleteCard.style.fontFamily = 'Arial'
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



//select Países

//team de atletas mujeres
const teamAthletes = femaleathletes.map(({team})=>team);


//elimina teams repetidos
const ultimateTeam = teamAthletes.filter((item,index)=>{
  return teamAthletes.indexOf(item) === index;
  })

  //ordenar team
  let sortTeam = ultimateTeam.sort();

  //agregar teams al select

 function loadTeam() {
  let team = ultimateTeam; //Tu array de teams
  let select = document.getElementById("team"); //Seleccionamos el select
  
  for(var i=0; i < team.length; i++){ 
      let option = document.createElement("option"); //Creamos la opcion
      option.setAttribute('value', team[i])
      option.innerHTML = team[i]; //Metemos el texto en la opción
      select.appendChild(option); //Metemos la opción en el select
  }
}
loadTeam();




//select Sports

//team de atletas mujeres
const sportAthletes = femaleathletes.map(({sport})=>sport);


//elimina sport repetidos
const ultimateSport = sportAthletes.filter((item,index)=>{
  return sportAthletes.indexOf(item) === index;
  })

  //ordenar sport
  let sortSport = ultimateSport.sort();

  //agregar sport al select

 function loadSport() {
  let sport = ultimateSport; //Tu array de sport
  let select = document.getElementById("sport"); //Seleccionamos el select
  
  for(var i=0; i < sport.length; i++){ 
      let option = document.createElement("option"); //Creamos la opcion
      option.setAttribute('value', sport[i])
      option.innerHTML = sport[i]; //Metemos el texto en la opción
      select.appendChild(option); //Metemos la opción en el select
  }
}
loadSport();

document.getElementById("limpiar").addEventListener("click", function(){ 
      
  renderAthlete(femaleathletes)
  total.textContent = femaleathletes.length;
  document.querySelector("#sort").value = "" 
  document.querySelector("#team").value = ""
  document.querySelector("#medals").value = ""
  document.querySelector("#sport").value = ""
});