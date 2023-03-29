import './style.css';

import TaskList from './modules/CrudMethods.js';

const taskList = new TaskList();

const resetTasks = document.getElementById('reset');

resetTasks.addEventListener('click', () => {
  taskList.resetTasks();
});