import Task from './task.js';

class TaskList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.taskForm = document.getElementById('task-form');
    this.taskInput = document.getElementById('task-input');
    this.taskList = document.getElementById('task-list');
    this.clearCompletedBtn = document.getElementById('clear-completed');
    this.taskForm.addEventListener('submit', this.addTask.bind(this));
    this.clearCompletedBtn.addEventListener('click', this.clearCompletedTasks.bind(this));
    this.displayTasks();
  }

  addTask(e) {
    e.preventDefault();
    const taskName = this.taskInput.value.trim();
    if (taskName !== '') {
      const task = new Task(taskName, false);
      this.tasks.push(task);
      this.displayTasks();
      this.taskInput.value = '';
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.displayTasks();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  toggleTaskStatus(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].status = !this.tasks[index].status;
    this.displayTasks();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.status);
    this.displayTasks();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  resetTasks() {
    this.tasks = [];
    localStorage.removeItem('tasks');
    this.displayTasks();
  }

  displayTasks() {
    this.taskList.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskElement = document.createElement('li');
      taskElement.innerHTML = `
        <input type='checkbox' ${task.status ? 'checked' : ''}>
        <span>${task.name}</span>
        <button class='delete-btn'>X</button>
      `;
      const checkbox = taskElement.querySelector('input[type=checkbox]');
      checkbox.addEventListener('change', () => this.toggleTaskStatus(task.id));
      const deleteBtn = taskElement.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => this.removeTask(task.id));
      if (task.status) {
        taskElement.querySelector('span').style.textDecoration = 'line-through';
      }
      this.taskList.appendChild(taskElement);
    });
  }
}

export default TaskList;