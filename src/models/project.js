const projectSchema = (() => {
  const saveProject = (title) => {
    const _projectList = JSON.parse(localStorage.getItem('projectList')) || [];
    const _project = {};
    _project.title = title;
    _projectList.push(_project);

    localStorage.setItem('projectList', JSON.stringify(_projectList));
  };

  const retriveProject = () => {
    const projectList = new Promise((resolve, reject) => {
      if (JSON.parse(localStorage.getItem('projectList'))) {
        resolve(JSON.parse(localStorage.getItem('projectList')));
      } else {
        reject('Unable to retrive project data');
      }
    });
    return projectList;
  };

  const deleteProject = (index) => {
    const _projectList = JSON.parse(localStorage.getItem('projectList')) || [];
    _projectList.splice(index, 1);

    localStorage.setItem('projectList', JSON.stringify(_projectList));
  };

  const deleteAllProjects = () => {
    localStorage.removeItem('projectList');
  };

  return {
    saveProject,
    retriveProject,
    deleteProject,
    deleteAllProjects,
  };
})();

export default projectSchema;
