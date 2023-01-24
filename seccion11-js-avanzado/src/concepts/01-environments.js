let element;

/**
 * Hace uso de variables de entorno
 * @param {String} elementId
 */
export const environmentsComponent = (elementId) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error("elementId is required");

  console.log(import.meta.env);

  const html = `
    DEV: ${import.meta.env.DEV} <br>
    MODE: ${import.meta.env.MODE} <br>
    PROD: ${import.meta.env.PROD} <br>
    API KEY: ${import.meta.env.VITE_API_KEY} <br>
    BASE URL: ${import.meta.env.VITE_BASE_URL} <br>
  `;

  element.innerHTML = html;
};
