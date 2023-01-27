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

  const renderTwoHeroes = (hero1, hero2) => {
    if (!hero1 || !hero2) throw new Error("hero1 and hero2 are required");

    elemento.innerHTML = `
      <h2>Heroes:</h2>
      <p>${hero1.name} / ${hero2.name}</p>
    `;
  };

  const renderError = (error) => {
    elemento.innerHTML = `
      <h2>Error:</h2>
      <p>${error}</p>
    `;
  };

  // consumiendo la promesa
  const hero1 = "5d86371fd55e2e2a30fe1ccb2";
  const hero2 = "5d86371fd55e2e2a30fe1cc3";

  // Forma 1:
  // findHero(hero1)
  //   .then((_hero1) => {
  //     // then() recibe una función que se ejecuta cuando la promesa se resuelve
  //     // renderHero(_hero1);
  //     findHero(hero2)
  //       .then((_hero2) => {
  //         renderTwoHeroes(_hero1, _hero2);
  //       })
  //       .catch((error) => {
  //         renderError(error);
  //       });
  //   })
  //   .catch((error) => {
  //     // catch() recibe una función que se ejecuta cuando la promesa se rechaza "fallo"
  //     renderError(error);
  //   });

  // De forma más limpia puede quedar así:
  // findHero(hero1)
  // .then(renderHero)
  // .catch(renderError);
  // Esto sucede por que los callbacks de then y catch reciben la misma cantidad de argumentos que como los parametros del callback

  // Forma 2: Promise All - Permite ejecutar más de 1 promesa siempre y cuando una no dependa de la otra
  Promise.all([findHero(hero1), findHero(hero2)])
    .then(([hero1, hero2]) => {
      renderTwoHeroes(hero1, hero2);
    })
    .catch((error) => renderError(error));
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
