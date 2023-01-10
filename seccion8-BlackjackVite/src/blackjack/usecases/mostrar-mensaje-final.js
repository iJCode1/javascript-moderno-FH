/**
 * Muestra una alerta del jugador quien gano
 * @param {Array} puntosJugadores Array de jugadores
 */
export const mostrarMensajeFinal = (puntosJugadores) => {
  if (
    (puntosJugadores[0] === 21 &&
      puntosJugadores[puntosJugadores.length - 1] < 21) ||
    (puntosJugadores[0] <= 21 &&
      puntosJugadores[puntosJugadores.length - 1] > 21)
  ) {
    alert("Felicidades, has ganado!!!");
  } else if (
    (puntosJugadores[0] <= 21 &&
      puntosJugadores[puntosJugadores.length - 1] === 21) ||
    (puntosJugadores[0] <= 21 &&
      puntosJugadores[puntosJugadores.length - 1] > puntosJugadores[0] &&
      puntosJugadores[puntosJugadores.length - 1] <= 21) ||
    (puntosJugadores[0] >= 21 &&
      puntosJugadores[puntosJugadores.length - 1] <= 21)
  ) {
    alert("Lo lamento, la computadora ha ganado.");
  } else {
    alert("Hay un empate, nadie ha ganado...");
  }
};