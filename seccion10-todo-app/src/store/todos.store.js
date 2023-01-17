import { Todo } from "../todos/models/todos.model";

const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const store = {
  todos: [
    new Todo("Hacer proyecto de React"),
    new Todo("Preparar la comida"),
    new Todo("Enviar el proyecto de React a revisión"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(store);
  console.log("InitStore 💜");
};

const loadStore = () => {
  throw new Error("Not implemented yet");
};

const getTodos = (filter = Filters.All) => {
  throw new Error("Not implemented yet");
};

const addTodo = (todo) => {
  throw new Error("Not implemented yet");
};

const deleteTodo = (todoId) => {
  throw new Error("Not implemented yet");
};

const deleteCompleted = () => {
  throw new Error("Not implemented yet");
};

const toggleTodo = (todoId) => {
  throw new Error("Not implemented yet");
};

const setFilter = (filter = Filters.All) => {
  throw new Error("Not implemented yet");
};

const getCurrentFilter = () => {
  throw new Error("Not implemented yet");
};

export {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
