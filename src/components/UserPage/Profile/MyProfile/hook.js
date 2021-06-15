import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  // change pers info
  const {
    register: registerPersInfo,
    handleSubmit: handlePersInfoSubmit,
    formState: { errors: persInfoErrors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });

  const onPersInfoSubmit = (data) => {
    console.log(data);
  };
  const onPersInfoSubmitError = (persInfoErrors) => {
    console.log(persInfoErrors, 'ერორებია');
  };

  // change password
  const newPasswordRef = useRef();
  const {
    register: registerPasswordChange,
    handleSubmit: handlePasswordChange,
    formState: { errors: passwordChangeErrors },
    watch,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });

  newPasswordRef.current = watch('newPassword', '');

  const onPasswordChangeSubmit = (data) => {
    console.log(data);
  };
  const onPassworChangeSubmitError = (error) => {
    console.log(error, 'ერორებია');
  };

  return {
    onPersInfoSubmit,
    onPersInfoSubmitError,
    registerPersInfo,
    handlePersInfoSubmit,
    persInfoErrors,
    registerPasswordChange,
    handlePasswordChange,
    passwordChangeErrors,
    onPasswordChangeSubmit,
    onPassworChangeSubmitError,
    newPassword: newPasswordRef.current,
  };
};
