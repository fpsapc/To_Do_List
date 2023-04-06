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
export { clearCompletedTask, toggleTaskStatus };