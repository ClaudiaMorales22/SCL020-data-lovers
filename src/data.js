export const getFemaleAthletes = (data) => {
    const athletes = data.athletes;
    const femaleathletes = athletes.filter(person => person.gender === 'F');
  data.forEach(femaleathletes);
};


export const femaleteam = (femaleathletes, valor) => {
  const femaleTeam = femaleathletes.filter(person => (person.team === valor || valor === 'All'));
  return femaleTeam ;
};

