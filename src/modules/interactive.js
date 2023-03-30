import Task from './task.js';

class TaskList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.taskForm = document.getElementById('task-form');
    this.taskInput = document.getElementById('task-input');
    this.taskList = document.getElementById('task-list');
    this.clearCompletedBtn = document.getElementById('clear-completed');
    this.resetBtn = document.getElementById('reset');
    this.taskForm.addEventListener('submit', this.addTask.bind(this));
    this.clearCompletedBtn.addEventListener('click', this.clearCompletedTasks.bind(this));
    this.resetBtn.addEventListener('click', this.resetTasks.bind(this));
    this.displayTasks();
  }

  addTask(e) {
    e.preventDefault();
    const taskName = this.taskInput.value.trim();
    if (taskName !== '') {
      if (this.tasks.length === 0) {
        // add a placeholder task at index 0
        this.tasks.push(new Task('', false));
      }
      const task = new Task(taskName, false);
      this.tasks.push(task);
      this.saveTasks();
      this.displayTasks();
      this.taskInput.value = '';
    }
  }

  editTask(id, newName) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].name = newName;
      this.saveTasks();
      this.displayTasks();
    }
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
    this.displayTasks();
  }

  toggleTaskStatus(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index].status = !this.tasks[index].status;
      this.saveTasks();
      this.displayTasks();
    }
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.status);
    this.saveTasks();
    this.displayTasks();
  }

  resetTasks() {
    this.tasks = ['Lets Get started'];
    this.saveTasks();
    this.displayTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    this.taskList.innerHTML = '';
    for (let i = 1; i < this.tasks.length; i += 1) {
      const task = this.tasks[i];
      const taskElement = document.createElement('li');
      taskElement.innerHTML = `
        <input type='checkbox' ${task.status ? 'checked' : ''}>
        <span ${task.status ? 'style="text-decoration: line-through"' : ''}>
      ${task.name}</span>
      <button class="edit-btn">Edit</button>
      <button class='delete-btn'>X</button>
      `;
      const checkbox = taskElement.querySelector('input[type=checkbox]');
      checkbox.addEventListener('change', () => this.toggleTaskStatus(task.id));
      const editBtn = taskElement.querySelector('.edit-btn');
      editBtn.addEventListener('click', () => {
        const newName = prompt('Enter new task name:', task.name);
        if (newName !== null && newName.trim() !== '') {
          this.editTask(task.id, newName.trim());
        }
      });
      const deleteBtn = taskElement.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => this.removeTask(task.id));
      this.taskList.appendChild(taskElement);
    }
  }
}

export default TaskList;