import {v4 as uuid} from 'uuid';

export class Todo {

  /**
   * Crea una nueva instancia de la clase Todo
   * @param {text} todo 
   */
  constructor(todo) {
    this.id = uuid();
    this.todo = todo;
    this.completed = false;
    this.createdAt = new Date();
  }
}