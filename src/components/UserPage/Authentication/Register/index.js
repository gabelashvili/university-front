import { useState } from 'react';
import { TextInput } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import UserIconLight from 'Icons/UserIconLight';
import { Div } from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';

const Register = () => {
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
      <TextInput label="სახელი" Icon={UserIconLight} value={state.firstName} onChange={(e) => handleChange(e, 'firstName')} />
      <TextInput label="გვარი" Icon={UserIconLight} value={state.lastName} onChange={(e) => handleChange(e, 'lastName')} />
      <TextInput label="Email" Icon={EmailIcon} value={state.email} onChange={(e) => handleChange(e, 'email')} />
      <TextInput label="პაროლი" Icon={PasswordIcon} value={state.password} onChange={(e) => handleChange(e, 'password')} type="password" />
      <TextInput label="გაიმეორე პაროლი" Icon={PasswordIcon} value={state.repeatPassword} onChange={(e) => handleChange(e, 'repeatPassword')} type="password" />
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
        Register
      </Button>
    </Div>
  );
};

export default Register;
