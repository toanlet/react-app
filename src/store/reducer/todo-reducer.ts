import { v4 } from 'uuid';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FILTER_TODO } from '../constant';
import { Todo } from 'src/context/todo-context';

const ListTodo: Todo[] = [];

const initialState = {
  todos: ListTodo,

  filterBy: '',
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: v4(),
            title: action.payload.title,
            completed: false,
            description: action.payload.description,
          },
        ],
      };
    case UPDATE_TODO:
      const newTodo = state.todos.map((el: any) => {
        if (el.id === action.payload.id) {
          return { ...el, completed: action.payload.completed };
        }

        return { ...el };
      });

      return {
        ...state,
        todos: [...newTodo],
      };

    case DELETE_TODO:
      const filter = state.todos.filter((el: any) => el.id !== action.id);

      return {
        ...state,
        todos: [...filter],
      };

    case FILTER_TODO:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};
