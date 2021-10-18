function createTodo(title, description, dueDate, priority) {
  const _todo = document.createElement('div');
  _todo.style.border = '2px solid orange';
  _todo.style.width = '4000px';
  const _todoTitle = document.createElement('h1');
  const _todoDescription = document.createElement('p');
  const _todoDueDate = document.createElement('p');
  const _todoPriority = document.createElement('p');
  const _actions = document.createElement('input');
  _actions.type = 'checkbox';

  const getTodo = () => _todo;

  function _setTodoFields() {
    _todoTitle.textContent = title;
    _todo.appendChild(_todoTitle);

    _todoDescription.textContent = description;
    _todo.appendChild(_todoDescription);

    _todoDueDate.textContent = dueDate;
    _todo.appendChild(_todoDueDate);

    _todoPriority.textContent = priority;
    _todo.appendChild(_todoPriority);

    _todo.appendChild(_actions);
  }
  _setTodoFields();

  return {
    getTodo,
  };
}

export default createTodo;
