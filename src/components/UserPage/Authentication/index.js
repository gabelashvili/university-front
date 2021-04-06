import { useEffect } from 'react';
import {
  Div, ButtonWrapper, ModalWrapper, Loader,
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
import Modal from 'components/Modal';
import { actions as modalActions } from 'modules/Modal';
import SuccessIcon from 'Icons/Success';
import ErrorIcon from 'Icons/Error';

const Authentication = () => {
  const { type } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
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
      dispatch(modalActions.setModalState.open());
    }
  }, [activationDetails]);
  return (
    <Div>
      <Modal title="Account Activation" showClose={!activationDetails.statuses.isPending}>
        <ModalWrapper>
          {activationDetails.statuses.isPending && (
            <>
              Your account is activating, please wait a few seconds ....
              <Loader />
            </>
          )}
          {activationDetails.statuses.isSucceed && (
            <>
              Your accound has been Successfully activated
              <SuccessIcon />
            </>
          )}
          {activationDetails.statuses.isFailed && (
            <>
              Account activation failed
              <ErrorIcon />
            </>
          )}
        </ModalWrapper>
      </Modal>
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
