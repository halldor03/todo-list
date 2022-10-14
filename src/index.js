import "./styles.css";
import { createHome } from "./createHome";
import { DOMmanipulation } from "./manipulation";

createHome.createHeader();
createHome.createSidebar();
createHome.createMain();
DOMmanipulation.selectTask();
