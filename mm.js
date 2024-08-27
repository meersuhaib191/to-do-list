let taskList = [];

document.addEventListener("DOMContentLoaded", function() {
  const taskListElement = document.getElementById("task-list");
  const newTaskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");

  addTaskButton.addEventListener("click", function() {
    const newTask = newTaskInput.value.trim();
    if (newTask !== "") {
      taskList.push(newTask);
      newTaskInput.value = "";
      renderTaskList();
    }
  });

  function renderTaskList() {
    taskListElement.innerHTML = "";
    taskList.forEach((task, index) => {
      const taskElement = document.createElement("li");
      taskElement.textContent = task;
      taskElement.dataset.index = index;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editTask(index));

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(index));

      taskElement.appendChild(editButton);
      taskElement.appendChild(deleteButton);
      taskListElement.appendChild(taskElement);
    });
  }

  function deleteTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
  }

  function editTask(index) {
    const task = taskList[index];
    const newTask = prompt("Enter new task:", task);
    if (newTask !== null && newTask !== "") {
      taskList[index] = newTask;
      renderTaskList();
    }
  }

  renderTaskList();
});