/**
 * Obtiene el String de una carta
 * @param {String} carta Ejemplo: 7H
 * @returns {Number} Regresa el valor de una carta normal o especial
 */
export const valorCarta = (carta) => {

  if(!carta) throw new Error("No se ha proporcionado la carta");

  let valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 10 : 11) : valor * 1;
};
