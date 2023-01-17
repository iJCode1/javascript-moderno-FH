import './style.css'
import { App } from './src/todos/app';
import initStore from './src/store/todos.store';

App('#app');
initStore();