import React, { useState, useRef } from 'react';
import {
  Wrapper, buttonStyle, Title, Desc, InputWrapper,
} from 'components/UserPage/Authentication/ResetPassword/styles';
import EmailIcon from 'Icons/Email';
import { useForm } from 'react-hook-form';
import { TextInput } from 'components/Inputs/';
import Button from 'components/Button';
import PasswordIcon from 'Icons/Password';

const ResetPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState(2);
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = () => {
    console.log('Submited');
  };
  const onErrorSubmit = () => {
    console.log('errorSubmit');
  };
  return (
    <Wrapper>
      {step === 0 && (
      <>
        <Title>პაროლის აღსაღდგენად შეიყვანეთ E-mail - ი</Title>
        <TextInput
          isError={!!errors.email}
          label="Email"
          Icon={EmailIcon}
          placeholder="Email"
          name="email"
          {...register('email', {
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <Button
          bgColor="lightGreen"
          hoverBgColor="black"
          type="button"
          handleClick={handleSubmit(onSubmit, onErrorSubmit)}
          costumStyles={buttonStyle}
        >
          გაგრძელება
        </Button>
      </>
      )}
      {step === 1 && <Desc>პაროლის აღსაღდგენად გთხოვთ შეამოწმოთ თქვენი ელ-ფოსტა.</Desc>}
      {step === 2 && (
        <InputWrapper>
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
            hoverBgColor="black"
            type="button"
            handleClick={handleSubmit(onSubmit, onErrorSubmit)}
            costumStyles={buttonStyle}
          >
            შეცვლა
          </Button>
        </InputWrapper>
      )}

    </Wrapper>
  );
};

export default ResetPassword;
