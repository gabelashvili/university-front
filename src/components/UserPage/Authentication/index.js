import { useEffect, useState } from 'react';
import {
  Div, ButtonWrapper, ModalWrapper, Loader,
} from 'components/UserPage/Authentication/styles';
import Button from 'components/Button';
import {
  useHistory,
} from 'react-router-dom';
import LoginFrom from 'components/UserPage/Authentication/Login';
import RegisterForm from 'components/UserPage/Authentication/Register';
import {
  actions as activationActions,
  selectors as activationSelectors,
} from 'modules/Authentication/ActivateAccount';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';
import SuccessIcon from 'Icons/Success';
import ErrorIcon from 'Icons/Error';
import {
  selectors as authedUserSelector,
  hooks as authedUserHook,
} from 'modules/Authentication/AuthedUser';
import ForgotPassword from 'components/UserPage/Authentication/ForgotPassword';
import ResetPassword from 'components/UserPage/Authentication/ResetPassword';

const Authentication = () => {
  const history = useHistory();
  const authedUser = useSelector(authedUserSelector.selectAuthedUser);
  const { loginUser } = authedUserHook.useAuthedUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const type = history.location.pathname.split('/').slice(2, 3).toString();
  const dispatch = useDispatch();
  const activationDetails = useSelector(activationSelectors.selectActivationDetails);
  const handleClick = (params) => {
    history.push(`/user/${params}`);
  };
  useEffect(() => {
    if (authedUser.isAuthed === true) {
      history.push('/');
    }
  }, [authedUser]);
  useEffect(() => {
    const { token } = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    if (token) {
      dispatch(activationActions.activate.request(token));
    }
  }, [history]);

  useEffect(() => {
    if (activationDetails.statuses.isPending) {
      setModalOpen(true);
    }
    if (activationDetails.statuses.isSucceed) {
      loginUser(activationDetails.data);
    }
  }, [activationDetails]);
  return (
    <Div>
      <Modal
        title="ანგარიშის აქტივაცია"
        showClose={!activationDetails.statuses.isPending}
        closeOnAwayClick={!activationDetails.statuses.isPending}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ModalWrapper>
          {activationDetails.statuses.isPending && (
            <>
              ანგარიში აქტიურდბეა, გთხოვ დაელოდოთ ....
              <Loader />
            </>
          )}
          {activationDetails.statuses.isSucceed && (
            <>
              ანგარიში წარმატებით გააქტიურდა
              <SuccessIcon />
            </>
          )}
          {activationDetails.statuses.isFailed && (
            <>
              ანგარიში არ გააქტიურდა
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
          ავტორიზაცია
        </Button>
        <Button
          bgColor={type === 'register' ? 'lightGreen' : 'darkWhite'}
          textColor={type === 'register' ? 'white' : 'black'}
          padding="10px 20px"
          borderRadius="3px"
          fontWeight={600}
          marginRight="1px"
          type="button"
          cursorType="pointer"
          handleClick={() => handleClick('register')}
        >
          რეგისტრაცია
        </Button>
      </ButtonWrapper>
      {type === 'login' && <LoginFrom />}
      {type === 'register' && <RegisterForm />}
      {type === 'forgot-password' && <ForgotPassword />}
      {type === 'reset-password' && <ResetPassword />}
    </Div>
  );
};

export default Authentication;
