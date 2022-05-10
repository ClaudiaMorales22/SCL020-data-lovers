import data from './data/athletes/athletes.js';
import { femaleteam } from './data.js';

const athletes = data.athletes;
const femaleathletes = athletes.filter(person => person.gender === 'F')

document.addEventListener('DOMContentLoaded', () => {
    const femaleathletesContainer = document.querySelector('#allAthletes');
    for (let i=0; i<femaleathletes.length; i++){
        const athleteCard = document.createElement('div')
        athleteCard.className = 'athlete'
          athleteCard.innerHTML += `
              <img src="${('images/Niña.jpeg')}" alt="">
                  <p>Nombre: ${femaleathletes[i].name}</p>
                  <p>País: ${femaleathletes[i].team}</p>
                  <p>Deporte: ${femaleathletes[i].sport}</p>
                  <p>Medalla: ${femaleathletes[i].medal}</p>
          `;
          femaleathletesContainer.appendChild(athleteCard);
    }   
  });
  