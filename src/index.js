import "./styles.css";
import { createDOM } from "./createDOM";
import { logic } from "./logic";

createDOM.createHeader();
createDOM.createSidebar();
createDOM.createMain();
logic.addSampleProject();
logic.addToArray();
logic.makeActive();
