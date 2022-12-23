(() => {
  "use strict";
  let deck = [];
  const tipoCartas = ["C", "D", "H", "S"];
  const cartasEspeciales = ["A", "J", "K", "Q"];

  const $btnRequest = document.getElementById("btnRequest");
  const $btnStop = document.getElementById("btnStop");
  const $btnNew = document.getElementById("btnNew");

  const $playerScore = document.querySelector(".player-cards span");
  const $computerScore = document.querySelector(".computer-cards span");

  const $playerCharts = document.getElementById("player-charts");
  const $computer_charts = document.getElementById("computer-charts");

  let puntosJugador = 0;
  let puntosComputadora = 0;

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

    deck = _.shuffle(deck);

    return deck;
  };

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay más cartas";
    }
    const carta = deck.shift();
    return carta;
  };

  const valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 10 : 11) : valor * 1;
  };

  const turnoComputadora = (minPoints) => {
    do {
      const carta = pedirCarta();
      puntosComputadora += valorCarta(carta);

      const $cartaImage = document.createElement("img");
      $cartaImage.classList.add("card-image");
      $cartaImage.setAttribute("src", `./assets/cartas/${carta}.png`);
      $computer_charts.append($cartaImage);

      $computerScore.textContent = puntosComputadora;

      if (minPoints > 21) {
        break;
      }
    } while (puntosComputadora < minPoints && minPoints < 21);

    setTimeout(() => {
      mostrarMensajeFinal();
    }, 100);
  };

  const mostrarMensajeFinal = () => {
    if (
      (puntosJugador === 21 && puntosComputadora < 21) ||
      (puntosJugador <= 21 && puntosComputadora > 21)
    ) {
      alert("Felicidades, has ganado!!!");
    } else if (
      (puntosJugador <= 21 && puntosComputadora === 21) ||
      (puntosJugador <= 21 &&
        puntosComputadora > puntosJugador &&
        puntosComputadora <= 21) ||
      (puntosJugador >= 21 && puntosComputadora <= 21)
    ) {
      alert("Lo lamento, la computadora ha ganado.");
    } else {
      alert("Hay un empate, nadie ha ganado...");
    }
  };

  const limpiarJuego = () => {
    deck = [];
    crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    $playerScore.textContent = puntosJugador;
    $computerScore.textContent = puntosComputadora;

    $playerCharts.innerHTML = "";
    $computer_charts.innerHTML = "";
    $btnRequest.disabled = false;
    $btnStop.disabled = false;
  };

  crearDeck();

  // Eventos
  $btnRequest.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    $playerScore.textContent = puntosJugador;

    const $cartaImage = document.createElement("img");
    $cartaImage.classList.add("card-image");
    $cartaImage.setAttribute("src", `./assets/cartas/${carta}.png`);
    $playerCharts.append($cartaImage);

    if (puntosJugador > 21) {
      $btnRequest.disabled = true;
      $btnStop.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      $btnRequest.disabled = true;
      $btnStop.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  $btnStop.addEventListener("click", () => {
    $btnRequest.disabled = true;
    $btnStop.disabled = true;
    turnoComputadora(puntosJugador);
  });

  $btnNew.addEventListener("click", () => {
    limpiarJuego();
  });
})();
