import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import {
  actions as removePostActions,
  selectors as removePostSelectors,
} from 'modules/University/Feed/RemovePost';
import { actions as modalActions } from 'modules/Modal';

const usePostHook = (post) => {
  const dispatch = useDispatch();
  const [addNewComment, setAddNewComment] = useState(false);
  const [selectedPostId, setselectedPostId] = useState(false);
  const { removePost } = useFetchedPostsHook();
  const removePostState = useSelector(removePostSelectors.selectRemovePost);

  // remove post

  const handlePostRemove = () => {
    dispatch(modalActions.setModalState.open());
  };

  const agreePostDelete = (postId) => {
    dispatch(removePostActions.removePost.request(postId));
    dispatch(modalActions.setModalState.close());
    setselectedPostId(postId);
  };

  const disagreePostDelete = () => {
    setselectedPostId(null);
    dispatch(modalActions.setModalState.close());
  };

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
    agreePostDelete,
    disagreePostDelete,
  };
};

export default usePostHook;
