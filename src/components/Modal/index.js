import { useEffect, useRef } from 'react';
import CloseIcon from 'Icons/Close';
import PropTypes from 'prop-types';
import {
  Div, ModalWrapper, Header, ModalTitle, IconWrapper,
} from 'components/Modal/styles';

const Modal = ({
  title, children, showClose, closeOnAwayClick, costumeStyles, costumeCloseIcon, isOpen, onClose,
}) => {
  const handleClick = () => {
    onClose();
  };
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (!modalRef?.current?.contains(e.target)) {
      if (closeOnAwayClick && onClose) {
        onClose();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
    return undefined;
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
