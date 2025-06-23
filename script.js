// Load tasks from localStorage and display them
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach(taskText => {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
      listItem.remove();
      removeFromStorage(taskText);
    };

    listItem.appendChild(removeBtn);
    document.getElementById('task-list').appendChild(listItem);
  });
}

function removeFromStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  loadTasks();

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert('Please enter a task.');
      return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
      listItem.remove();
      removeFromStorage(taskText);
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Save to localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
