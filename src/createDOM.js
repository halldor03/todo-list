const createDOM = (() => {
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

    const projects = document.createElement("div");
    projects.setAttribute("id", "projects");
    sidebar.appendChild(projects);

    const modifyingProjects = document.createElement("form");
    modifyingProjects.classList.add("modifyingProjects");
    sidebar.appendChild(modifyingProjects);

    const addProjectInput = document.createElement("input");
    addProjectInput.setAttribute("type", "text");
    addProjectInput.setAttribute("name", "addProjectInput");
    addProjectInput.setAttribute("id", "addProjectInput");
    addProjectInput.setAttribute("placeholder", "Add new project");
    addProjectInput.setAttribute("maxlength", "25");
    addProjectInput.setAttribute("autocomplete", "off");
    addProjectInput.setAttribute("spellcheck", "false");
    modifyingProjects.appendChild(addProjectInput);

    const addProjectLogo = document.createElement("button");
    addProjectLogo.classList.add("material-symbols-outlined");
    addProjectLogo.setAttribute("type", "reset");
    addProjectLogo.classList.add("addProject");
    addProjectLogo.innerText = "add";
    modifyingProjects.appendChild(addProjectLogo);
  };

  const createMain = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const projectCard = document.createElement("div");
    projectCard.classList.add("projectCard");
    main.appendChild(projectCard);

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("taskTitle");
    taskTitle.innerText = "Sample project nr 1";
    projectCard.appendChild(taskTitle);

    const modifyingTask = document.createElement("form");
    modifyingTask.classList.add("modifyingTask");
    projectCard.appendChild(modifyingTask);

    const addTaskInput = document.createElement("input");
    addTaskInput.setAttribute("type", "text");
    addTaskInput.setAttribute("name", "addTaskInput");
    addTaskInput.setAttribute("id", "addTaskInput");
    addTaskInput.setAttribute("placeholder", "Add new task");
    addTaskInput.setAttribute("autocomplete", "off");
    addTaskInput.setAttribute("spellcheck", "false");
    modifyingTask.appendChild(addTaskInput);

    const addTaskLogo = document.createElement("button");
    addTaskLogo.classList.add("material-symbols-outlined");
    addTaskLogo.setAttribute("type", "reset");
    addTaskLogo.innerText = "add";
    modifyingTask.appendChild(addTaskLogo);

    const tasks = document.createElement("div");
    tasks.setAttribute("id", "tasks");
    projectCard.appendChild(tasks);

    const task = document.createElement("div");
    task.classList.add("task");
    task.innerText = "Sample task nr 1";
    tasks.appendChild(task);
  };
  return { createHeader, createSidebar, createMain };
})();

export { createDOM };
