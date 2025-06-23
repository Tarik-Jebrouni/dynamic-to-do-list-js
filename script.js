// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create <li> element
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Add click event to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
    };

  // Add the button to the <li>
  listItem.appendChild(removeBtn);

  // Add the <li> to the task list
  taskList.appendChild(listItem);

    // Clear input
    taskInput.value = '';
  }

  // Event listener for add button
  addButton.addEventListener('click', addTask);

  // Allow Enter key to add task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally, run addTask when DOM loads (not necessary but included per spec)
  // addTask();
});
