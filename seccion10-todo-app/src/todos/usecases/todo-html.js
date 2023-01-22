import { Todo } from "../models/todos.model";
/**
 * Recibe un todo y retorna el HTML del todo
 * @param {Todo} todo
 * @returns
 */
export const todoHtml = (todo) => {
  const html = `
  <div class="view">
      <input class="toggle" type="checkbox" ${todo.completed ? "checked" : ""}>
      <label>${todo.todo}</label>
      <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
`;
  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  liElement.setAttribute("data-id", todo.id);

  if (todo.completed) liElement.classList.add("completed");

  return liElement;
};
