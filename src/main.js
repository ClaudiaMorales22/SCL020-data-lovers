
import { renderAthlete,  getFemaleAthletes, ordenadosAZ, ordenadosZA, filtroTeam, filtroMedallas, filtroDeporte, clean, busqueda, athletes} from "./data.js";


let total = document.querySelector(".filter-button");
//const athletes = data.athletes;

const femaleathletes = getFemaleAthletes(athletes);

document.addEventListener("DOMContentLoaded", () => {
  renderAthlete(femaleathletes)
  total.textContent = femaleathletes.length;
});

// * Búsqueda *
const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", (event) => {
  let textoBuscado = event.target.value;
  let matchedAthletes = busqueda(femaleathletes, textoBuscado)
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

// * Medalla *
const medals = document.querySelector("#medals");
medals.addEventListener("change", (e) => {
  let medalName = e.target.value;
  let premiados = filtroMedallas(femaleathletes, medalName)
  renderAthlete(premiados);
  total.textContent = premiados.length;
});
 
// * País *
const team = document.querySelector("#team");
team.addEventListener("change", (e) => {
  let teamName = e.target.value; 
  let equipo = filtroTeam(femaleathletes, teamName)
    renderAthlete(equipo);
  total.textContent = equipo.length;
  
});

// * Deporte *

const sport = document.querySelector("#sport");
sport.addEventListener("change", (e) => {
  let sportName = e.target.value; 
  let deporte = filtroDeporte(femaleathletes, sportName)
  total.textContent = deporte.length;
  renderAthlete(deporte);
});

// * Limpiar *

document.getElementById("limpiar").addEventListener("click", function(){ 
  clean(renderAthlete)
  total.textContent = femaleathletes.length;
});


// ***** Tarjetas ***** 

// // // function renderAthlete(atletas) {
// // //    = document.createElement("div");
  
const containerAthletes = document.querySelector("#allAthletes");
const cards = renderAthlete (femaleathletes);
//   // containerAthletes.innerHTML = "";
//   atletas.forEach((atleta) => {
//     const athleteCard = document.createElement("div");
//     athleteCard.className = "athlete";
//     athleteCard.style.fontFamily = 'Arial'
//     athleteCard.innerHTML += `
//               <img src="${"images/Niña.jpeg"}" alt="">
//                   <p>Nombre: ${atleta.name}</p>
//                   <p>País: ${atleta.team}</p>
//                   <p>Deporte: ${atleta.sport}</p>
//                   <p>Medalla: ${atleta.medal}</p>
              
//           `;
  containerAthletes.appendChild(cards);

// }
// const athleteCard = document.createElement("div");
// athleteCard.addEventListener("click", () => { 
//   renderAthleteDetails
// });

// function renderAthleteDetails(atletas) {
//   const containerAthletes2 = document.querySelector('.headModal');
//   containerAthletes2.innerHTML = "";
//   atletas.forEach((atleta) => {
//     const athleteCard2 = document.createElement("div");
//     athleteCard2.className = "athlete";
//     athleteCard2.style.fontFamily = 'Arial'
//     athleteCard2.innerHTML += `
//               <img src="${"images/Niña.jpeg"}" alt="">
              
//                   <p>Nombre: ${atleta.name}</p>
//                   <p>País: ${atleta.team}</p>
//                   <p>Deporte: ${atleta.sport}</p>
//                   <p>Medalla: ${atleta.medal}</p>
//                   <p>Edad: ${atleta.age}</p>
//                   <p>Estatura: ${atleta.height}</p>
//                   <p>Peso: ${atleta.weight}</p>
//                   <p>Evento: ${atleta.event}</p>
//                   <p>Noc: ${atleta.noc}</p>
//           `;
//     containerAthletes2.appendChild(athleteCard2);
//   });
// }


//select Países

//team de atletas mujeres
const teamAthletes = femaleathletes.map(({team})=>team);

//elimina teams repetidos
const ultimateTeam = teamAthletes.filter((item,index)=>{
  return teamAthletes.indexOf(item) === index;
  })

  //ordenar team
  ultimateTeam.sort();

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
ultimateSport.sort();

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

//select Medals

// atletas mujeres por medallas
const medalAthletes = femaleathletes.map(({medal})=>medal);


//elimina sport repetidos
const ultimateMedal = medalAthletes.filter((item,index)=>{
  return medalAthletes.indexOf(item) === index;
  })

  //ordenar sport
ultimateMedal.sort();

  //agregar sport al select

 function loadmedal() {
  let medal = ultimateMedal; //Tu array de sport
  let select = document.getElementById("medals"); //Seleccionamos el select
  
  for(var i=0; i < medal.length; i++){ 
      let option = document.createElement("option"); //Creamos la opcion
      option.setAttribute('value', medal[i])
      option.innerHTML =medal[i]; //Metemos el texto en la opción
      select.appendChild(option); //Metemos la opción en el select
  }
}
loadmedal();

