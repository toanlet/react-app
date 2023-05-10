import { Todo } from 'src/context/todo-context';

export const filterTodo = (type = 'ALL', list: Todo[]) => {
  if (type === 'ALL') {
    return [...list];
  } else if (type === 'DONE') {
    return list.filter((el: Todo) => el.completed);
  } else {
    return list.filter((el: Todo) => !el.completed);
  }
};
