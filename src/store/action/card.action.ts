
import {
  ADD_TO_CARD,
  DELETE_CARD,
  IS_CHECK,
  UPDATE_QUALITY,
} from '../constant';



export const card = (payload: any) => {
  return {
    type: ADD_TO_CARD,
    payload,
  };
};

export const quality = (payload: any) => {
  return {
    type: UPDATE_QUALITY,
    payload,
  };
};

export const deleteCard = (payload: any) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};

export const isChecked = (payload: any) => {
  return {
    type: IS_CHECK,
    payload,
  };
};


