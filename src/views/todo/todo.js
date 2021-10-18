import createTodo from '../../controllers/todoController';
import cssUtil from '../../util/cssUtil/cssUtil';

const todo = (() => {
  //Init state
  (() => {
    const newTodoForm = document.querySelector('#new-todo-form');
    newTodoForm.classList.add('display-none');
  })();

  function addTodo() {
    const newTodoBtn = document.querySelector('#new-todo-btn');
    const newTodoForm = document.querySelector('#new-todo-form');
    const newTodoTitle = document.querySelector('#todo-title');
    const newTodoDescription = document.querySelector('#todo-description');
    const newTodoDueDate = document.querySelector('#todo-due-date');
    const newTodoPriority = document.querySelector('#todo-priority');

    const todoCreationSubmitBtn = document.querySelector(
      '#todo-creation-submit-btn'
    );

    newTodoBtn.addEventListener('click', function () {
      cssUtil.toggleVisibility(newTodoBtn);
      cssUtil.toggleVisibility(newTodoForm);
    });

    todoCreationSubmitBtn.addEventListener('click', function () {
      if (newTodoTitle.value.length > 0) {
        const newTodo = createTodo(
          newTodoTitle.value,
          newTodoDescription.value,
          newTodoDueDate.value,
          newTodoPriority.value
        );
        cssUtil.toggleVisibility(newTodoBtn);
        cssUtil.toggleVisibility(newTodoForm);

        const todoList = document.querySelector('#todos');
        todoList.appendChild(newTodo.getTodo());
      }
    });
  }

  return {
    addTodo,
  };
})();

export default todo;
