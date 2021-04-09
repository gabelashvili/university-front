import { constants } from 'modules/Authentication/AuthedUser';

const initialState = {
  isAuthed: false,
};

const authedUser = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_AUTHED_USER:
      return {
        ...initialState,
        isAuthed: true,
        firstName: action.payload.firstName,
        token: action.payload.token,
      };
    case constants.REMOVE_AUTHED_USER:
      return initialState;
    default:
      return state;
  }
};

export default authedUser;
