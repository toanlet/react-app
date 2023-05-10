import { SHOW_TOAST } from '../constant';

const initialState = {
  toast: {
    type: '',
    message: '',
    isShow: false,
  },
};

const toastReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_TOAST:
      const newState = {
        ...state,

        toast: {
          ...state.toast,
          type: action.payload.type,
          message: action.payload.message,
          isShow: !state.toast.isShow,
        },
      };

      return newState;

    default:
      return state;
  }
};
export default toastReducer;
