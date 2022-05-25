import data from "./data/athletes/athletes.js";

export const athletes = data.athletes;

export const getFemaleAthletes = (athletes) => {
  const femaleathletes = athletes.filter((person) => person.gender === "F");
  return femaleathletes;
}

export const ordenadosAZ = (femaleathletes) => femaleathletes.sort((a, b) => a.name.localeCompare(b.name));

export const ordenadosZA = (femaleathletes) => femaleathletes.sort((a, b) => b.name.localeCompare(a.name));


export const filtroMedallas = (femaleathletes, medalName) => {
  return femaleathletes.filter((atleta) => atleta.medal === medalName);
}

export const busqueda = (femaleathletes, textoBuscado) => {
  const search = femaleathletes.filter(el => el.name.toLowerCase().includes(textoBuscado.toLowerCase()));
  return search;
}

export const filtroTeam = (femaleathletes, teamName) => {
  return femaleathletes.filter((atleta) => atleta.team === teamName);
}

export const filtroDeporte = (femaleathletes, sportName) => {
  return femaleathletes.filter((atleta) => atleta.sport === sportName);
}

export function renderAthlete(atletas) {
  const containerAthletes = document.createElement("div");
  containerAthletes. className = "containerAthlete"
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
  return containerAthletes;
}
