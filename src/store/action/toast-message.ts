import { SHOW_TOAST } from '../constant';

export const showToast = (payload: any) => {
  return {
    type: SHOW_TOAST,
    payload,
  };
};
