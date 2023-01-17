import html from './app.html?raw'; // <-- ?raw: Sirve para importar el html

/**
 * Construye la aplicación
 * @param {String} elementId ejemplo: '#app'
 */
export const App = ( elementId ) => {
  (() => {
    const div = document.createElement('div');
    div.innerHTML = html;

    document.querySelector(elementId).appendChild(div);
  })();
};
