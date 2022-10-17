import { manipulateDOM } from "./manipulateDOM";

const projectsArray = [
  {
    name: "Clean the house",
    isActive: true,
    tasks: [
      "make a bed",
      "wash the dishes",
      "vacuum the room",
      "clean the windows",
    ],
  },
  {
    name: "Study for school",
    isActive: false,
    tasks: [
      "study for physics quiz",
      "study for biology quiz",
      "do the homework",
      "chill afterwards",
    ],
  },
];

class projectClass {
  constructor(name, isActive, tasks) {
    this.name = name;
    this.isActive = isActive;
    this.tasks = tasks;
  }
}

const logic = (() => {
  const addSampleProject = () => {
    const sampleProject = new projectClass("Buy groceries", false, [
      "2 carrots",
      "3 tomatoes",
      "1 banana",
      "4 avocado",
      "1 kiwi",
    ]);
    projectsArray.push(sampleProject);
    manipulateDOM.addProjects();
  };

  const addToArray = () => {
    // BEHAVIOUR FOR PRESSING PLUS ICON
    const addButton = document.querySelector(".addProject");
    addButton.addEventListener("click", () => {
      let newProject = new projectClass(addProjectInput.value, false, []);
      projectsArray.push(newProject);
      manipulateDOM.refreshProjects();
      manipulateDOM.addProjects();
      makeActive();
      // console.table(projectsArray);
    });

    // BEHAVIOUR FOR PRESSING ENTER
    const projectInput = document.getElementById("addProjectInput");
    projectInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let newProject = new projectClass(projectInput.value, false, []);
        projectsArray.push(newProject);
        manipulateDOM.refreshProjects();
        manipulateDOM.addProjects();
        projectInput.value = null;
        makeActive();
        // console.table(projectsArray);
      }
    });
  };

  const removeFromArray = (index) => {
    const deleteIcon = document.getElementById("deleteProject");
    deleteIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      // if (projectsArray[index].isActive) {
      //   projectsArray.forEach((element) => {
      //     element.isActive = false;
      //   });
      // }
      projectsArray.splice(index, 1);
      manipulateDOM.refreshProjects();
      manipulateDOM.addProjects();
      manipulateDOM.noActiveProjectsCard();
      makeActive();
    });
  };

  const makeActive = () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((element, index) => {
      element.addEventListener("click", () => {
        projectsArray.forEach((el) => {
          el.isActive = false;
        });
        projectsArray[index].isActive = true;
        manipulateDOM.refreshProjects();
        manipulateDOM.addProjects();
        // console.table(projectsArray);
        // manipulateDOM.activitiesShowTitle(projectsArray[index]);
        makeActive();
      });
    });
  };
  return { addToArray, removeFromArray, makeActive, addSampleProject };
})();

export { logic };
export { projectsArray };
