import './style.css';

const tasks = [
  { description: 'Learn HTML', completed: false, index: 1 },
  { description: 'Learn CSS', completed: false, index: 2 },
  { description: 'Learn JavaScript', completed: false, index: 3 },
];

const todoList = document.getElementById('todo-list');

const renderTasks = () => {
  tasks.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'task-content';
    taskCard.innerHTML = `<div class="task-text">
                            <input type="checkbox">
                            <p class="task-text">${task.description}</p>
                          </div>
                          <i class="fa-solid fa-trash-can" id="delete-task"></i>`;
    todoList.appendChild(taskCard);
  });
};

renderTasks();