import {
  addTodo,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  toggleTodo,
} from "../store/todos.store";
import html from "./app.html?raw"; // <-- ?raw: Sirve para importar el html
import { renderTodos } from "./usecases";

const ElementsIDs = {
  todoList: ".todo-list",
  newTodoInput: "#new-todo-input",
  destroy: ".destroy",
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

  // Variables
  const $newTodoInput = document.querySelector(ElementsIDs.newTodoInput);
  const $todoList = document.querySelector(ElementsIDs.todoList);
  const $destroy = document.querySelector(ElementsIDs.destroy);

  // Eventos
  $newTodoInput.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") return; // <-- Si no es Enter, no hagas nada
    if (!e.target.value.trim()) return; // <-- Si no hay texto, no hagas nada

    // Si llega hasta aquí, es porque se presionó Enter y hay texto
    if (e.key === "Enter") addTodo(e.target.value);
    displayTodos();
    e.target.value = "";
  });

  $todoList.addEventListener("click", (e) => {
    const elemento = e.target.closest("[data-id]");

    toggleTodo(elemento.getAttribute("data-id"));
    displayTodos();
  });

  $todoList.addEventListener("click", (e) => {
    if (e.target.className !== "destroy") return;
    
    const elemento = e.target.closest("[data-id]");

    deleteTodo(elemento.getAttribute("data-id"));
    displayTodos();
  });
};
