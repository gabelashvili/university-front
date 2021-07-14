/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { actions as loginActions, selectors as loginSelector } from 'modules/Authentication/Login';
import { useSelector, useDispatch } from 'react-redux';
import { parseJwt } from 'helpers';
import { actions as authedUserActions, selectors as authedUserSelector } from 'modules/Authentication/AuthedUser';

export const useAuthedUser = () => {
  const dispatch = useDispatch();
  const loginDetails = useSelector(loginSelector.selectLoginDetails);
  const authedUser = useSelector(authedUserSelector.selectAuthedUser);

  const requestUserLogin = (email, password) => {
    dispatch(loginActions.auth.request({ email, password }));
  };
  const loginUser = (data) => {
    const { user } = data;
    const token = data.token.split(' ')[1];
    const parsedToken = parseJwt(token);
    const localStorageData = {
      firstName: user.firstname,
      lastName: user.lastname,
      image: user.image,
      userId: parsedToken.user.id,
      universityId: parsedToken.user.UniversityId,
      exp: parsedToken.exp,
      iat: parsedToken.iat,
      token: data.token,
      universityName: user.universityName,
    };
    localStorage.setItem('authedUser', JSON.stringify(localStorageData));
    dispatch(authedUserActions.authedUser.set(localStorageData));
  };

  const logoutUser = () => {
    if (authedUser.isAuthed) {
      dispatch(authedUserActions.authedUser.remove());
      dispatch(loginActions.auth.reset());
    }
  };

  useEffect(() => {
    if (loginDetails.statuses.isSucceed) {
      loginUser(loginDetails.data);
    }
  }, [loginDetails]);

  return {
    loginDetails,
    requestUserLogin,
    loginUser,
    authedUser,
    isAuthed: authedUser.isAuthed,
    logoutUser,
  };
};
