import { createSlice } from '@reduxjs/toolkit';
import {
  ADD_TO_CARD,
  DELETE_CARD,
  IS_CHECK,
  UPDATE_QUALITY,
} from '../constant';

export interface ICard {
  title: string;
  description: string;
  price: number;
  imageURL: string;
  quality: number;
  id: string;
  amount?: number;
  isCheck?: boolean;
}

export interface CardState {
  cardList: ICard[];
}
const cardList = localStorage.getItem('card');

const initialState: CardState = {
  cardList: (cardList && JSON.parse(cardList)) || [],
};

export const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const index = state.cardList.findIndex(
        (el: ICard) => el.id === action.payload.id
      );

      if (index !== -1) {
        const oldItem = state.cardList.map((el: ICard) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              quality: action.payload.quality + el.quality,
              amount: el.price * action.payload.quality,
            };
          }
          return {
            ...el,
          };
        });
        localStorage.setItem('card', JSON.stringify([...oldItem]));

        return {
          ...state,
          cardList: oldItem,
        };
      } else {
        const newList = [...state.cardList, action.payload];
        localStorage.setItem('card', JSON.stringify([...newList]));
        return {
          ...state,
          cardList: newList,
        };
      }

    case UPDATE_QUALITY:
      const tempUpdate = [...state.cardList];
      const itemUpdate = tempUpdate.map((el: ICard) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            quality: action.payload.quality,
            amount: action.payload.quality * el.price,
            isCheck: action.payload.isCheck,
          };
        }
        return { ...el };
      });

      localStorage.setItem('card', JSON.stringify([...itemUpdate]));
      return {
        ...state,
        cardList: itemUpdate,
      };

    case DELETE_CARD:
      const temp = [...state.cardList];

      const result = temp.filter((el: any) => el.id !== action.id);
      return {
        ...state,
        cardList: result,
      };

    case IS_CHECK:
      const isChecked = [...state.cardList];
      const updateChecked = isChecked.map((el: any) => {
        if (el.id === action.payload.id) {
          return { ...el, isCheck: action.payload.isCheck };
        }
        return { ...el };
      });

      return { ...state, cardList: updateChecked };

    default:
      return state;
  }
};
