import { heroes } from "../data/heroes";

let element;

/**
 *
 * @param {String} elementId
 */
export const callbackComponent = (elementId) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error("elementId is required");

  findHero("5d86371fd55e2e2a30fe1ccb2", (error, hero) => {
    // element.textContent = hero?.name || "undefined";

    if (error) {
      element.textContent = error;
      return;
    }

    element.textContent = hero.name;
  });
};

/**
 *
 * @param {HTMLElement} idHero
 * @param {(error: String | Null, hero: Object) => void} callback
 */
const findHero = (idHero, callback) => {
  if (!idHero) throw new Error("idHero is required");

  const heroData = heroes.find((hero) => hero.id === idHero);

  if (!heroData) {
    callback(`Hero with the id ${idHero} not found`);
    return;
  }

  callback(null, heroData);
};
