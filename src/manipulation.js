import "./styles.css";

// FIRST GOTTA ADD CLASSESS!!

const DOMmanipulation = (() => {
  const selectTask = () => {
    const task = document.querySelectorAll(".task");
    task.forEach((element) => {
      element.addEventListener("click", (e) => {
        const activeTasks = document.querySelectorAll(".task_active");
        if (activeTasks.length < 1) {
          element.removeAttribute("class", "task");
          element.classList.add("task_active");
        } else {
          task.forEach((element) => {
            element.removeAttribute("class", "task_active");
            element.classList.add("task");
            // e.classList.add("task_active");
          });
          console.log(e);
        }
      });
    });
  };

  // const tasks = document.querySelectorAll(".task");
  // tasks.forEach((tasks) => {
  //   tasks.addEventListener("click", () => {
  //     tasks.classList.add("task_active");
  //   });
  // });
  // const inputContainer = document.getElementById("tasks");
  // const input = document.getElementById("addNewTask");
  // input.addEventListener("keyup", (e) => {
  //   if (e.keyCode === 13) {
  //     console.log("Enter key pressed!!!!!");
  //     const newTask = document.createElement("div");
  //     newTask.classList.add("task");
  //     newTask.innerText = input.value;
  //     inputContainer.appendChild(newTask);
  //   }
  // });
  // const activity = document.querySelectorAll(".activity");
  // activity.forEach((activity) => {
  //   activity.addEventListener("mouseenter", () => {
  //     const deleteIcon = document.createElement("span");
  //     deleteIcon.classList.add("material-symbols-outlined");
  //     deleteIcon.setAttribute("id", "delete");
  //     deleteIcon.innerText = "delete";
  //     activity.appendChild(deleteIcon);
  //   });
  // });
  // activity.forEach((activity) => {
  //   activity.addEventListener("mouseleave", () => {
  //     const deleteIcon = document.getElementById("delete");
  //     deleteIcon.remove();
  //   });
  // });
  return { selectTask };
})();

export { DOMmanipulation };
