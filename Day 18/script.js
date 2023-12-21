let tasks = [];

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function createTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Initial display of tasks
displayTasks();
