import { getUserProjectInputs } from "./todo"; 
import { createProject } from "./todo";
import { style } from "./style.css"
const projectSubmit = document.getElementById("projectCreator");
projectSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    const { projectName, projectDueDate, projectDescription, priority } = getUserProjectInputs();
    createProject(projectName,  projectDueDate.value, projectDescription, priority );
});