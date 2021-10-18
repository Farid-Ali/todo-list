function createProject(title) {
  const _project = document.createElement('div');
  _project.style.border = '2px solid black';
  _project.style.width = '250px';
  const _projectTitle = document.createElement('h1');
  const _actions = document.createElement('button');
  _actions.textContent = 'Actions';

  const getProject = () => _project;

  function _setProjectFields() {
    _projectTitle.textContent = title;
    _project.appendChild(_projectTitle);
    _project.appendChild(_actions);
  }
  _setProjectFields();

  return {
    getProject,
  };
}

export default createProject;
