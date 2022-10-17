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
      const createProject = document.createElement("div");
      createProject.classList.add("project");
      if (element.name === "") {
        createProject.innerText = "Unnamed project";
      } else createProject.innerText = element.name;
      if (element.isActive) {
        createProject.classList.add("project_active");
        projectShowTitle(projectsArray[index]);
      }
      projects.appendChild(createProject);
    });
    projectsShowDelete();
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
        logic.removeFromArray(index);
      });
    });
    projects.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        const deleteIcon = document.getElementById("deleteProject");
        deleteIcon.remove();
      });
    });
  };

  const noActiveProjectsCard = () => {
    const activeProjects = document.querySelectorAll(".project_active");
    const projectCard = document.querySelector(".projectCard");
    const main = document.querySelector("main");
    if (activeProjects.length === 0) {
      projectCard.remove();
      const selectProjectDiv = document.createElement("div");
      selectProjectDiv.setAttribute("class", "selectProjectDiv");
      selectProjectDiv.innerText =
        "Please select an active project from the list";
      main.appendChild(selectProjectDiv);
    }
  };

  const projectShowTitle = (element) => {
    // console.log(element);
    // createHome.createMain();
    const titleElement = document.querySelector(".taskTitle");
    const title = element.name;
    console.log(title);
    titleElement.innerText = title;
    if (title === "") {
      titleElement.innerText = "Unnamed project";
    }
  };

  return {
    refreshProjects,
    addProjects,
    projectShowTitle,
    noActiveProjectsCard,
  };
})();

export { manipulateDOM };
