import { manipulateDOM } from "./manipulateDOM";

const projectsArray = [
  {
    name: "Clean the house",
    isActive: true,
    tasks: [
      "Make a bed",
      "Wash the dishes",
      "Vacuum the room",
      "Clean the windows",
    ],
  },
  {
    name: "Study for school",
    isActive: false,
    tasks: [
      "Study for physics quiz",
      "Study for biology quiz",
      "Do the homework",
      "Chill afterwards",
    ],
  },
  {
    name: "Buy groceries",
    isActive: false,
    tasks: [
      "2 carrots",
      "3 tomatoes",
      "1 banana",
      "4 avocado",
      "1 kiwi",
      "2 apples",
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
  // FIND ACTIVE PROJECT ON LAUNCH
  const findActiveProject = () => {
    const activeProject = projectsArray.find(
      (element) => element.isActive === true
    );
    addTaskToArray(activeProject); // POPULATE TASKS OF ACTIVE PROJECT ON START
  };

  const addProjectToArray = () => {
    // BEHAVIOUR FOR PRESSING PLUS ICON
    const projectInput = document.getElementById("addProjectInput");
    const addButton = document.querySelector(".addProject");
    addButton.addEventListener("click", () => {
      let newProject = new projectClass(projectInput.value, false, []);
      projectsArray.push(newProject);
      manipulateDOM.refreshProjects();
      manipulateDOM.addProjects();
      activateProjectSelection();
    });

    // BEHAVIOUR FOR PRESSING ENTER
    projectInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let newProject = new projectClass(projectInput.value, false, []);
        projectsArray.push(newProject);
        manipulateDOM.refreshProjects();
        manipulateDOM.addProjects();
        projectInput.value = null;
        activateProjectSelection();
      }
    });
  };

  const removeProjectFromArray = (index) => {
    const deleteIcon = document.getElementById("deleteIcon");
    deleteIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // STOPS PROJECT FROM BEING SET AS ACTIVE AFTER BEING DELETED
      projectsArray.splice(index, 1);
      manipulateDOM.refreshProjects();
      manipulateDOM.addProjects();
      activateProjectSelection();
    });
  };

  const activateProjectSelection = () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((element, index) => {
      element.addEventListener("click", () => {
        // DEACTIVATE ALL PROJECTS
        projectsArray.forEach((projectInArray) => {
          projectInArray.isActive = false;
        });
        projectsArray[index].isActive = true; // ACTIVATE ONLY CLICKED PROJECT
        manipulateDOM.refreshProjects();
        manipulateDOM.addProjects();
        addTaskToArray(projectsArray[index]); // POPULATE TASKS OF ACTIVE PROJECT EVERY TIME NEW PROJECT IS SELECTED
        activateProjectSelection(); // IN ORDER TO RUN FUNCTION MORE THAN ONCE BEFORE ADDING NEW PROJECT
      });
    });
  };

  const addTaskToArray = (activeProject) => {
    const tasksArray = activeProject.tasks;
    manipulateDOM.refreshTasks();
    manipulateDOM.addTasks(activeProject);

    // BEHAVIOUR FOR PRESSING PLUS ICON
    const taskInput = document.getElementById("addTaskInput");
    const addButton = document.querySelector(".addTask");
    addButton.addEventListener("click", () => {
      let newTask = taskInput.value;
      tasksArray.push(newTask);
      manipulateDOM.refreshTasks();
      manipulateDOM.addTasks(activeProject);
      addTaskToArray(activeProject);
    });

    // BEHAVIOUR FOR PRESSING ENTER
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let newTask = taskInput.value;
        tasksArray.push(newTask);
        manipulateDOM.refreshTasks();
        manipulateDOM.addTasks(activeProject);
        addTaskToArray(activeProject);
        taskInput.value = null;
      }
    });
  };

  const removeTaskFromArray = (index) => {
    // FIND ACTIVE PROJECT
    const activeProject = projectsArray.find(
      (element) => element.isActive === true
    );
    const tasksArray = activeProject.tasks;
    const deleteIcon = document.getElementById("deleteIcon");
    deleteIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      tasksArray.splice(index, 1);
      manipulateDOM.refreshTasks();
      manipulateDOM.addTasks(activeProject);
      addTaskToArray(activeProject);
    });
  };
  return {
    addProjectToArray,
    removeProjectFromArray,
    activateProjectSelection,
    addTaskToArray,
    removeTaskFromArray,
    findActiveProject,
  };
})();

export { logic };
export { projectsArray };
