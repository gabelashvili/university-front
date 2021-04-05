/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import {
  Div, ButtonWrapper,
} from 'components/UserPage/Authentication/styles';
import Button from 'components/Button';
import {
  useParams,
  useHistory,
} from 'react-router-dom';

import LoginFrom from 'components/UserPage/Authentication/Login';
import RegisterForm from 'components/UserPage/Authentication/Register';
import { actions as activationActions, selectors as activationSelectors } from 'modules/Authentication/ActivateAccount';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const Authentication = () => {
  const { type } = useParams();
  const history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const loadingStateRef = useRef();
  const activationDetails = useSelector(activationSelectors.selectActivationDetails);
  const handleClick = (params) => {
    history.push(`/user/${params}`);
  };
  useEffect(() => {
    const { token } = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    if (token) {
      dispatch(activationActions.activate.request(token));
    }
  }, [history]);

  useEffect(() => {
    if (activationDetails.statuses.isPending) {
      loadingStateRef.current = enqueueSnackbar('Activating', {
        variant: 'info',
        persist: true,
      });
    } else if (activationDetails.statuses.isFailed) {
      enqueueSnackbar('Activation Failed', {
        variant: 'error',
      });
      closeSnackbar(loadingStateRef.current);
    } else if (activationDetails.statuses.isSucceed) {
      enqueueSnackbar('Account Acitavted', {
        variant: 'success',
      });
      closeSnackbar(loadingStateRef.current);
    }
  }, [activationDetails]);
  return (
    <Div>
      <ButtonWrapper>
        <Button
          bgColor={type === 'login' ? 'lightGreen' : 'darkWhite'}
          textColor={type === 'login' ? 'white' : 'black'}
          padding="10px 20px"
          borderRadius="3px"
          fontWeight={600}
          type="button"
          cursorType="pointer"
          marginRight="1px"
          handleClick={() => handleClick('login')}
        >
          Login
        </Button>
        <Button
          bgColor={type === 'register' ? 'lightGreen' : 'darkWhite'}
          textColor={type === 'register' ? 'white' : 'black'}
          padding="10px 20px"
          borderRadius="3px"
          fontWeight={600}
          type="button"
          cursorType="pointer"
          handleClick={() => handleClick('register')}
        >
          Register
        </Button>
      </ButtonWrapper>
      {type === 'login' && <LoginFrom />}
      {type === 'register' && <RegisterForm />}
    </Div>
  );
};

export default Authentication;
