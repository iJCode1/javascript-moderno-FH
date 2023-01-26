import { heroes } from "../data/heroes";

let elemento;
/**
 * Promesa que resuelve la búsqueda de un heroe
 * @param {String} elementoId
 */
export const promiseComponent = (elementoId) => {
  if (!elemento) elemento = document.querySelector(elementoId);
  if (!elemento) throw new Error("elementoId is required");

  const renderHero = (hero) => {
    elemento.textContent = hero.name;
  };

  const renderError = (error) => {
    elemento.innerHTML = `
      <h2>Error:</h2>
      <p>${error}</p>
    `;
  };

  // consumiendo la promesa
  const hero1 = "5d86371fd55e2e2a30fe1ccb2";

  findHero(hero1)
    .then((hero) => {
      // then() recibe una función que se ejecuta cuando la promesa se resuelve
      renderHero(hero);
    })
    .catch((error) => {
      // catch() recibe una función que se ejecuta cuando la promesa se rechaza "fallo"
      renderError(error);
    });

  // De forma más limpia puede quedar así:
  // findHero(hero1)
  // .then(renderHero)
  // .catch(renderError);
  // Esto sucede por que los callbacks de then y catch reciben la misma cantidad de argumentos que como los parametros del callback
};

/**
 *
 * @param {String} heroId
 * @returns {Promise<Object>}
 */
const findHero = (heroId) => {
  return new Promise((resolve, reject) => {
    if (!heroId) {
      reject("idHero is required");
      return;
    }

    const heroData = heroes.find((hero) => hero.id === heroId);

    if (!heroData) {
      reject(`Hero with the id: ${heroId} not found`);
      return;
    }

    resolve(heroData);
  });
};
