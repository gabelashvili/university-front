import { createRef } from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';
import Button from 'components/Button';
import CloseIcon from 'Icons/Close';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  & svg {
    width: 20px;
    fill: white;
  }
`;

const baseLayout = ({ children }) => {
  const notistackRef = createRef(); // or React.createRef
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <SnackbarProvider
      maxSnack={3}
      action={(key) => (
        <Button handleClick={onClickDismiss(key)} type="button">
          <IconWrapper>
            <CloseIcon />
          </IconWrapper>
        </Button>
      )}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      ref={notistackRef}
      autoHideDuration={2000}
    >
      <Header />
      {children}
    </SnackbarProvider>
  );
};

baseLayout.propTypes = {
  children: PropTypes.node,
};

export default baseLayout;
