// clearCompletedTask function
function clearCompletedTask(tasks) {
  return tasks.filter((task) => !task.status);
}

// toggleTaskStatus function
function toggleTaskStatus(id, tasks) {
  return tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: !task.status,
      };
    }
    return task;
  });
}

// editTask function
function editTask(id, newName, tasks, saveTasks, displayTasks) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].name = newName;
    saveTasks();
    displayTasks();
  }
}

export { clearCompletedTask, toggleTaskStatus, editTask };