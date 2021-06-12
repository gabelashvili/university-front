import { constants } from 'modules/University/Feed/FetchedPosts';

export const fetchedPosts = ({
  updateList: (data) => ({
    type: constants.UPDATE_FETCHED_POSTS_LIST,
    payload: data,
  }),
  removePost: (postId) => ({
    type: constants.REMOVE_POST,
    payload: postId,
  }),
  addPost: (data) => ({
    type: constants.ADD_POST,
    payload: data,
  }),
  updatePost: (data) => ({
    type: constants.UPDATE_POST,
    payload: data,
  }),
  setComments: (data) => ({
    type: constants.SET_COMMENTS_POST,
    payload: data,
  }),
  resetComments: (postId) => ({
    type: constants.RESET_COMMENTS_POST,
    payload: postId,
  }),
  resetList: () => ({
    type: constants.RESET_FETCHED_POST,
  }),
});
