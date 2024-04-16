import { getUserProjectInputs, createProject } from "./projectManager.js";
import { createProjectListener, dragAndDrop, appendProjectToDOM, showLandingPage } from "./uiManager.js";
import { populateStorage, retrieveProjects } from "./persistentStorage.js";
import { style } from "./style.css";

    createProjectListener();
    dragAndDrop();
    retrieveProjects();



const projectSubmit = document.getElementById("projectCreator");
projectSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    const { projectName, projectDueDate, projectDescription, priority } = getUserProjectInputs();
    const project = createProject(projectName, projectDueDate.value, projectDescription, priority);
    appendProjectToDOM(project);
    showLandingPage();
});

