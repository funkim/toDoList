
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
        return {projectName, projectDueDate, projectDescription, priority}
}

export function createProject(name, dueDate, description, priority) {
    const projectForm = document.querySelector('.addNewProjectPage');
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
deleteProject(projectContainer);

projectContainerHeader.innerHTML = name
projectContainerPriority.innerHTML = priority 
projectContainerDueDate.innerHTML = dueDate
projectContainerDescription.innerHTML= description
projectForm.classList.add()
}

function deleteProject(projectContainer) {
    const deleteProjectButton = document.createElement("input");0
    deleteProjectButton.setAttribute("type", "button");
    projectContainer.appendChild(deleteProjectButton);

    deleteProjectButton.addEventListener('click', function() {
    projectContainer.remove();
    }
)}

export function createProjectListener() {
const createProjectButton = document.querySelector('.createNewProject')
const landingPage = document.querySelector(".landingPage")
const projectForm = document.querySelector('.addNewProjectPage')

createProjectButton.addEventListener('click', function() {
    landingPage.classList.add("hidden")
    projectForm.classList.remove("hidden")
})
}

export function dragAndDrop() {
    const draggableProject = document.querySelectorAll('.projectContainer')
    draggableProject.forEach(project => {
        project.addEventListener('dragstart', () =>{
project.classList.add('dragging')

        })
    project.addEventListener('dragend', () =>{
project.classList.remove('dragging')
        });
    });
}