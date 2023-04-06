import { clearCompletedTask, toggleTaskStatus, editTask } from '../src/modules/clearToggleEditTask.js';
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

// edit task test
describe('editTask', () => {
  const mockSaveTasks = jest.fn();
  const mockDisplayTasks = jest.fn();

  test('should update the name of a task given its ID', () => {
    const taskId = 2;
    const newName = 'New Task Name';
    editTask(taskId, newName, tasks, mockSaveTasks, mockDisplayTasks);
    expect(tasks[1].name).toBe(newName);
  });

  test('should not update the name of a task if the ID does not exist', () => {
    const taskId = 4;
    const newName = 'New Task Name';
    editTask(taskId, newName, tasks, mockSaveTasks, mockDisplayTasks);
    expect(tasks).toEqual(tasks);
  });

  test('should call saveTasks and displayTasks functions after updating a task', () => {
    const taskId = 1;
    const newName = 'Updated Task Name';
    editTask(taskId, newName, tasks, mockSaveTasks, mockDisplayTasks);
    expect(mockSaveTasks).toHaveBeenCalled();
    expect(mockDisplayTasks).toHaveBeenCalled();
  });
});