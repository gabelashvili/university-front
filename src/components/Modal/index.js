import { useEffect, useRef } from 'react';
import CloseIcon from 'Icons/Close';
import PropTypes from 'prop-types';
import { selectors, actions } from 'modules/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  Div, ModalWrapper, Header, ModalTitle, IconWrapper,
} from 'components/Modal/styles';

const Modal = ({
  title, children, showClose, closeOnAwayClick, costumeStyles, costumeCloseIcon,
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectors.selectModalState);
  const handleClick = () => {
    dispatch(actions.setModalState.close());
  };
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (!modalRef?.current?.contains(e.target)) {
      if (closeOnAwayClick) {
        dispatch(actions.setModalState.close());
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnAwayClick]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <>
      {isOpen && (
      <Div>
        <ModalWrapper ref={modalRef} costumeStyles={costumeStyles}>
          <Header>
            <ModalTitle>{title}</ModalTitle>
            {showClose && (
            <IconWrapper onClick={handleClick}>
              {costumeCloseIcon || <CloseIcon />}
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
  costumeCloseIcon: PropTypes.node,
  showClose: PropTypes.bool,
  closeOnAwayClick: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  costumeStyles: PropTypes.any,
};

export default Modal;
