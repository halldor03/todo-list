import { manipulateDOM } from "./manipulateDOM";
const tasksArray = [];

class task {
  constructor(name, isActive) {
    this.name = name;
    this.isActive = isActive;
  }
}

const tasksMethods = (() => {
  // const addSampleTask = () => {
  //   const sampleTask = new task("Sample task", true);
  //   tasksArray.push(sampleTask);
  //   manipulateDOM.refreshTasks();
  //   // console.log(tasksArray);
  // };

  const addToArray = () => {
    // BEHAVIOUR FOR PRESSING PLUS ICON
    const addButton = document.querySelector(".addTask");
    addButton.addEventListener("click", () => {
      let newTask = new task(addTaskInput.value, false);
      tasksArray.push(newTask);
      manipulateDOM.refreshTasks();
      manipulateDOM.addTasks();
      makeActive();
      // console.log(tasksArray);
    });

    // BEHAVIOUR FOR PRESSING ENTER
    const taskInput = document.getElementById("addTaskInput");
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let newTask = new task(addTaskInput.value, false);
        tasksArray.push(newTask);
        manipulateDOM.refreshTasks();
        manipulateDOM.addTasks();
        addTaskInput.value = null;
        makeActive();
        // console.log(tasksArray);
      }
    });
  };

  const removeFromArray = (index) => {
    const deleteIcon = document.getElementById("deleteTask");
    deleteIcon.addEventListener("click", () => {
      tasksArray.splice(index, 1);
      tasksArray.forEach((element) => {
        element.isActive = false;
      });
      manipulateDOM.refreshTasks();
      manipulateDOM.addTasks();
    });
  };

  const makeActive = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element, index) => {
      element.addEventListener("click", () => {
        tasksArray.forEach((element) => {
          element.isActive = false;
        });
        tasksArray[index].isActive = true;
        manipulateDOM.refreshTasks();
        manipulateDOM.addTasks();
        makeActive();
      });
    });
  };
  return { addToArray, removeFromArray, makeActive };
})();

export { tasksMethods };
export { tasksArray };
