/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { TextInput, CheckBox } from 'components/Inputs/';
import EmailIcon from 'Icons/Email';
import PasswordIcon from 'Icons/Password';
import { Form } from 'components/UserPage/Authentication/Login/styles';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });
  const onSubmit = (data) => {
    console.log(data);
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
        label="Password"
        Icon={PasswordIcon}
        type="password"
        {...register('password', { required: true, minLength: 8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9\d#?!@$%^&*-]{8,}$/ })}
      />
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
        handleClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
      <CheckBox
        label="Remember Me"
        {...register('checkbox', { required: true })}
        isError={!!errors.checkbox}
      />
    </Form>
  );
};

export default Login;
