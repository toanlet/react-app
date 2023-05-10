import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FILTER_TODO } from '../constant';

export interface Todo {
  id: string;
  title: string;
  description: string;
  complete: boolean;
}

export const addTodo = (payload: Todo) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const udpateTodo = (payload: Todo) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload: Todo) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const filterTodo = (payload: string) => {
  return {
    type: FILTER_TODO,
    payload,
  };
};
