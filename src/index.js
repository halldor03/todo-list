import "./styles.css";
import { createDOM } from "./createDOM";
import { logic } from "./logic";

createDOM.createHeader();
createDOM.createSidebar();
createDOM.createMain();
createDOM.createCard();
logic.addProjectToArray();
logic.addSampleProject();
logic.projectMakeActive();
logic.addTaskToArray();
