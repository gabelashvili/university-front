import { constants } from 'modules/University/Feed/AddNewPost';

export const addNewPost = ({
  request: (image, data) => ({
    type: constants.ADD_NEW_POST_REQUESTED,
    payload: {
      image,
      data,
    },
  }),
  succeed: (response) => ({
    type: constants.ADD_NEW_POST_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.ADD_NEW_POST_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.ADD_NEW_POST_RESET,
  }),
});
