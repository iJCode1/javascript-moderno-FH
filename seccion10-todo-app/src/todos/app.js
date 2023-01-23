import {
  addTodo,
  deleteCompleted,
  deleteTodo,
  Filters,
  getCurrentFilter,
  getTodos,
  setFilter,
  toggleTodo,
} from "../store/todos.store";
import html from "./app.html?raw"; // <-- ?raw: Sirve para importar el html
import { renderTodos } from "./usecases";

const ElementsIDs = {
  todoList: ".todo-list",
  newTodoInput: "#new-todo-input",
  destroy: ".destroy",
  clearCompletedButton: ".clear-completed",
  filters: ".filtro",
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
  const $clearCompletedButton = document.querySelector(
    ElementsIDs.clearCompletedButton
  );
  const $filters = document.querySelectorAll(ElementsIDs.filters);

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

  $clearCompletedButton.addEventListener("click", () => {
    deleteCompleted();
    displayTodos();
  });

  $filters.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      $filters.forEach((filtro) => filtro.classList.remove("selected"));
      filtro.className = "filtro selected";
      switch (filtro.textContent) {
        case "Todos":
          setFilter(Filters.All);
          break;
        case "Pendientes":
          setFilter(Filters.Pending);
          break;
        case "Completados":
          setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
