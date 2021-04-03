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

const Register = () => {
  const dispatch = useDispatch();
  const { statuses } = useSelector(registrationSelectors.selectRegisterUser);
  const notification = notificationHooks.useNotification();
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
    }
  }, [statuses]);

  const [state, setState] = useState({});
  const handleChange = (e, inputName) => {
    const { value, checked } = e.target;
    setState(() => ({
      ...state,
      [inputName]: inputName === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = () => {
    dispatch(registerActions.register.request(state));
  };
  return (
    <Div>
      <TextInput label="სახელი" Icon={UserIconLight} value={state.firstName || ''} onChange={(e) => handleChange(e, 'firstName')} />
      <TextInput label="გვარი" Icon={UserIconLight} value={state.lastName || ''} onChange={(e) => handleChange(e, 'lastName')} />
      <TextInput label="Email" Icon={EmailIcon} value={state.email || ''} onChange={(e) => handleChange(e, 'email')} />
      <TextInput label="პაროლი" Icon={PasswordIcon} value={state.password || ''} onChange={(e) => handleChange(e, 'password')} type="password" />
      <TextInput label="გაიმეორე პაროლი" Icon={PasswordIcon} value={state.repeatPassword || ''} onChange={(e) => handleChange(e, 'repeatPassword')} type="password" />
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
