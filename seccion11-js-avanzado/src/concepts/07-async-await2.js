let elemento;
export const asyncAwait2Component = async (elementId) => {
  if (!elemento) elemento = document.querySelector(elementId);
  if (!elemento) throw new Error("elementId is required");

  const renderPromises = (p1, p2, p3) => {
    elemento.innerHTML = `
      <h3>Promesas</h3>
      <p>${p1}</p>
      <p>${p2}</p>
      <p>${p3}</p>
    `;
  };

  try {
    // console.time("async");
    // const promise1 = await slowPromise();
    // const promise2 = await mediumPromise();
    // const promise3 = await fastPromise();

    // renderPromises(promise1, promise2, promise3);
    // console.timeEnd("async"); // 4525.3779296875 ms

    //! Optimización de promesas secuenciales
    // Aplica cuando se tienen promesas que no dependen de otras
    console.time("async2");
    const [p1, p2, p3] = await Promise.all([
      slowPromise(),
      mediumPromise(),
      fastPromise(),
    ]);
    renderPromises(p1, p2, p3);
    console.timeEnd("async2"); // 2003.766845703125 ms
  } catch (err) {
    elemento.innerHTML = `<p>${err}</p>`;
  }
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("lowFunction");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("mediumFunction");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("fastFunction");
    }, 1000);
  });
