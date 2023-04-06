import { clearCompletedTask, toggleTaskStatus } from '../src/modules/clearToggleEditTask.js';
import tasks from '../__mock__/localStorage.js';

// clearCompletedTask test
describe('clearCompletedTask', () => {
  test('should return an empty array if no tasks are provided', () => {
    const result = clearCompletedTask([]);
    expect(result).toEqual([]);
  });

  test('should return an array without completed tasks', () => {
    const result = clearCompletedTask(tasks);
    expect(result).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });

  test('should return the same array if no completed tasks are found', () => {
    const noCompletedtasks = [
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 2', status: false },
      { id: 3, name: 'Task 3', status: false },
    ];
    const result = clearCompletedTask(noCompletedtasks);
    expect(result).toEqual(noCompletedtasks);
  });
});

// updateTask test
describe('toggleTaskStatus', () => {
  test('should return the same array if no task with given id is found', () => {
    const result = toggleTaskStatus(4, tasks);
    expect(result).toEqual(tasks);
  });

  test('should toggle the status of the task with the given id', () => {
    const result = toggleTaskStatus(2, tasks);
    expect(result).toEqual([
      { id: 1, name: 'Task 1', status: false },
      { id: 2, name: 'Task 2', status: false },
      { id: 3, name: 'Task 3', status: false },
    ]);
  });

  test('should return a new array with the updated task', () => {
    const result = toggleTaskStatus(2, tasks);
    expect(result).not.toBe(tasks);
    expect(result[1]).not.toBe(tasks[1]);
  });
});
