import Task from './task.js';

function addTask(taskInput, tasks) {
  const taskName = taskInput.value.trim();
  const id = tasks.length + 1;
  if (taskName !== '') {
    const task = new Task(taskName, false, id);
    tasks.push(task);
  }
  return tasks;
}

export default addTask;
