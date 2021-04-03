import { Div, ButtonWrapper } from 'components/UserPage/Authentication/styles';
import Button from 'components/Button';
import {
  useParams,
  useHistory,
} from 'react-router-dom';

import LoginFrom from 'components/UserPage/Authentication/Login';
import RegisterForm from 'components/UserPage/Authentication/Register';

const Authentication = () => {
  const { type } = useParams();
  const history = useHistory();
  const handleClick = (params) => {
    history.push(`/user/${params}`);
  };
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
