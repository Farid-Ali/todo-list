import project from './project/project';
import todo from './todo/todo';

function init() {
  project.addProject();
  todo.addTodo();
}
export default init;
