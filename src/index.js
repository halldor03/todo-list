import "./styles.css";

const tasks = document.querySelectorAll(".task");
tasks.forEach((tasks) => {
  tasks.addEventListener("click", () => {
    tasks.classList.add("task_active");
  });
});

const inputContainer = document.getElementById("tasks");
const input = document.getElementById("addNewTask");
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    console.log("Enter key pressed!!!!!");
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerText = input.value;
    inputContainer.appendChild(newTask);
  }
});
