import { useDispatch } from 'react-redux';
import {
  actions as fetchedPostsActions,
} from 'modules/University/Feed/FetchedPosts';

export default () => {
  const dispatch = useDispatch();

  const updateList = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.updateList(data));
  };

  const removePost = (postId) => {
    dispatch(fetchedPostsActions.fetchedPosts.removePost(postId));
  };

  const addPost = (postId) => {
    dispatch(fetchedPostsActions.fetchedPosts.addPost(postId));
  };

  const updatePost = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.updatePost(data));
  };

  const setComments = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.setComments(data));
  };

  const resetComments = (postId) => {
    dispatch(fetchedPostsActions.fetchedPosts.resetComments(postId));
  };

  const resetList = () => {
    dispatch(fetchedPostsActions.fetchedPosts.resetList());
  };

  const addComment = (comment) => {
    dispatch(fetchedPostsActions.fetchedPosts.addComment(comment));
  };

  const removeComment = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.removeComment(data));
  };

  const updateComment = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.updateComment(data));
  };

  const inserReplies = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.inserReplies(data));
  };

  const resetReplies = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.resetReplies(data));
  };

  const addReply = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.addReply(data));
  };

  const removeReply = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.removeReply(data));
  };

  const updateComReaction = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.updateComReaction(data));
  };

  const updatePostReaction = (data) => {
    dispatch(fetchedPostsActions.fetchedPosts.updatePostReaction(data));
  };

  return {
    updateList,
    removePost,
    addPost,
    updatePost,
    setComments,
    resetComments,
    resetList,
    addComment,
    removeComment,
    updateComment,
    inserReplies,
    resetReplies,
    addReply,
    removeReply,
    updateComReaction,
    updatePostReaction,
  };
};
