import { cardReducer } from './card-reducer';
import toastReducer from './toast-message';
import { combineReducers } from 'redux';
import { todoReducer } from './todo-reducer';

const rootReducer = combineReducers({
  todoReducer,
  toastReducer,
  cardReducer,
});

export default rootReducer;
