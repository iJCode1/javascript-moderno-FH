import { Filters, getTodos } from "../../store/todos.store";
/**
 * Muetsra la cantidad de todos pendientes
 * @param {String} elementId
 */
let element;
export const renderPending = (elementId) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error("elementId is required");

  const todosPending = getTodos(Filters.Pending).length;

  element.textContent = todosPending;
};
