import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { hooks as authedUserHook } from 'modules/Authentication/AuthedUser';
import {
  actions as getUserActions,
  selectors as getUserSelectors,
} from 'modules/User/GetUser';
import {
  actions as updateUserInfoActions,
  selectors as updateUserInfoSelectors,
} from 'modules/User/UpdateUserInfo';

import {
  actions as changePasswordActions,
  selectors as changePasswordSelectors,
} from 'modules/User/ChangePassword';

export default () => {
  // change pers info
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { authedUser, loginUser } = authedUserHook.useAuthedUser();
  const userData = useSelector(getUserSelectors.selectUser);
  const updateUserData = useSelector(updateUserInfoSelectors.selectUpdateUserInfo);
  const changePassword = useSelector(changePasswordSelectors.selectChangePassword);

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
    dispatch(updateUserInfoActions.updateUserInfo.request({
      image: image.file,
      data: {
        ...data,
        image: !image.file && image.url,
      },
    }));
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
    dispatch(changePasswordActions.changePassword.request({
      password: data.oldPassword,
      newPassword: data.newPassword,
      reNewPassword: data.repeatPassword,
    }));
  };

  // get user
  useEffect(() => {
    dispatch(getUserActions.getUser.request(authedUser.userId));
  }, []);

  useEffect(() => {
    if (userData.statuses.isSucceed) {
      reset({
        firstName: userData.data.firstname,
        lastName: userData.data.lastname,
        email: userData.data.email,
        facebook: userData.data.facebook,
      });
      setImage({
        ...image,
        url: userData.data.image,
      });
    }
  }, [userData]);

  const isPersInfoButtonDisabled = Object.keys(persInfoDirtyFileds).length > 0
    || image.url !== userData.data.image;

  useEffect(() => {
    if (updateUserData.statuses.isSucceed) {
      enqueueSnackbar('ინფორმაცია განახლდა', { variant: 'success' });
      loginUser(updateUserData.data);
      dispatch(updateUserInfoActions.updateUserInfo.reset());
    }
    if (updateUserData.statuses.isFailed) {
      enqueueSnackbar(updateUserData.errorMessage, { variant: 'error' });
      dispatch(updateUserInfoActions.updateUserInfo.reset());
    }
  }, [updateUserData]);

  useEffect(() => {
    if (changePassword.statuses.isSucceed) {
      enqueueSnackbar('პაროლი შეიცვალა', { variant: 'success' });
      dispatch(changePasswordActions.changePassword.reset());
    }
  }, [changePassword]);

  return {
    onPersInfoSubmit,
    registerPersInfo,
    handlePersInfoSubmit,
    persInfoErrors,
    registerPasswordChange,
    handlePasswordChange,
    passwordChangeErrors,
    onPasswordChangeSubmit,
    newPassword: newPasswordRef.current,
    image,
    handleUpload,
    persInfoDirtyFileds,
    isPersInfoButtonDisabled: !isPersInfoButtonDisabled,
  };
};
