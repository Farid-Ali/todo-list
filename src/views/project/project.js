import createProject from '../../controllers/projectController';
import cssUtil from '../../util/cssUtil/cssUtil';

const defaultState = (() => {
  const project = () => {
    const defaultProjects = document.querySelector('.default-project');
    const inbox = createProject('Inbox');
    defaultProjects.appendChild(inbox.getProject());

    const newProjectForm = document.querySelector('#new-project-form');
    newProjectForm.classList.add('display-none');
  };

  return {
    project,
  };
})();

function init() {
  defaultState.project();
}

function addCustomProject() {
  const newProjectBtn = document.querySelector('#new-project-btn');
  const newProjectForm = document.querySelector('#new-project-form');
  const newProjectTitle = document.querySelector('#project-title');
  const projectCreationSubmitBtn = document.querySelector(
    '#project-creation-submit-btn'
  );

  newProjectBtn.addEventListener('click', function () {
    cssUtil.toggleVisibility(newProjectBtn);
    cssUtil.toggleVisibility(newProjectForm);
  });

  projectCreationSubmitBtn.addEventListener('click', function () {
    if (newProjectTitle.value.length > 0) {
      const newProject = createProject(newProjectTitle.value);
      cssUtil.toggleVisibility(newProjectBtn);
      cssUtil.toggleVisibility(newProjectForm);

      const projectList = document.querySelector('.projects');
      projectList.appendChild(newProject.getProject());
    }
  });
}

export default function appendProject() {
  init();
  addCustomProject();
}
