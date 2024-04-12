import { getUserProjectInputs } from "./todo"; 
import { createProject } from "./todo";
import { createProjectListener } from "./todo";
import { style } from "./style.css"
const landingPage = document.querySelector(".landingPage")
const projectForm = document.querySelector('.addNewProjectPage')


createProjectListener();
const projectSubmit = document.getElementById("projectCreator");
projectSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    const { projectName, projectDueDate, projectDescription, priority } = getUserProjectInputs();
    createProject(projectName,  projectDueDate.value, projectDescription, priority );
    projectForm.classList.add("hidden")
    landingPage.classList.remove("hidden")
});