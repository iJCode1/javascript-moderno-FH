import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
  const div = document.querySelector(element);

  const idsList = heroes.map((hero) => hero.id);
  const heroPromises = getHeroesAsync(idsList);

  for await (const hero of heroPromises) {
    div.innerHTML += `<p>${hero.name}</p>`;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((hero) => hero.id === id);
};
