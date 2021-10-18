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

    const projectList = document.querySelector('.projects');
    const _projectList = new Promise((resolve, reject) => {
      if (projectSchema.retriveProject()) {
        resolve(projectSchema.retriveProject());
      } else {
        reject('Unable to retrive project data');
      }
    });
    _projectList
      .then((list) => {
        list.forEach((project) => {
          const newProject = createProject(project.title);
          projectList.appendChild(newProject.getProject());
        });
      })
      .catch((e) => {
        console.log(e);
      });
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
        const projectList = document.querySelector('.projects');

        projectSchema.saveProject(newProjectTitle.value);

        const _projectList = new Promise((resolve, reject) => {
          if (projectSchema.retriveProject()) {
            resolve(projectSchema.retriveProject());
          } else {
            reject('Unable to retrive project data');
          }
        });
        _projectList
          .then((list) => {
            list.forEach((project) => {
              const newProject = createProject(project.title);
              projectList.appendChild(newProject.getProject());
            });
          })
          .catch((e) => {
            console.log(e);
          });

        cssUtil.toggleVisibility(newProjectBtn);
        cssUtil.toggleVisibility(newProjectForm);
      }
    });
  }

  return {
    addProject,
  };
})();

export default project;
