import { tasksArray } from "./tasks";
import { tasksMethods } from "./tasks";

const manipulateDOM = (() => {
  const refreshTasks = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element) => {
      element.remove();
    });
  };
  const addTask = () => {
    tasksArray.forEach((element) => {
      const createTask = document.createElement("div");
      createTask.classList.add("task");
      if (element.name === "") {
        createTask.innerText = "Unnamed task";
      } else createTask.innerText = element.name;
      tasks.appendChild(createTask);
    });
    taskShowDelete();
  };

  const taskShowDelete = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.setAttribute("id", "deleteTask");
        deleteIcon.innerText = "delete";
        element.appendChild(deleteIcon);
        deleteIcon.addEventListener("click", () =>
          tasksMethods.removeFromArray()
        );
      });
    });
    tasks.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteTask");
        deleteIcon.remove();
      });
    });
  };
  return { refreshTasks, addTask };
})();

export { manipulateDOM };
