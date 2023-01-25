import { heroes } from "../data/heroes";

let element;

/**
 *
 * @param {String} elementId
 */
export const callbackComponent = (elementId) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error("elementId is required");

  const hero1 = "5d86371fd55e2e2a30fe1ccb2";
  const hero2 = "5d86371fd55e2e2a30fe1ccb";

  findHero(hero1, (error, _hero1) => {
    // element.textContent = _hero1?.name || "undefined";

    if (error) {
      element.textContent = error;
      return;
    }
    // Callback Hell
    findHero(hero2, (error, _hero2) => {
      if (error) {
        element.textContent = error;
        return;
      }
      element.textContent = `${_hero1.name} / ${_hero2.name}`;
    });
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
