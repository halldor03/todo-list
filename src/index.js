import "./styles.css";
import { createHome } from "./createHome";
import { tasksMethods } from "./tasks";
import { manipulateDOM } from "./manipulateDOM";

createHome.createHeader();
createHome.createSidebar();
createHome.createMain();
tasksMethods.addSampleTask();
tasksMethods.addToArray();
manipulateDOM.addTasks();
// tasksMethods.makeActive();
