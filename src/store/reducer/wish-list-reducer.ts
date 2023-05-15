import { createReducer } from '@reduxjs/toolkit';
import { getCardList } from '../action/wish-list.action';

const initialState = {
  cardList: [],

  count: 1,
};
const wishListReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCardList.fulfilled, (state, action) => {
    state.cardList = action.payload;
  });
});
export default wishListReducer;
