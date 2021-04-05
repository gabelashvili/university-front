import { useEffect, useRef } from 'react';
import { TextInput } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import UserIconLight from 'Icons/UserIconLight';
import { Form } from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';
import { actions as registerActions, selectors as registrationSelectors } from 'modules/Authentication/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

const Register = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });
  const password = useRef({});
  password.current = watch('password', '');
  const { statuses } = useSelector(registrationSelectors.selectRegisterUser);
  useEffect(() => {
    if (statuses.isFailed) {
      enqueueSnackbar('Somethin went wrong', {
        variant: 'error',
      });
    }
    if (statuses.isSucceed) {
      enqueueSnackbar('Successfully registered. Please check you email', {
        variant: 'success',
      });
    }
  }, [statuses]);

  const onSubmit = (data) => {
    dispatch(registerActions.register.request(data));
  };
  const onSubmitError = () => {
    enqueueSnackbar('Please fill all the fields', {
      variant: 'error',
    });
  };
  return (
    <Form>
      <TextInput
        isError={!!errors.firstName}
        label="Firstname"
        Icon={UserIconLight}
        {...register('firstName', { required: true, maxLength: 18, minLength: 2 })}
      />
      <TextInput
        isError={!!errors.lastName}
        label="Lastname"
        Icon={UserIconLight}
        name="lastName"
        {...register('lastName', { required: true, maxLength: 18, minLength: 2 })}
      />
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
        label="Password"
        Icon={PasswordIcon}
        type="password"
        {...register('password', { required: true, minLength: 8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9\d#?!@$%^&*-]{8,}$/ })}
      />
      <TextInput
        isError={!!errors.repeatPassword}
        label="Repeat Passwod"
        Icon={PasswordIcon}
        type="password"
        {...register('repeatPassword', {
          validate: (value) => value === password.current,
          required: true,
        })}
      />
      <Button
        bgColor="lightGreen"
        textColor="white"
        padding="10px 20px"
        borderRadius="3px"
        fontWeight={600}
        cursorType="pointer"
        marginRight="1px"
        hoverBgColor="black"
        type="button"
        handleClick={handleSubmit(onSubmit, onSubmitError)}
      >
        Register
      </Button>
    </Form>
  );
};

export default Register;
