import { getCurrentFilter, getTodos } from "../store/todos.store";
import html from "./app.html?raw"; // <-- ?raw: Sirve para importar el html
import { renderTodos } from "./usecases";

const ElementsIDs = {
  todoList: ".todo-list",
};

/**
 * Construye la aplicación
 * @param {String} elementId ejemplo: '#app'
 */
export const App = (elementId) => {
  
  const displayTodos = () => {
    const todos = getTodos( getCurrentFilter() );
    renderTodos(ElementsIDs.todoList, todos);
  };
  
  (() => {
    const div = document.createElement("div");
    div.innerHTML = html;

    document.querySelector(elementId).appendChild(div);
    displayTodos();
  })();
};
