import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWishList, createWishList } from 'src/api/wish-list';
export const getCardList = createAsyncThunk('getCardList', async () => {
  const response = await getWishList();
  return response.data;
});

export const addToCard = createAsyncThunk('addWishList', async (body: any) => {
  const response = await createWishList(body);
  return response.data;
});
