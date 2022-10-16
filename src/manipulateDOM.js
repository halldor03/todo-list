import { tasksArray } from "./tasks";
import { tasksMethods } from "./tasks";

const manipulateDOM = (() => {
  const refreshTasks = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element) => {
      element.remove();
    });
  };
  const addTasks = () => {
    tasksArray.forEach((element) => {
      const createTask = document.createElement("div");
      createTask.classList.add("task");
      if (element.name === "") {
        createTask.innerText = "Unnamed task";
      } else createTask.innerText = element.name;
      if (element.isActive === true) {
        createTask.classList.add("task_active");
      }
      tasks.appendChild(createTask);
    });
    taskShowDelete();
  };

  const taskShowDelete = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.setAttribute("id", "deleteTask");
        deleteIcon.innerText = "delete";
        element.appendChild(deleteIcon);
        tasksMethods.removeFromArray(index);
      });
    });
    tasks.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteTask");
        deleteIcon.remove();
      });
    });
  };

  return { refreshTasks, addTasks };
})();

export { manipulateDOM };
