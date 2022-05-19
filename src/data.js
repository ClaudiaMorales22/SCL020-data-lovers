//import data from "./data/athletes/athletes.js";
export const getFemaleAthletes = (data) => {
  const athletes = data.athletes;
  const femaleathletes = athletes.filter((person) => person.gender === "F");

  return femaleathletes
};

 
export const ordenadosAZ = (femaleathletes) => femaleathletes.sort((a, b) => a.name.localeCompare(b.name));

export const ordenadosZA = (femaleathletes) => femaleathletes.sort((a, b) => b.name.localeCompare(a.name));


export const filtroMedallas = (femaleathletes, e) => {

  let premiados = [];

  if (e.target.value === "Gold") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Gold");
    
  } else if (e.target.value === "Silver") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Silver");

  } else if (e.target.value === "Bronze") {
    premiados = femaleathletes.filter((atleta) => atleta.medal === "Bronze");
  }

  return premiados
}

export const filtroTeam = (femaleathletes, e) => {
  return femaleathletes.filter((atleta) => atleta.team === e.target.value);
}

export const filtroDeporte = (femaleathletes, e) => {
  return femaleathletes.filter((atleta) => atleta.sport === e.target.value);
}




