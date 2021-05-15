import { constants } from 'modules/Authentication/AuthedUser';

export const authedUser = ({
  set: (data) => ({
    type: constants.SET_AUTHED_USER,
    payload: data,
  }),
  remove: () => {
    localStorage.removeItem('authedUser');
    return {
      type: constants.REMOVE_AUTHED_USER,
    };
  },
});
