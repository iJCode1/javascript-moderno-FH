let elemento;
/**
 *
 * @param {String} elementoId
 */
export const promiseRaceComponent = (elementoId) => {
  if (!elemento) elemento = document.querySelector(elementoId);
  if (!elemento) throw new Error("elementoId is required");

  const renderValue = (value) => {
    elemento.innerHTML = value;
  };

  elemento.innerHTML = "Cargando...";

  // Promise.race: recibe un array de promesas y devuelve la primera que se resuelva
  Promise.race([slowPromise, fastPromise, mediumPromise]).then((resolve) => {
    renderValue(resolve);
  });
};

const slowPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("slowPromise");
  }, 2000);
});

const mediumPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("mediumPromise");
  }, 1500);
});

const fastPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("fastPromise");
  }, 1000);
});
