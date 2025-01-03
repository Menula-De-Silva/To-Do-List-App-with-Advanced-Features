// Starter Code for To-Do List App

// HTML Structure
const appHTML = `
<div id="app" class="container">
  <h1 class="text-center">To-Do List</h1>
  <div class="form-group">
    <input id="taskInput" type="text" class="form-control" placeholder="Add a new task...">
    <button id="addTaskButton" class="btn btn-primary mt-2">Add Task</button>
  </div>
  <ul id="taskList" class="list-group mt-3"></ul>
</div>
`;

document.body.innerHTML = appHTML;

// JavaScript Logic
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let tasks = []; // Array to store tasks

// Add Task Function
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };
  tasks.push(task);
  renderTasks();
  taskInput.value = "";
};

// Render Tasks Function
const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    taskItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div>
        <button class="btn btn-success btn-sm" onclick="toggleTask(${task.id})">✔</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">✖</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
};

// Toggle Task Completion
const toggleTask = (taskId) => {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
};

// Delete Task Function
const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
};

// Event Listeners
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Styling (Optional, for demonstration purposes)
const style = document.createElement("style");
style.textContent = `
  .completed {
    text-decoration: line-through;
    color: grey;
  }
  #app {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(style);
