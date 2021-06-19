import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { hooks as authedUserHook } from 'modules/Authentication/AuthedUser';
import {
  actions as getuserActions,
  selectors as getUserSelectors,
} from 'modules/User/GetUser';

export default () => {
  // change pers info
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { authedUser } = authedUserHook.useAuthedUser();
  const userData = useSelector(getUserSelectors.selectUser);
  const [image, setImage] = useState({
    url: null,
    file: null,
  });
  const {
    register: registerPersInfo,
    handleSubmit: handlePersInfoSubmit,
    formState: { errors: persInfoErrors, dirtyFields: persInfoDirtyFileds },
    reset,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: async () => ({ data: 'test' }),
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

  // get user
  useEffect(() => {
    dispatch(getuserActions.getUser.request(authedUser.userId));
  }, []);

  useEffect(() => {
    if (userData.statuses.isSucceed) {
      reset({
        firstName: userData.data.firstname,
        lastName: userData.data.lastname,
        email: userData.data.email,
        facebook: userData.data.facebook,
      });
    }
  }, [userData]);

  const isPersInfoButtonDisabled = Object.keys(persInfoDirtyFileds).length > 0
    || image.url !== userData.data.image;

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
    persInfoDirtyFileds,
    isPersInfoButtonDisabled: !isPersInfoButtonDisabled,
  };
};
