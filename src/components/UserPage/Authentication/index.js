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
import {
  actions as activationActions,
  selectors as activationSelectors,
} from 'modules/Authentication/ActivateAccount';
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
      <Modal
        title="ანგარიშის აქტივაცია"
        showClose={!activationDetails.statuses.isPending}
        closeOnAwayClick={!activationDetails.statuses.isPending}
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
          type="button"
          cursorType="pointer"
          handleClick={() => handleClick('register')}
        >
          რეგისტრაცია
        </Button>
      </ButtonWrapper>
      {type === 'login' && <LoginFrom />}
      {type === 'register' && <RegisterForm />}
    </Div>
  );
};

export default Authentication;
