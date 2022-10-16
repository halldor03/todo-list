import { manipulateDOM } from "./manipulateDOM";
const tasksArray = [];
class task {
  constructor(name) {
    this.name = name;
  }

  test() {
    console.log("delete task");
    let index = tasksArray.indexOf(this);
    console.log(index);
  }
}

const tasksMethods = (() => {
  const addSampleTask = () => {
    const sampleTask = new task("Sample task");
    tasksArray.push(sampleTask);
    manipulateDOM.refreshTasks();
  };

  const addToArray = () => {
    // BEHAVIOUR FOR PRESSING PLUS ICON
    const addButton = document.querySelector(".addTask");
    addButton.addEventListener("click", () => {
      let newTask = new task(addTaskInput.value);
      tasksArray.push(newTask);
      manipulateDOM.refreshTasks();
      manipulateDOM.addTask();
      console.log(tasksArray);
    });

    // BEHAVIOUR FOR PRESSING ENTER
    const taskInput = document.getElementById("addTaskInput");
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let newTask = new task(addTaskInput.value);
        tasksArray.push(newTask);
        manipulateDOM.refreshTasks();
        manipulateDOM.addTask();
        addTaskInput.value = null;
        console.log(tasksArray);
      }
    });
  };
  const removeFromArray = () => {
    console.log("del");
    // task.test();
  };
  return { addToArray, addSampleTask, removeFromArray };
})();

export { tasksMethods };
export { tasksArray };
