import { createDOM } from "./createDOM";
import { projectsArray } from "./logic";
import { logic } from "./logic";

const manipulateDOM = (() => {
  const refreshProjects = () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((element) => {
      element.remove();
    });
  };
  const addProjects = () => {
    projectsArray.forEach((projectInArray) => {
      const projects = document.querySelector("#projects");
      const createProject = document.createElement("div");
      createProject.classList.add("project");
      if (projectInArray.name === "") {
        createProject.innerText = "Unnamed project";
      } else createProject.innerText = projectInArray.name;
      projects.appendChild(createProject);
      // SET CLASS TO ACTIVE IF PROJECT IS ACTIVE
      if (projectInArray.isActive) {
        createProject.classList.add("project_active");
      }
    });
    // DISPLAY MESSAGE IF NO PROJECT IS ACTIVE (THE SECOND PART IN THE "IF STATEMENT" PREVENTS FROM TRYING TO DELETE PROJECT CARD WHEN IT WAS REMOVED BEFORE)
    const activeProject = document.querySelector(".project_active");
    const projectCard = document.querySelector(".projectCard");
    if (activeProject === null && projectCard !== null) {
      noActiveProjects();
    }
    displayProjectDeleteButtons();
  };

  const displayProjectDeleteButtons = () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.setAttribute("id", "deleteIcon");
        deleteIcon.innerText = "delete";
        element.appendChild(deleteIcon);
        logic.removeProjectFromArray(index);
      });
    });
    projects.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteIcon");
        deleteIcon.remove();
      });
    });
  };

  const noActiveProjects = () => {
    const projectCard = document.querySelector(".projectCard");
    const main = document.querySelector("main");
    projectCard.remove();
    const selectProjectDiv = document.createElement("div");
    selectProjectDiv.setAttribute("class", "selectProjectDiv");
    selectProjectDiv.innerText =
      "Please select an active project from the list";
    main.appendChild(selectProjectDiv);
  };

  const addTasks = (activeProject) => {
    createDOM.createCard();
    const taskInput = document.getElementById("addTaskInput");
    taskInput.focus(); // IN ORDER TO FOCUS ON INPUT EACH TIME TASK IS ADDED/PROJECT IS CHANGED
    const titleElement = document.querySelector(".projectTitle");
    titleElement.innerText = activeProject.name;
    if (activeProject.name === "") {
      titleElement.innerText = "Unnamed project";
    }
    const activeProjectTaks = activeProject.tasks;
    const tasks = document.querySelector("#tasks");
    activeProjectTaks.forEach((element) => {
      const createTask = document.createElement("div");
      createTask.classList.add("task");
      if (element === "") {
        createTask.innerText = "Unnamed task";
      } else createTask.innerText = element;
      tasks.appendChild(createTask);
    });
    displayTasksDeleteButtons();
  };

  const refreshTasks = () => {
    const selectProjectDiv = document.querySelector(".selectProjectDiv");
    // REMOVE THE MESSAGE THAT NO PROJECT IS ACTIVE IF IT EXISTS
    if (selectProjectDiv !== null) {
      selectProjectDiv.remove();
    }
    const projectCard = document.querySelector(".projectCard");
    // REMOVE PROJECT CARD IF IT EXISTS - IT WILL BE ADDED IN "ADDTASKS" FUNCTION
    if (projectCard !== null) {
      projectCard.remove();
    }
  };

  const displayTasksDeleteButtons = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.setAttribute("id", "deleteIcon");
        deleteIcon.innerText = "delete";
        element.appendChild(deleteIcon);
        logic.removeTaskFromArray(index);
      });
    });
    tasks.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteIcon");
        deleteIcon.remove();
      });
    });
  };

  return {
    refreshProjects,
    addProjects,
    addTasks,
    refreshTasks,
    noActiveProjects,
  };
})();

export { manipulateDOM };
