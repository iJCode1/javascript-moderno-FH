import { addTodo, getCurrentFilter, getTodos } from "../store/todos.store";
import html from "./app.html?raw"; // <-- ?raw: Sirve para importar el html
import { renderTodos } from "./usecases";

const ElementsIDs = {
  todoList: ".todo-list",
  newTodoInput: "#new-todo-input",
};

/**
 * Construye la aplicación
 * @param {String} elementId ejemplo: '#app'
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = getTodos(getCurrentFilter());
    renderTodos(ElementsIDs.todoList, todos);
  };

  (() => {
    const div = document.createElement("div");
    div.innerHTML = html;

    document.querySelector(elementId).appendChild(div);
    displayTodos();
  })();

  const $newTodoInput = document.querySelector(ElementsIDs.newTodoInput);

  $newTodoInput.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") return; // <-- Si no es Enter, no hagas nada
    if (!e.target.value.trim()) return; // <-- Si no hay texto, no hagas nada

    // Si llega hasta aquí, es porque se presionó Enter y hay texto
    if (e.key === "Enter") addTodo(e.target.value);
    displayTodos();
    e.target.value = "";
  });
};
