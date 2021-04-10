import { constants } from 'modules/Authentication/AuthedUser';

export const authedUser = ({
  set: (user) => ({
    type: constants.SET_AUTHED_USER,
    payload: {
      firstName: user.firstName,
      token: user.token,
    },
  }),
  remove: () => {
    localStorage.removeItem('firstName');
    localStorage.removeItem('token');
    return {
      type: constants.REMOVE_AUTHED_USER,
    };
  },
});
