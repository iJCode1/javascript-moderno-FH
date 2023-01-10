/**
 * Asignar puntos a un detemrinado jugador
 * @param {Array} puntosJugadores 
 * @param {Number} jugador 
 * @param {Number} puntos 
 */
export const asignarPuntos = (puntosJugadores, jugador, puntos) => {
  puntosJugadores[jugador] += puntos;
};
