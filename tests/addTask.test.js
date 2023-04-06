import Task from '../src/modules/task.js';
import addTask from '../src/modules/addTask.js';

// Test suite
describe('addTask function', () => {
  // Test case 1: adding a new task to an empty array
  it('should add a new task to an empty array', () => {
    // Arrange: create an empty array and a task input object
    const tasks = [];
    const taskInput = { value: 'Buy groceries' };

    // Act: call the addTask function
    const result = addTask(taskInput, tasks);

    // Assert: check that the task was added to the array
    expect(result).toEqual([new Task('Buy groceries', false, 1)]);
  });

  // Test case 2: adding a new task to a non-empty array
  it('should add a new task to a non-empty array', () => {
    // Arrange: create an array with one task and a task input object
    const tasks = [new Task('Buy groceries', false, 1)];
    const taskInput = { value: 'Do laundry' };

    // Act: call the addTask function
    const result = addTask(taskInput, tasks);

    // Assert: check that the task was added to the array
    expect(result).toEqual([
      new Task('Buy groceries', false, 1),
      new Task('Do laundry', false, 2),
    ]);
  });

  // Test case 3: not adding a new task if the input is empty
  it('should not add a new task if the input is empty', () => {
    // Arrange: create an array and an empty task input object
    const tasks = [];
    const taskInput = { value: '' };

    // Act: call the addTask function
    const result = addTask(taskInput, tasks);

    // Assert: check that the array is still empty
    expect(result).toEqual([]);
  });
});
