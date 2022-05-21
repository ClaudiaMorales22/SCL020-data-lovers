export const getFemaleAthletes = (data) => {
  const athletes = data.athletes;
  const femaleathletes = athletes.filter((person) => person.gender === "F");

  return femaleathletes
};

export const ordenadosAZ = (femaleathletes) => femaleathletes.sort((a, b) => a.name.localeCompare(b.name));

export const ordenadosZA = (femaleathletes) => femaleathletes.sort((a, b) => b.name.localeCompare(a.name));


export const filtroMedallas = (femaleathletes, medalName) => {
  return femaleathletes.filter((atleta) => atleta.medal === medalName);
}

export const busqueda = (femaleathletes, textoBuscado) => {
  const search = femaleathletes.filter(el => el.name.toLowerCase().includes(textoBuscado.toLowerCase()));
  return search;
};

export const filtroTeam = (femaleathletes, teamName) => {
  return femaleathletes.filter((atleta) => atleta.team === teamName);
}

export const filtroDeporte = (femaleathletes, sportName) => {
  return femaleathletes.filter((atleta) => atleta.sport === sportName);
}

export const clean = () => {
  document.querySelector("#sort").value = "" 
  document.querySelector("#team").value = ""
  document.querySelector("#medals").value = ""
  document.querySelector("#sport").value = ""
  return clean
};


