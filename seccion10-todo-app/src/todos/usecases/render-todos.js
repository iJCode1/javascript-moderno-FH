import { todoHtml } from "./";
import { Todo } from "../models/todos.model";

let element = "";

/**
 * Renderiza los Todos en el HTML
 * @param {String} elementId Es el elemento HTML donde se mostraran los Todos
 * @param {Todo} todos es la lista de todos que se mostraran
 */
export const renderTodos = (elementId, todos = []) => {

  if(!element) element = elementId;

  if (!element) throw new Error("elementId is required");

  const $elemento = document.querySelector(element);

  todos.forEach((todo) => {
    $elemento.append(todoHtml(todo));
  });
};
