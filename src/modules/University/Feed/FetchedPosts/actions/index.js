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
  addComment: (comment) => ({
    type: constants.ADD_COMMENT,
    payload: comment,
  }),
  removeComment: (data) => ({
    type: constants.REMOVE_COMMENT,
    payload: data,
  }),
  updateComment: (data) => ({
    type: constants.UPDATE_COMMENT,
    payload: data,
  }),
  inserReplies: (data) => ({
    type: constants.INSER_REPLIES_IN_COMMENT,
    payload: data,
  }),
  resetReplies: (data) => ({
    type: constants.RESET_REPLIES_IN_COMMENT,
    payload: data,
  }),
  addReply: (data) => ({
    type: constants.ADD_REPLY_IN_REPLIES_IN_COMMENT,
    payload: data,
  }),
  removeReply: (data) => ({
    type: constants.REMOVE_REPLY_IN_REPLIES_IN_COMMENT,
    payload: data,
  }),
});
