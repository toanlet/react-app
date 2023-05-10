import { Todo } from '../../context/todo-context';
import { AddTask } from './add-todo';
import { Task } from './task';

import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { FILTER_TODO } from '../../store/constant';
import { filterTodo } from '../../utils/index';
import { useEffect, useState } from 'react';

const Todos: React.FC = () => {
  const todos = useAppSelector(
    (state: any) => state.rootReducer.todoReducer.todos
  );
  const filterBy = useAppSelector(
    (state: any) => state.rootReducer.todoReducer.filterBy
  );

  const dispatch = useAppDispatch();

  const filteredTodo = () => {
    if (filterBy === 'DONE') {
      return todos.filter((todo: Todo) => todo.completed);
    }
    if (filterBy === 'TODO') {
      return todos.filter((todo: Todo) => !todo.completed);
    }
    // if none of above return all todos
    return todos;
  };

  return (
    <div>
      Todos
      <AddTask />
      <button onClick={() => dispatch({ type: FILTER_TODO, payload: 'ALL' })}>
        All
      </button>
      <button onClick={() => dispatch({ type: FILTER_TODO, payload: 'TODO' })}>
        Todo
      </button>
      <button onClick={() => dispatch({ type: FILTER_TODO, payload: 'DONE' })}>
        Done
      </button>
      {filteredTodo().map((el: Todo) => (
        <Task {...el} key={el.id} />
      ))}
    </div>
  );
};

export default Todos;
