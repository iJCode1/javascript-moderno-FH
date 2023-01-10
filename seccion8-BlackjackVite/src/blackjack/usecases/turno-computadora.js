import { asignarPuntos, crearCartaHTML, mostrarMensajeFinal, pedirCarta, valorCarta } from ".";
/**
 * 
 * @param {Array} puntosJugadores
 * @param {HTMLElement} spanScores 
 * @param {Number} minPoints 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosJugadores, spanScores, minPoints, deck, ) => {
  do {
    const carta = pedirCarta(deck);
    const $divCards = document.querySelectorAll(".divCards");

    crearCartaHTML($divCards, $divCards.length - 1, carta);

    asignarPuntos(puntosJugadores, puntosJugadores.length - 1, valorCarta(carta));

    spanScores[spanScores.length - 1].textContent =
      puntosJugadores[puntosJugadores.length - 1];

    if (minPoints > 21) {
      break;
    }
  } while (
    puntosJugadores[puntosJugadores.length - 1] < minPoints &&
    minPoints < 21
  );

  setTimeout(() => {
    mostrarMensajeFinal(puntosJugadores);
  }, 100);
};