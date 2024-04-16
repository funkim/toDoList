import { createProject} from "./projectManager";
import { appendProjectToDOM } from "./uiManager.js";

export function populateStorage() {
const projects = document.getElementsByClassName("projectContainer");
const projectsData = Array.from(projects).map(project => ({
    name: project.querySelector(".projectContainerHeader").textContent,
    priority: project.querySelector(".projectContainerPriority").textContent,
    dueDate: project.querySelector(".projectContainerDueDate").textContent,
    description: project.querySelector(".projectContainerDescription").textContent
}));
console.log(JSON.stringify(projectsData))
localStorage.setItem("projects", JSON.stringify(projectsData));
}

export function retrieveProjects() {
const projectsData = JSON.parse(localStorage.getItem("projects")) || [];

projectsData.forEach(projectData => {
const project = createProject(
    projectData.name,
    projectData.dueDate,
    projectData.description,
    projectData.priority
);
appendProjectToDOM(project)
});
}

