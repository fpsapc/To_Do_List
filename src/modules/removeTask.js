function removeTask(id, tasks) {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  for (let i = 0; i < updatedTasks.length; i += 1) {
    updatedTasks[i].id = i + 1;
  }
  return updatedTasks;
}

export default removeTask;