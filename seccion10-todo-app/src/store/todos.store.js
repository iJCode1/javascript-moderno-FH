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
  loadStore();
  console.log("InitStore 💜");
};

const loadStore = () => {
  if (!localStorage.getItem("store")) return;

  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem("store")
  );
  store.todos = todos;
  store.filter = filter;
};

const saveStoreToLocalStorage = () => {
  localStorage.setItem("store", JSON.stringify(store));
};

/**
 * Recibe el filtro y retorna la lista de todos filtrados
 * @param {Filters} filter
 * @returns retorna la lista de todos filtrados
 */
const getTodos = (filter = Filters.All) => {
  loadStore();
  switch (filter) {
    case Filters.All:
      return [...store.todos];
    case Filters.Completed:
      return store.todos.filter((todo) => todo.completed);
    case Filters.Pending:
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
  saveStoreToLocalStorage();
};

/**
 * Recibe el ID del todo que se quiere eliminar
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
  if (!todoId) throw new Error("todoId is required");

  store.todos = store.todos.filter((todo) => todo.id !== todoId);
  saveStoreToLocalStorage();
};

const deleteCompleted = () => {
  store.todos = store.todos.filter((todo) => !todo.completed);
  saveStoreToLocalStorage();
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
  saveStoreToLocalStorage();
};

/**
 * Recibe el filtro para setearlo
 * @param {Filters} filter
 */
const setFilter = (filter = Filters.All) => {
  store.filter = filter;
  saveStoreToLocalStorage();
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
