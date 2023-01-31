import { heroes } from "../data/heroes";

let elemento;

/**
 * @param {String} elementId
 */
export const asyncAwaitComponent = async (elementId) => {
  if (!elemento) elemento = document.querySelector(elementId);
  if (!elemento) throw new Error("elementId is required");

  try {
    const heroe1_id = "5d86371f2343e37870b91ef1";
    const heroe2_id = "5d86371f233c9f2425f16916";
    const heroe1 = await findHeroeById(heroe1_id);
    const heroe2 = await findHeroeById(heroe2_id);

    elemento.innerHTML = `${heroe1.name} / ${heroe2.name}`;
  } catch (err) {
    elemento.innerHTML = `<p>${err}</p>`;
  }
};

/**
 * Busca al heroe en la lista de heroes a partir de su id
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHeroeById = async (id) => {
  const heroe = heroes.find((heroe) => heroe.id === id);

  if (!heroe) throw new Error(`Heroe with id:${id} not found`);

  return heroe;
};
