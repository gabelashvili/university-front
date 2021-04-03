import React from 'react';
import CloseIcon from 'Icons/Close';
import { selectors as notificationSelectors, hooks as notificationHooks } from 'modules/Notification';
import { useSelector } from 'react-redux';
import { Div, IconWrapper } from 'components/Notification/styles';

const Notification = () => {
  const { isOpen, type, text } = useSelector(notificationSelectors.selectNotification);
  const notification = notificationHooks.useNotification();

  return (
    <>
      {isOpen && (
      <Div type={type}>
        {text}
        <IconWrapper onClick={() => notification.close()}>
          <CloseIcon />
        </IconWrapper>
      </Div>
      )}
    </>
  );
};

export default Notification;
