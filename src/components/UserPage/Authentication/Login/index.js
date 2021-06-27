import { useEffect, useRef } from 'react';
import { TextInput, CheckBox } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import {
  Form, Recover, Wrapper, buttonStyles,
} from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { hooks as authedUserHook } from 'modules/Authentication/AuthedUser';
import {
  useHistory,
} from 'react-router-dom';

const Login = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { requestUserLogin, loginDetails } = authedUserHook.useAuthedUser();
  const history = useHistory();
  const logInInfoRef = useRef();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });
  const onSubmit = ({ email, password }) => {
    requestUserLogin(email, password);
  };
  const onErrorSubmit = () => {
    enqueueSnackbar('გთხოვთ შეავსოთ ყველა სავალდებულო ველი', {
      variant: 'info',
    });
  };
  useEffect(() => {
    if (loginDetails.statuses.isPending) {
      logInInfoRef.current = enqueueSnackbar('მიმდინარეობს ავტორიზაცია ...', {
        variant: 'info',
        persist: true,
      });
    }
    if (loginDetails.statuses.isSucceed) {
      enqueueSnackbar('თქვენ წარმატებით გაიარეთ ავტორიზაცია', {
        variant: 'success',
      });
      closeSnackbar(logInInfoRef.current);
    }
    if (loginDetails.statuses.isFailed) {
      enqueueSnackbar(loginDetails.errorMessage.response.data.message, {
        variant: 'error',
      });
      closeSnackbar(logInInfoRef.current);
    }
  }, [loginDetails]);

  const handleClick = (params) => {
    history.push(`/user/${params}`);
  };

  return (
    <Form>
      <TextInput
        isError={!!errors.email}
        label="Email"
        Icon={EmailIcon}
        name="email"
        {...register('email', {
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <TextInput
        isError={!!errors.password}
        label="პაროლი"
        Icon={PasswordIcon}
        type="password"
        {...register('password', { required: true, minLength: 8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9\d#?!@$%^&*-]{8,}$/ })}
      />
      <Button
        bgColor="lightGreen"
        textColor="white"
        hoverBgColor="black"
        type="button"
        costumStyles={buttonStyles}
        handleClick={handleSubmit(onSubmit, onErrorSubmit)}
      >
        ავტორიზაცია
      </Button>
      <Wrapper>
        <CheckBox
          label="დამახსოვრება"
        />
        <Recover onClick={() => handleClick('forgot-password')}>პაროლის აღდგენა</Recover>
      </Wrapper>
    </Form>
  );
};

export default Login;
