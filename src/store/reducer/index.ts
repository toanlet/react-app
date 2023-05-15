import { cardReducer } from './card-reducer';
import toastReducer from './toast-message';
import { combineReducers } from 'redux';
import { todoReducer } from './todo-reducer';
import wishListReducer from './wish-list-reducer';

const rootReducer = combineReducers({
  todoReducer,
  toastReducer,
  cardReducer,
  wishListReducer,
});

export default rootReducer;
