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

  return {
    updateList,
    removePost,
    addPost,
    updatePost,
  };
};
