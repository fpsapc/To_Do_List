import removeTask from './src/modules/removeTask.js';

describe('removeTask', () => {
  const tasks = [
    { id: 1, name: 'Task 1', status: false },
    { id: 2, name: 'Task 2', status: true },
    { id: 3, name: 'Task 3', status: false },
  ];

  test('should remove task with given id', () => {
    const updatedTasks = removeTask(2, tasks);
    expect(updatedTasks).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });

  test('should not remove task if id not found', () => {
    const updatedTasks = removeTask(4, tasks);
    expect(updatedTasks).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 2', status: true },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });

  test('should return a new array and not modify the original', () => {
    const updatedTasks = removeTask(2, tasks);
    expect(updatedTasks).not.toBe(tasks);
  });
});
