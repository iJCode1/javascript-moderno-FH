/**
 * Obtiene el deck de cartas
 * @param {Array<String>} deck 
 * @returns {String} Regresa la primer carta del deck y la elimina del mismo
 */
export const pedirCarta = ( deck ) => {

  if (!deck || deck.length === 0) {
    throw new Error("No hay más cartas");
  }
  return deck.shift();
};