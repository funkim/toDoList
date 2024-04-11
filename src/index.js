import { getUserInputs } from "./todo"; 
import { createProject } from "./todo";

const projectSubmit = document.getElementById("projectCreator");
projectSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    const { projectName, projectDueDate, projectDescription, priority } = getUserInputs();
    createProject(projectName,  projectDueDate.value, projectDescription, priority );
});