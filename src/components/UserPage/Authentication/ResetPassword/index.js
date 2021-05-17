import { useRef, useEffect } from 'react';
import { InputWrapper, buttonStyle } from 'components/UserPage/Authentication/ResetPassword/styles';
import PasswordIcon from 'Icons/Password';
import { TextInput } from 'components/Inputs/';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actions as resetPasswordActions, selectors as resetPasswordSelector } from 'modules/Authentication/ResetPassword';
import { useSnackbar } from 'notistack';
import {
  useHistory,
} from 'react-router-dom';
import qs from 'qs';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const resetPasswordState = useSelector(resetPasswordSelector.selectResetPassword);
  const history = useHistory();
  const token = qs.parse(history.location.search, { ignoreQueryPrefix: true });
  const { enqueueSnackbar } = useSnackbar();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    dispatch(resetPasswordActions.resetPassword.request({
      password: data.password,
      rePassword: data.repeatPassword,
      token: token.resetToken,
    }));
  };
  const onErrorSubmit = () => {
    enqueueSnackbar('შეავსეთ ყველა სავალდებულო ველი', {
      variant: 'error',
    });
  };
  useEffect(() => {
    if (resetPasswordState.statuses.isFailed) {
      enqueueSnackbar(resetPasswordState.errorMessage.response.data.message, {
        variant: 'error',
      });
    }
    if (resetPasswordState.statuses.isSucceed) {
      enqueueSnackbar('პაროლი წარმატებით შეიცვალა', {
        variant: 'success',
      });
      history.push('/');
    }
  }, [resetPasswordState]);
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
