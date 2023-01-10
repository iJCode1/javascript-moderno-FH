/**
 * Crea el HTML de una carta
 * @param {HTMLElement} divCards
 * @param {Number} index Posición del div
 * @param {String} carta 
 * @returns {HTMLImageElement} Elemento de imagen de retorno
 */
export const crearCartaHTML = (divCards, index, carta) => {

  if(!carta) throw new Error("Se requiere la carta a crear");

  const $cartaImage = document.createElement("img");
  $cartaImage.classList.add("card-image");
  $cartaImage.setAttribute("src", `./assets/cartas/${carta}.png`);
  divCards[index].append($cartaImage);
};