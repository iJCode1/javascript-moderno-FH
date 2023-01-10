import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>}  tipoCartas Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} cartasEspeciales Ejemplo: ["A", "J", "K", "Q"]
 * @returns {Array<String>} Regresa un nuevo deck
 */
export const crearDeck = (tipoCartas, cartasEspeciales) => {

  // Validaciones
  if(!tipoCartas || tipoCartas.length === 0) throw new Error("tipoCartas es necesario");
  if(!cartasEspeciales || cartasEspeciales.length === 0) throw new Error("cartasEspeciales es necesario");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (const tipoC of tipoCartas) {
      deck.push(`${i}${tipoC}`);
    }
  }

  for (const cartaE of cartasEspeciales) {
    for (const tipoC of tipoCartas) {
      deck.push(`${cartaE}${tipoC}`);
    }
  }
  return _.shuffle(deck);
};

// También se puede exportar por defecto
// export default crearDeck;