import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import {
  actions as removePostActions,
  selectors as removePostSelectors,
} from 'modules/University/Feed/RemovePost';

const usePostHook = (post) => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const [addNewComment, setAddNewComment] = useState(false);
  const [selectedPostId, setselectedPostId] = useState(false);
  const { removePost } = useFetchedPostsHook();
  const removePostState = useSelector(removePostSelectors.selectRemovePost);

  // remove post

  const handlePostRemove = useCallback((postId) => {
    dispatch(removePostActions.removePost.request(postId));
    setselectedPostId(postId);
  }, []);

  useEffect(() => {
    if (removePostState.statuses.isSucceed && post.id === selectedPostId) {
      removePost(selectedPostId);
      setselectedPostId(null);
    }
  }, [removePostState, selectedPostId]);

  return {
    addNewComment,
    setAddNewComment,
    handlePostRemove,
  };
};

export default usePostHook;
