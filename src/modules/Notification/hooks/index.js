import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as notificationActions, selectors as notificationSelectors } from 'modules/Notification';

export const useNotification = () => {
  const dispatch = useDispatch();
  const {
    isOpen,
    duration: notificationDuration,
  } = useSelector(notificationSelectors.selectNotification);

  const showNotication = ({ type, duration, text }) => {
    dispatch(notificationActions.changeState.open({ type, duration, text }));
  };
  const hideNotification = () => {
    dispatch(notificationActions.changeState.close());
  };

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        hideNotification();
      }, notificationDuration);
      return () => clearTimeout(timeout);
    }
    return null;
  }, [isOpen]);

  return {
    open: ({ type, duration, text }) => showNotication({ type, duration, text }),
    close: () => hideNotification(),
  };
};
