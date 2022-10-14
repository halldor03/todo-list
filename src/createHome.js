const createHome = (() => {
  const content = document.getElementById("content");

  const createHeader = () => {
    const header = document.createElement("header");
    content.appendChild(header);

    const headerLogo = document.createElement("span");
    headerLogo.classList.add("material-symbols-outlined");
    headerLogo.innerText = "event_available";
    header.appendChild(headerLogo);

    const mainText = document.createElement("div");
    mainText.classList.add("headerText");
    mainText.innerText = "Todo List";
    header.appendChild(mainText);
  };

  const createSidebar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    content.appendChild(sidebar);

    const sidebarHeader = document.createElement("div");
    sidebarHeader.classList.add("sidebarHeader");
    sidebar.appendChild(sidebarHeader);

    const sidebarLogo = document.createElement("span");
    sidebarLogo.classList.add("material-symbols-outlined");
    sidebarLogo.innerText = "folder_open";
    sidebarHeader.appendChild(sidebarLogo);

    const sidebarTitle = document.createElement("div");
    sidebarTitle.classList.add("sidebarTitle");
    sidebarTitle.innerText = "My tasks";
    sidebarHeader.appendChild(sidebarTitle);

    const tasks = document.createElement("div");
    tasks.setAttribute("id", "tasks");
    sidebar.appendChild(tasks);

    const task = document.createElement("div");
    task.classList.add("task");
    task.innerText = "Sample task nr 1";
    tasks.appendChild(task);

    const task2 = document.createElement("div");
    task2.classList.add("task");
    task2.innerText = "Sample task nr 2";
    tasks.appendChild(task2);

    const modifyingTasks = document.createElement("div");
    modifyingTasks.classList.add("modifyingTasks");
    sidebar.appendChild(modifyingTasks);

    const addTaskInput = document.createElement("input");
    addTaskInput.setAttribute("type", "text");
    addTaskInput.setAttribute("name", "addNewTask");
    addTaskInput.setAttribute("id", "addNewTask");
    addTaskInput.setAttribute("placeholder", "Add new task");
    addTaskInput.setAttribute("maxlength", "25");
    modifyingTasks.appendChild(addTaskInput);

    const addTaskLogo = document.createElement("span");
    addTaskLogo.classList.add("material-symbols-outlined");
    addTaskLogo.innerText = "add";
    modifyingTasks.appendChild(addTaskLogo);
  };

  const createMain = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    main.appendChild(taskCard);

    const activityTitle = document.createElement("div");
    activityTitle.classList.add("activityTitle");
    activityTitle.innerText = "Sample task nr 1";
    taskCard.appendChild(activityTitle);

    const modifyingActivity = document.createElement("div");
    modifyingActivity.classList.add("modifyingActivity");
    taskCard.appendChild(modifyingActivity);

    const addActivityInput = document.createElement("input");
    addActivityInput.setAttribute("type", "text");
    addActivityInput.setAttribute("name", "addNewActivity");
    addActivityInput.setAttribute("id", "addNewActivity");
    addActivityInput.setAttribute("placeholder", "Add new activity");
    modifyingActivity.appendChild(addActivityInput);

    const addActivityLogo = document.createElement("span");
    addActivityLogo.classList.add("material-symbols-outlined");
    addActivityLogo.innerText = "add";
    modifyingActivity.appendChild(addActivityLogo);

    const activities = document.createElement("div");
    activities.setAttribute("id", "activities");
    taskCard.appendChild(activities);

    const activity = document.createElement("div");
    activity.classList.add("activity");
    activity.innerText = "Sample activity nr 1";
    activities.appendChild(activity);
  };
  return { createHeader, createSidebar, createMain };
})();

export { createHome };
