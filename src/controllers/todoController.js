function createTodo(title, description, dueDate, priority) {
  const _todo = document.createElement('div');
  _todo.style.border = '2px solid orange';
  _todo.style.width = '4000px';

  const getTodo = () => _todo;

  function _setTodoFields() {
    const todoTitle = document.createElement('h1');
    todoTitle.textContent = title;
    _todo.appendChild(projectTitle);

    const actions = document.createElement('input');
    actions.type = 'checkbox';
    _todo.appendChild(actions);
  }
  _setProjectFields();

  return {
    getTodo,
  };
}

export default createTodo;
