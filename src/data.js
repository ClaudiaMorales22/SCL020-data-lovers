export const getFemaleAthletes = (data) => {
    const athletes = data.athletes;
    const femaleathletes = athletes.filter(person => person.gender === 'F');
  data.forEach(femaleathletes);
};




