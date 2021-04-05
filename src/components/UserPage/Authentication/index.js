import { useEffect } from 'react';
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
import { hooks as notificationHooks } from 'modules/Notification';

const Authentication = () => {
  const { type } = useParams();
  const history = useHistory();
  const notification = notificationHooks.useNotification();
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
    if (activationDetails.statuses.isFailed) {
      notification.open({
        type: 'error',
        duration: 2000,
        text: 'Account Activation Failed',
      });
    }
    if (activationDetails.statuses.isSucceed) {
      notification.open({
        duration: 2000,
        text: 'Account Activated',
      });
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
