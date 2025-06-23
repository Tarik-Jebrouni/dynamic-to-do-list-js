document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Load saved tasks on page load
  tasks.forEach(task => renderTask(task));

  // Add Task function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    tasks.push(taskText);
    updateLocalStorage();
    renderTask(taskText);
    taskInput.value = '';
  }

  // Render a task item into the DOM
  function renderTask(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add('task-item');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
      tasks = tasks.filter(task => task !== taskText);
      updateLocalStorage();
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);
  }

  // Save tasks to localStorage
  function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
