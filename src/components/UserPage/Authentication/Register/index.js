import { useState, useEffect } from 'react';
import { TextInput } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import UserIconLight from 'Icons/UserIconLight';
import { Div } from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';
import { actions as registerActions, selectors as registrationSelectors } from 'modules/Register';
import { hooks as notificationHooks } from 'modules/Notification';
import { useDispatch, useSelector } from 'react-redux';
import {
  useHistory,
} from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const { statuses } = useSelector(registrationSelectors.selectRegisterUser);
  const notification = notificationHooks.useNotification();
  const history = useHistory();

  useEffect(() => {
    if (statuses.isFailed) {
      notification.open({
        type: 'error',
        duration: 1000,
        text: 'Someting Went Wrong',
      });
    }
    if (statuses.isSucceed) {
      notification.open({
        duration: 1000,
        text: 'Successfully registered',
      });
      history.push('/user/login');
    }
  }, [statuses]);

  const [state, setState] = useState({});
  const handleChange = (e) => {
    const { value, checked, name } = e.target;
    setState(() => ({
      ...state,
      [name]: name === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = () => {
    dispatch(registerActions.register.request(state));
  };
  return (
    <Div>
      <TextInput label="Firstname" Icon={UserIconLight} value={state.firstName || ''} onChange={handleChange} name="firstName" />
      <TextInput label="Lastname" Icon={UserIconLight} value={state.lastName || ''} onChange={handleChange} name="lastName" />
      <TextInput label="Email" Icon={EmailIcon} value={state.email || ''} onChange={handleChange} name="email" />
      <TextInput label="Password" Icon={PasswordIcon} value={state.password || ''} onChange={handleChange} type="password" name="password" />
      <TextInput label="Repeat Passwod" Icon={PasswordIcon} value={state.repeatPassword || ''} onChange={handleChange} type="password" name="repeatPassword" />
      <Button
        bgColor="lightGreen"
        textColor="white"
        padding="10px 20px"
        borderRadius="3px"
        fontWeight={600}
        type="button"
        cursorType="pointer"
        marginRight="1px"
        hoverBgColor="black"
        handleClick={() => handleSubmit()}
        isLoading={statuses.isPending}
      >
        Register
      </Button>
    </Div>
  );
};

export default Register;
