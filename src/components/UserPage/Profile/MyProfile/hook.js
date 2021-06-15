import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default () => {
  // change pers info
  const { enqueueSnackbar } = useSnackbar();
  const [image, setImage] = useState(null);
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

  const handleUpload = (e) => {
    if (e.target.files[0].size > 1024 * 1024 * 2) {
      enqueueSnackbar('Max Upload File Size 2Mib', {
        variant: 'error',
      });
    } else {
      setImage({
        url: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      });
    }
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
    image,
    handleUpload,
  };
};
