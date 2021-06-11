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
});
