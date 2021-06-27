import { useEffect, useRef } from 'react';
import { TextInput } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import UserIconLight from 'Icons/UserIconLight';
import { Form, buttonStyles } from 'components/UserPage/Authentication/Register/styles';
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
  const registerUser = useSelector(registrationSelectors.selectRegisterUser);
  useEffect(() => {
    if (registerUser.statuses.isFailed) {
      enqueueSnackbar('მოხდა შეცდომა', {
        variant: 'error',
      });
    }
    if (registerUser.statuses.isSucceed) {
      enqueueSnackbar(registerUser.data.message, {
        variant: 'success',
      });
    }
  }, [registerUser]);

  const onSubmit = (data) => {
    dispatch(registerActions.register.request(data));
  };
  const onSubmitError = () => {
    enqueueSnackbar('გთხოვთ შეავსოთ ყველა სავალდებულო ველი', {
      variant: 'error',
    });
  };
  return (
    <Form>
      <TextInput
        isError={!!errors.firstName}
        label="სახელი"
        Icon={UserIconLight}
        {...register('firstName', { required: true, maxLength: 18, minLength: 2 })}
      />
      <TextInput
        isError={!!errors.lastName}
        label="გვარი"
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
        label="პაროლი"
        Icon={PasswordIcon}
        type="password"
        {...register('password', { required: true, minLength: 8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9\d#?!@$%^&*-]{8,}$/ })}
      />
      <TextInput
        isError={!!errors.repeatPassword}
        label="გაიმეორეთ პაროლი"
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
        hoverBgColor="black"
        type="button"
        costumStyles={buttonStyles}
        handleClick={handleSubmit(onSubmit, onSubmitError)}
      >
        რეგისტრაცია
      </Button>
    </Form>
  );
};

export default Register;
