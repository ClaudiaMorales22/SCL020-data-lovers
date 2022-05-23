import{renderAthlete} from '../src/main.js';
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

     describe('Funcion retorna ', () => {
        it('is a function', () => {
          expect(typeof renderAthlete).toBe('function');
        });
      
        it('Debería retornar los atletas filtrados', () => {
          let container = renderAthlete(data)
              expect(container instanceof HTMLElement).toBe(true);
         });
      });

      