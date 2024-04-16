import { populateStorage } from "./persistentStorage";

export function getUserProjectInputs() {
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
    return { projectName, projectDueDate, projectDescription, priority };
}


export function createProject(name, dueDate, description, priority) {
    const projectContainer = document.createElement("div");
    const projectContainerHeader = document.createElement("h1");
    const projectContainerPriority = document.createElement("h2");
    const projectContainerDueDate = document.createElement("h2");
    const projectContainerDescription = document.createElement("p");

    projectContainer.appendChild(projectContainerHeader);
    projectContainer.appendChild(projectContainerPriority);
    projectContainer.appendChild(projectContainerDueDate);
    projectContainer.appendChild(projectContainerDescription);

    projectContainer.classList.add("projectContainer");
    projectContainerHeader.classList.add("projectContainerHeader");
    projectContainerPriority.classList.add("projectContainerPriority");
    projectContainerDueDate.classList.add("projectContainerDueDate");
    projectContainerDescription.classList.add("projectContainerDescription");

    projectContainerHeader.textContent = name;
    projectContainerPriority.textContent = priority;
    projectContainerDueDate.textContent = dueDate;
    projectContainerDescription.textContent = description;

    deleteProject(projectContainer);
    return projectContainer;
}

function deleteProject(projectContainer) {
    const deleteProjectButton = document.createElement("input");
    deleteProjectButton.value = "X"
    deleteProjectButton.setAttribute("type", "button");
    projectContainer.appendChild(deleteProjectButton);
    deleteProjectButton.classList.add("deleteButton");
    deleteProjectButton.addEventListener('click', function() {
        projectContainer.remove();
        populateStorage() 
    });
}


