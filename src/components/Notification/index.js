import React from 'react';
import styled from 'styled-components';
import CloseIcon from 'Icons/Close';
import { selectors as notificationSelectors, hooks as notificationHooks } from 'modules/Notification';
import { useSelector } from 'react-redux';

const Div = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  right: 20px;
  z-index: 2;
  width: max-content;
  background-color: ${({ type, theme }) => {
    if (!type || type === 'success') {
      return theme.colors.lightGreen;
    }
    return theme.colors.red;
  }};
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const IconWrapper = styled.div`
   & > svg {
    width: 24px;
    margin-left: 15px;
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
  }
`;

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
