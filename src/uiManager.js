export function createProjectListener() {
const createProjectButton = document.querySelector('.createNewProject')
const landingPage = document.querySelector(".landingPage")
const projectForm = document.querySelector('.addNewProjectPage')

createProjectButton.addEventListener('click', function() {
    landingPage.classList.add("hidden")
    projectForm.classList.remove("hidden")
})
}

export function appendProjectToDOM(project) {
    const allProjectsContainer = document.getElementById("projects");
    allProjectsContainer.appendChild(project);

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

export function showLandingPage() {
    const landingPage = document.querySelector(".landingPage");
    const projectForm = document.querySelector('.addNewProjectPage');
    projectForm.classList.add("hidden");
    landingPage.classList.remove("hidden");
}