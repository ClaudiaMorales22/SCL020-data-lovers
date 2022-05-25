import{renderAthlete, ordenadosAZ, ordenadosZA, filtroTeam, filtroDeporte, filtroMedallas, busqueda, getFemaleAthletes} from '../src/data.js';
const data = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {
      "name": "Chantal Achterberg",
      "gender": "F",
      "height": "172",
      "weight": "72",
      "sport": "Rowing",
      "team": "Netherlands",
      "noc": "NED",
      "age": 31,
      "event": "Rowing Women's Quadruple Sculls",
      "medal": "Silver"
    },
    {
      "name": "Nicola Virginia Adams",
      "gender": "F",
      "height": "164",
      "weight": "51",
      "sport": "Boxing",
      "team": "Great Britain",
      "noc": "GBR",
      "age": 33,
      "event": "Boxing Women's Flyweight",
      "medal": "Gold"
    },
    {
      "name": "Rachael Alexis Adams",
      "gender": "F",
      "height": "188",
      "weight": "81",
      "sport": "Volleyball",
      "team": "United States",
      "noc": "USA",
      "age": 26,
      "event": "Volleyball Women's Volleyball",
      "medal": "Bronze"
    }
   ]

   describe('Funcion femaleathletes deberia filtrar y devolvernos solo las atletas femeninas', () => {
    it('is a function', () => {
      expect(typeof getFemaleAthletes).toBe('function');
    });
  
    it('Deberia filtrar y devolvernos solo las atletas femeninas', () => {
      let athleteFem = getFemaleAthletes (data, "F");
      expect(athleteFem[3].name).toBe('Chantal Achterberg');
      expect(athleteFem[2].name).toBe('Nicola Virginia Adams');
      expect(athleteFem[1].name).toBe('Patimat Abakarova');
      expect(athleteFem[0].name).toBe('Rachael Alexis Adams');
    });
  });

   //test orden alfabetico A-Z
  describe('Funcion ordenadosAZ ordena alfabéticamente desde la A a la Z', () => {
  it('is a function', () => {
    expect(typeof ordenadosAZ).toBe('function');
  });

  it('Debería retornar los nombres de los atletas ordenados de la A-Z', () => {

    let orderAz = ordenadosAZ (data);

    expect(orderAz[0].name).toBe('Chantal Achterberg');
    expect(orderAz[1].name).toBe('Giovanni Abagnale');
    expect(orderAz[2].name).toBe('Nicola Virginia Adams');
    expect(orderAz[3].name).toBe('Patimat Abakarova');
    expect(orderAz[4].name).toBe('Rachael Alexis Adams');

  });
});

//test orden alfabetico Z-A
describe('Funcion ordenadosZA ordena alfabéticamente desde la Z a la A', () => {
  it('is a function', () => {
    expect(typeof ordenadosZA).toBe('function');
  });

  it('Debería retornar los nombres de los atletas ordenados de la Z a la A', () => {

    let orderZA = ordenadosZA (data);

    expect(orderZA[0].name).toBe('Rachael Alexis Adams');
    expect(orderZA[1].name).toBe('Patimat Abakarova');
    expect(orderZA[2].name).toBe('Nicola Virginia Adams');
    expect(orderZA[3].name).toBe('Giovanni Abagnale');
    expect(orderZA[4].name).toBe('Chantal Achterberg');

  });
});

describe('Funcion filtroTeam filtra las atletas de acuerdo al país seleccionado', () => {
  it('is a function', () => {
    expect(typeof filtroTeam).toBe('function');
  });

  it('Debería retornar las atletas del país seleccionado', () => {
    let athletasTeam = filtroTeam (data, "Netherlands");
        expect(athletasTeam[0].name).toBe('Chantal Achterberg');
   });
});

describe('Funcion filtroDeporte filtra las atletas de acuerdo al Deporte seleccionado', () => {
  it('is a function', () => {
    expect(typeof filtroDeporte).toBe('function');
  });

  it('Debería retornar las atletas del deporte seleccionado', () => {
    let athletasSport = filtroDeporte (data, "Taekwondo");
        expect(athletasSport[0].name).toBe('Patimat Abakarova');
   });
});

describe('Funcion filtroMedallas filtra las atletas de acuerdo a la medalla seleccionada', () => {
  it('is a function', () => {
    expect(typeof filtroMedallas).toBe('function');
  });

  it('Debería retornar las atletas de la medalla seleccionada', () => {
    let athletasMedal = filtroMedallas (data, "Bronze");
        expect(athletasMedal[0].name).toBe('Rachael Alexis Adams');
   });
});

describe('Funcion busqueda filtra las atletas de acuerdo a la busqueda realizada por el usuario', () => {
  it('is a function', () => {
    expect(typeof busqueda).toBe('function');
  });

  it('Deberia filtrar las atletas de acuerdo a la busqueda realizada por el usuario', () => {
    let athletasSearch = busqueda (data, "R");
        expect(athletasSearch[0].name).toBe('Rachael Alexis Adams');
   });
});




describe('Funcion retorna elemento HTML ', () => {
  it('is a function', () => {
    expect(typeof renderAthlete).toBe('function');
  });

  it('Debería retornar los atletas filtrados', () => {
    let container = renderAthlete(data)
        expect(container instanceof HTMLElement).toBe(true);
   });
});


  