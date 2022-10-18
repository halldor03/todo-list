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

  const addProjectToArray = () => {
    // BEHAVIOUR FOR PRESSING PLUS ICON
    const projectInput = document.getElementById("addProjectInput");
    const addButton = document.querySelector(".addProject");
    addButton.addEventListener("click", () => {
      let newProject = new projectClass(projectInput.value, false, []);
      projectsArray.push(newProject);
      manipulateDOM.refreshProjects();
      manipulateDOM.addProjects();
      projectMakeActive();
      // console.table(projectsArray);
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
        projectMakeActive();
        // console.table(projectsArray);
      }
    });
  };

  const removeProjectFromArray = (index) => {
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
      // manipulateDOM.noActiveProjectsCard();
      projectMakeActive();
    });
  };

  const projectMakeActive = () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((element, index) => {
      element.addEventListener("click", () => {
        projectsArray.forEach((el) => {
          el.isActive = false;
        });
        projectsArray[index].isActive = true;
        // addTaskToArray(projectsArray[index]);
        manipulateDOM.refreshProjects();
        manipulateDOM.addProjects();
        // console.table(projectsArray);
        // manipulateDOM.activitiesShowTitle(projectsArray[index]);
        addTaskToArray();
        projectMakeActive();
      });
      // addTaskToArray(projectsArray[index]);
    });
  };

  const addTaskToArray = () => {
    const activeProject = projectsArray.find(
      (element) => element.isActive === true
    );
    const tasksArray = activeProject.tasks;
    console.log(tasksArray);

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
      addTaskToArray();
      // manipulateDOM.refreshProjects();
      // manipulateDOM.addProjects();
      console.log(tasksArray);
    });

    // BEHAVIOUR FOR PRESSING ENTER
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let newTask = taskInput.value;
        tasksArray.push(newTask);
        manipulateDOM.refreshTasks();
        manipulateDOM.addTasks(activeProject);
        addTaskToArray();
        // manipulateDOM.refreshProjects();
        // manipulateDOM.addProjects();
        taskInput.value = null;
        console.log(tasksArray);
      }
    });

    // const projects = document.querySelectorAll(".project");
    // projects.forEach((element) => {
    //   element.addEventListener(
    //     "click",
    //     () => {
    //       addTaskToArray();
    //     },
    //     { once: true }
    //   );
    // });
  };

  const removeTaskFromArray = (index) => {
    const activeProject = projectsArray.find(
      (element) => element.isActive === true
    );
    const tasksArray = activeProject.tasks;
    console.log(tasksArray);

    const deleteIcon = document.getElementById("deleteProject");
    deleteIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      // if (projectsArray[index].isActive) {
      //   projectsArray.forEach((element) => {
      //     element.isActive = false;
      //   });
      // }
      tasksArray.splice(index, 1);
      manipulateDOM.refreshTasks();
      manipulateDOM.addTasks(activeProject);
      // manipulateDOM.noActiveProjectsCard();
      addTaskToArray();
    });
  };
  return {
    addProjectToArray,
    removeProjectFromArray,
    projectMakeActive,
    addSampleProject,
    addTaskToArray,
    removeTaskFromArray,
  };
})();

export { logic };
export { projectsArray };
