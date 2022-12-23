(() => {
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
    deck = crearDeck();
  };

  const crearDeck = () => {
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

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay más cartas";
    }
    return deck.shift();
  };

  const valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 10 : 11) : valor * 1;
  };

  const crearCartaHTML = (divCard, carta) => {
    const $cartaImage = document.createElement("img");
    $cartaImage.classList.add("card-image");
    $cartaImage.setAttribute("src", `./assets/cartas/${carta}.png`);
    $divCards[divCard].append($cartaImage);
  };

  const asignarPuntos = (jugador, puntos) => {
    puntosJugadores[jugador] += puntos;
  };

  const turnoComputadora = (minPoints) => {
    do {
      const carta = pedirCarta();

      crearCartaHTML($divCards.length - 1, carta);

      asignarPuntos(puntosJugadores.length - 1, valorCarta(carta));

      $spanScores[$spanScores.length - 1].textContent =
        puntosJugadores[puntosJugadores.length - 1];

      if (minPoints > 21) {
        break;
      }
    } while (
      puntosJugadores[puntosJugadores.length - 1] < minPoints &&
      minPoints < 21
    );

    setTimeout(() => {
      mostrarMensajeFinal();
    }, 100);
  };

  const mostrarMensajeFinal = () => {
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
    const carta = pedirCarta();

    asignarPuntos(0, valorCarta(carta));
    $spanScores[0].textContent = puntosJugadores[0];

    crearCartaHTML(0, carta);

    if (puntosJugadores[0] > 21) {
      $btnRequest.disabled = true;
      $btnStop.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    } else if (puntosJugadores[0] === 21) {
      $btnRequest.disabled = true;
      $btnStop.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    }
  });

  $btnStop.addEventListener("click", () => {
    $btnRequest.disabled = true;
    $btnStop.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  $btnNew.addEventListener("click", () => {
    inicializarJuego();
  });
})();
