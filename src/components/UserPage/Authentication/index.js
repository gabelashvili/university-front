import { useEffect, useState } from 'react';
import {
  Div, ButtonWrapper, ModalWrapper, Loader, buttonStyles, containerStyles,
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
import Container from 'components/Container';

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
    <Container costumStyles={containerStyles}>
      <Div>
        <Modal
          title="??????????????????????????? ???????????????????????????"
          showClose={!activationDetails.statuses.isPending}
          closeOnAwayClick={!activationDetails.statuses.isPending}
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        >
          <ModalWrapper>
            {activationDetails.statuses.isPending && (
            <>
              ???????????????????????? ??????????????????????????????, ??????????????? ???????????????????????? ....
              <Loader />
            </>
            )}
            {activationDetails.statuses.isSucceed && (
            <>
              ???????????????????????? ?????????????????????????????? ??????????????????????????????
              <SuccessIcon />
            </>
            )}
            {activationDetails.statuses.isFailed && (
            <>
              ???????????????????????? ?????? ??????????????????????????????
              <ErrorIcon />
            </>
            )}
          </ModalWrapper>
        </Modal>
        <ButtonWrapper>
          <Button
            bgColor={type === 'login' ? 'lightGreen' : 'darkWhite'}
            textColor={type === 'login' ? 'white' : 'black'}
            costumStyles={buttonStyles}
            type="button"
            handleClick={() => handleClick('login')}
          >
            ?????????????????????????????????
          </Button>
          <Button
            bgColor={type === 'register' ? 'lightGreen' : 'darkWhite'}
            textColor={type === 'register' ? 'white' : 'black'}
            costumStyles={buttonStyles}
            type="button"
            handleClick={() => handleClick('register')}
          >
            ?????????????????????????????????
          </Button>
        </ButtonWrapper>
        {type === 'login' && <LoginFrom />}
        {type === 'register' && <RegisterForm />}
        {type === 'forgot-password' && <ForgotPassword />}
        {type === 'reset-password' && <ResetPassword />}
      </Div>
    </Container>

  );
};

export default Authentication;
