import "./styles.css";
import { createDOM } from "./createDOM";
import { logic } from "./logic";
import { manipulateDOM } from "./manipulateDOM";

createDOM.createHeader();
createDOM.createSidebar();
createDOM.createMain();
createDOM.createCard();
logic.addProjectToArray();
logic.findActiveProject();
manipulateDOM.addProjects();
logic.activateProjectSelection();
