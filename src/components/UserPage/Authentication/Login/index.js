import { useState } from 'react';
import { TextInput, CheckBox } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import { Div } from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';

const Login = () => {
  const [state, setState] = useState({});
  const handleChange = (e, inputName) => {
    const { value, checked } = e.target;
    setState(() => ({
      ...state,
      [inputName]: inputName === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Div>
      <TextInput label="Email" Icon={EmailIcon} value={state.email} onChange={(e) => handleChange(e, 'email')} />
      <TextInput label="Password" Icon={PasswordIcon} value={state.password} onChange={(e) => handleChange(e, 'password')} type="password" />
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
      >
        Login
      </Button>
      <CheckBox handleChange={(e) => handleChange(e, 'checkbox')} isChecked={state.checkbox} label="Remember Me" />
    </Div>
  );
};

export default Login;
