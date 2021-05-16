import { useRef } from 'react';
import { InputWrapper, buttonStyle } from 'components/UserPage/Authentication/ResetPassword/styles';
import PasswordIcon from 'Icons/Password';
import { TextInput } from 'components/Inputs/';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';

const ResetPassword = () => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = () => {
    console.log('submiot');
  };
  const onErrorSubmit = () => {
    console.log('error');
  };
  return (
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
  );
};

export default ResetPassword;
