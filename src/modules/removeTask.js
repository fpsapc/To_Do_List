function removeTask(id, tasks) {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  return updatedTasks;
};

export default removeTask;