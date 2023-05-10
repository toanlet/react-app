import { notification } from 'antd';
import { useAppSelector } from 'src/hooks';

export const ToastMessage = () => {
  const { message, type } = useAppSelector(
    (state: any) => state.rootReducer.toastReducer.toast
  );

  const handleNotificationClose = () => {
    // Handle notification close event...

    console.log('close notify', notification);
    notification.destroy();
  };

  if (message) {
    // @ts-ignore
    notification[type]({
      message: message,
      onClose: handleNotificationClose,
    });
  }

  return null;
};
