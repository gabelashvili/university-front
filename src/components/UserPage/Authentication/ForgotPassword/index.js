import { useState, useEffect } from 'react';
import {
  Wrapper, buttonStyle, Title, Desc,
} from 'components/UserPage/Authentication/ForgotPassword/styles';
import EmailIcon from 'Icons/Email';
import { useForm } from 'react-hook-form';
import { TextInput } from 'components/Inputs/';
import Button from 'components/Button';
import { actions as forgotPasswordActions, selectors as forgotPasswordSelectors } from 'modules/Authentication/ForgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const forgotPasswordState = useSelector(forgotPasswordSelectors.selectForgotPassword);
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState(0);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });
  const onSubmit = (data) => {
    if (step === 0) {
      dispatch(forgotPasswordActions.forgotPassword.request(data.email));
    }
  };
  const onErrorSubmit = () => {
    enqueueSnackbar('შეავსეთ ყველა სავალდებულო ველი', {
      variant: 'error',
    });
  };

  useEffect(() => {
    if (forgotPasswordState.statuses.isFailed) {
      enqueueSnackbar('მომხმარებელი არ მოიძებნა', {
        variant: 'error',
      });
    }
    if (forgotPasswordState.statuses.isSucceed) {
      setStep(1);
    }
  }, [forgotPasswordState]);
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
          isLoading={forgotPasswordState.statuses.isPending}
        >
          გაგრძელება
        </Button>
      </>
      )}
      {step === 1 && <Desc>პაროლის აღსაღდგენად გთხოვთ შეამოწმოთ თქვენი ელ-ფოსტა.</Desc>}
    </Wrapper>
  );
};

export default ForgotPassword;
