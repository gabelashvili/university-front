import React from 'react';
import CloseIcon from 'Icons/Close';
import PropTypes from 'prop-types';
import { selectors, actions } from 'modules/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  Div, ModalWrapper, Header, ModalTitle, IconWrapper,
} from 'components/Modal/styles';

const Modal = ({
  title, children, showClose,
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectors.selectModalState);
  const handleClick = () => {
    dispatch(actions.setModalState.close());
  };
  return (
    <>
      {isOpen && (
      <Div>
        <ModalWrapper>
          <Header>
            <ModalTitle>{title}</ModalTitle>
            {showClose && (
            <IconWrapper onClick={handleClick}>
              <CloseIcon />
            </IconWrapper>
            )}
          </Header>
          {children}
        </ModalWrapper>
      </Div>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  showClose: PropTypes.bool,
};

export default Modal;
