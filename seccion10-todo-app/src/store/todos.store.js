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

/**
 * Recibe el filtro y retorna la lista de todos filtrados
 * @param {Filters} filter
 * @returns retorna la lista de todos filtrados
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case filter === Filters.All:
      return [...store.todos];
    case filter === Filters.Completed:
      return store.todos.filter((todo) => todo.completed);
    case filter === Filters.Pending:
      return store.todos.filter((todo) => !todo.completed);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 * Recibe el todo (texto)
 * @param {String} todo Ej: "Hacer el proyecto de React"
 */
const addTodo = (todo) => {
  if (!todo) throw new Error("Todo is required");

  store.todos.push(new Todo(todo));
};

/**
 * Recibe el ID del todo que se quiere eliminar
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
  if (!todoId) throw new Error("todoId is required");

  store.todos = store.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  store.todos = store.todos.filter((todo) => !todo.completed);
};

/**
 * Recibe el ID del todo que se quiere cambiar de filtro
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
  if (!todoId) throw new Error("todoId is required");

  store.todos = store.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.completed = !todo.completed;
    }

    return todo;
  });
};

/**
 * Recibe el filtro para setearlo
 * @param {Filters} filter
 */
const setFilter = (filter = Filters.All) => {
  store.filter = filter;
};

const getCurrentFilter = () => {
  return store.filter;
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
