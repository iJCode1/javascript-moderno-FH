import { crearDeck, pedirCarta, valorCarta, crearCartaHTML, turnoComputadora, asignarPuntos } from "./usecases";

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipoCartas = ["C", "D", "H", "S"],
    cartasEspeciales = ["A", "J", "K", "Q"];

  const $btnRequest = document.getElementById("btnRequest"),
    $btnStop = document.getElementById("btnStop"),
    $btnNew = document.getElementById("btnNew");

  const $spanScores = document.querySelectorAll("main span");

  const $divCards = document.querySelectorAll(".divCards");

  let puntosJugadores = [];

  const inicializarJuego = (numJugadores = 2) => {
    limpiarJuego();

    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    deck = [];
    deck = crearDeck(tipoCartas, cartasEspeciales);
  };

  const limpiarJuego = () => {
    puntosJugadores = [];

    $spanScores[0].textContent = 0;
    $spanScores[$spanScores.length - 1].textContent = 0;

    for (const div of $divCards) {
      div.innerHTML = "";
    }
    $btnRequest.disabled = false;
    $btnStop.disabled = false;
  };

  // Eventos
  $btnRequest.addEventListener("click", () => {
    const carta = pedirCarta(deck);

    asignarPuntos(puntosJugadores, 0, valorCarta(carta));
    $spanScores[0].textContent = puntosJugadores[0];

    crearCartaHTML($divCards, 0, carta);

    if (puntosJugadores[0] > 21) {
      $btnRequest.disabled = true;
      $btnStop.disabled = true;
      turnoComputadora(puntosJugadores, $spanScores, puntosJugadores[0], deck);
    } else if (puntosJugadores[0] === 21) {
      $btnRequest.disabled = true;
      $btnStop.disabled = true;
      turnoComputadora(puntosJugadores, $spanScores, puntosJugadores[0], deck);
    }
  });

  $btnStop.addEventListener("click", () => {
    $btnRequest.disabled = true;
    $btnStop.disabled = true;
    turnoComputadora(puntosJugadores, $spanScores, puntosJugadores[0], deck);
  });

  $btnNew.addEventListener("click", () => {
    inicializarJuego();
  });

  // Exportar algo del módulo
  return {
    comenzarJuego: inicializarJuego,
  };
})();