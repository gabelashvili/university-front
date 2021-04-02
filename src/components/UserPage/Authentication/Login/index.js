import { useState, useEffect } from 'react';
import { TextInput } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import { Div } from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e, inputName) => {
    const { value } = e.target;
    setState(() => ({
      ...state,
      [inputName]: value,
    }));
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <Div>
      <TextInput label="Email" Icon={EmailIcon} value={state.email} onChange={(e) => handleChange(e, 'email')} />
      <TextInput label="Password" Icon={PasswordIcon} value={state.password} onChange={(e) => handleChange(e, 'password')} />
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
    </Div>
  );
};

export default Login;
