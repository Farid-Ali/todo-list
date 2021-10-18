function createProject(title) {
  const _project = document.createElement('div');
  _project.style.border = '2px solid black';
  _project.style.width = '250px';

  const getProject = () => _project;

  function _setProjectFields() {
    const projectTitle = document.createElement('h1');
    projectTitle.textContent = title;
    _project.appendChild(projectTitle);

    const actions = document.createElement('button');
    actions.textContent = 'Actions';
    _project.appendChild(actions);
  }
  _setProjectFields();

  return {
    getProject,
  };
}

export default createProject;
