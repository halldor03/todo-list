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
    projectsArray.forEach((element, index) => {
      const projects = document.querySelector("#projects");
      const createProject = document.createElement("div");
      createProject.classList.add("project");
      if (element.name === "") {
        createProject.innerText = "Unnamed project";
      } else createProject.innerText = element.name;
      projects.appendChild(createProject);
      if (element.isActive) {
        createProject.classList.add("project_active");
        // addTasks(projectsArray[index]);
      }
    });
    const activeProject = document.querySelector(".project_active");
    if (activeProject === null) {
      noActiveProjects();
    }
    projectsShowDelete();
    // console.log(activeProject.name);
    // logic.addTaskToArray();
    const projectInput = document.getElementById("addProjectInput");
  };

  const projectsShowDelete = () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.setAttribute("id", "deleteProject");
        deleteIcon.innerText = "delete";
        element.appendChild(deleteIcon);
        logic.removeProjectFromArray(index);
      });
    });
    projects.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteProject");
        deleteIcon.remove();
      });
    });
  };

  const noActiveProjects = () => {
    const projectCard = document.querySelector(".projectCard");
    const main = document.querySelector("main");
    if (projectCard !== null) {
      projectCard.remove();
      const selectProjectDiv = document.createElement("div");
      selectProjectDiv.setAttribute("class", "selectProjectDiv");
      selectProjectDiv.innerText =
        "Please select an active project from the list";
      main.appendChild(selectProjectDiv);
    }
  };

  const addTasks = (activeProject) => {
    const projectCard = document.querySelector(".projectCard");
    // if (projectCard === null) {
    //   const selectProjectDiv = document.querySelector(".selectProjectDiv");
    //   selectProjectDiv.remove();
    //   createDOM.createCard();
    // }
    createDOM.createCard();
    const taskInput = document.getElementById("addTaskInput");
    taskInput.focus();
    const titleElement = document.querySelector(".projectTitle");
    titleElement.innerText = activeProject.name;
    if (activeProject.name === "") {
      titleElement.innerText = "Unnamed project";
    }
    // refreshTasks();
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
    tasksShowDelete();
  };

  const refreshTasks = () => {
    const selectProjectDiv = document.querySelector(".selectProjectDiv");
    if (selectProjectDiv !== null) {
      selectProjectDiv.remove();
    }
    const projectCard = document.querySelector(".projectCard");
    if (projectCard !== null) {
      projectCard.remove();
    }
    // const tasks = document.querySelectorAll(".task");
    // tasks.forEach((element) => {
    //   element.remove();
    // });
  };

  const tasksShowDelete = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.setAttribute("id", "deleteProject");
        deleteIcon.innerText = "delete";
        element.appendChild(deleteIcon);
        logic.removeTaskFromArray(index);
      });
    });
    tasks.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteProject");
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
