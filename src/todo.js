

export function getUserInputs() {
    const projectForm = document.querySelector('.addNewProjectPage form');
    const projectName = document.getElementById('projectName').value;
    const projectDueDate = document.getElementById('projectDueDate');
    const projectDescription = document.getElementById('projectDescription').value;
    const priorityListeners = document.getElementsByName('projectPriority');        
        
    let priority = '';
        for (var i = 0; i < priorityListeners.length; i++) {
            if (priorityListeners[i].checked) {
            priority = priorityListeners[i].value;
            break;
            }
        }
        return {projectName, projectDueDate, projectDescription, priority}
}

export function createProject(name, dueDate, description, priority) {
    
    const allProjectsContainer = document.getElementById("projects");
    const projectContainer = document.createElement("div");
    const projectContainerHeader = document.createElement("h1");
    const projectContainerPriority = document.createElement("h2");
    const projectContainerDueDate = document.createElement("h2");
    const projectContainerDescription = document.createElement("p");
    allProjectsContainer.appendChild(projectContainer)
    projectContainer.appendChild(projectContainerHeader)
    projectContainer.appendChild(projectContainerPriority)
    projectContainer.appendChild(projectContainerDueDate)
    projectContainer.appendChild(projectContainerDescription)

projectContainer.classList.add("projectContainer")
projectContainerHeader.classList.add("projectContainerHeader")
projectContainerPriority.classList.add("projectContainerPriority")
projectContainerDueDate.classList.add("projectContainerDueDate")
projectContainerDescription.classList.add("projectContainerDescription")


projectContainerHeader.innerHTML = name
projectContainerPriority.innerHTML = priority 
projectContainerDueDate.innerHTML = dueDate
projectContainerDescription.innerHTML= description
}
