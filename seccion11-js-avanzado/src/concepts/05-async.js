import { heroes } from "../data/heroes";

let elemento;

/**
 *
 * @param {String} elementId
 */
export const asyncComponent = (elementId) => {
  if (!elemento) elemento = document.querySelector(elementId);
  if (!elemento) throw new Error("elementId is required");

  const heroe1 = "5d86371f1efebc31def272e2";

  const renderValue = (elemento, value) => {
    elemento.innerHTML = `<p>${value}</p>`;
  };

  const renderError = (elemento, error) => {
    elemento.innerHTML = `<p>${error}</p>`;
  };

  findHeroeById(heroe1)
    .then(({ name }) => renderValue(elemento, name))
    .catch((err) => renderError(elemento, err));
  // renderValue(elemento, hero);
};

/**
 * Funcuón asincrona que busca un heroe por id
 * @param {String} id Es el id del heroe
 * @returns {Promise<String>}
 */
const findHeroeById = async (id) => {
  const heroe = heroes.find((heroe) => heroe.id === id);

  if (!heroe) throw new Error(`Heroe with id:${id} not found`);
  console.log("Wiii");
  // return heroe?.name;
  return heroe;
};
