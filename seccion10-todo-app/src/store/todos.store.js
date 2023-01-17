import { Todo } from "../todos/models/todos.model";

const filters = {
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
  filter: filters.All,
};

const initStore = () => {
  console.log(store);
  console.log("InitStore 💜");
};

export default initStore;
