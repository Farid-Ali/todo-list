import createProject from '../../controllers/projectController';
import cssUtil from '../../util/cssUtil/cssUtil';
import projectSchema from '../../models/project';

const project = (() => {
  //Init State
  (() => {
    const defaultProject = document.querySelector('.default-project');
    const inbox = createProject('Inbox');
    defaultProject.appendChild(inbox.getProject());

    const newProjectForm = document.querySelector('#new-project-form');
    newProjectForm.classList.add('display-none');

    function initProject() {
      const projectList = document.querySelector('.projects');

      const _projectList = projectSchema.retriveProject();
      _projectList
        .then((list) => {
          list.forEach((project, index) => {
            const newProject = createProject(project.title, index);
            projectList.appendChild(newProject.getProject());
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    initProject();
  })();

  function addProject() {
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
        projectSchema.saveProject(newProjectTitle.value);

        cssUtil.toggleVisibility(newProjectBtn);
        cssUtil.toggleVisibility(newProjectForm);
        window.location.reload();
      }
    });
  }

  function deleteAllProjects() {
    const deleteAllProjectsBtn = document.querySelector(
      '#delete-all-project-btn'
    );
    deleteAllProjectsBtn.addEventListener('click', () => {
      projectSchema.deleteAllProjects();
      window.location.reload();
    });
  }
  deleteAllProjects();

  return {
    addProject,
  };
})();

export default project;
