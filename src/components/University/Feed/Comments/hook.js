/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectors as removeCommentSelectors,
  actions as removeCommentActions,
} from 'modules/University/Feed/RemoveComment';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';

export default () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [comId, setComid] = useState(null);
  const [postId, setPostId] = useState(null);
  const removeCommenState = useSelector(removeCommentSelectors.selectRemoveComment);
  const {
    removeComment,
  } = useFetchedPostsHook();

  // delete comment
  const handleDelete = (commentId, comPostId) => {
    setModalOpen(true);
    setComid(commentId);
    setPostId(comPostId);
  };

  const handleDeleteDisagree = () => {
    setComid(null);
    setModalOpen(false);
    setPostId(null);
  };

  const handleDeleteAgree = () => {
    setModalOpen(false);
    dispatch(removeCommentActions.removeComment.request(comId));
  };

  useEffect(() => {
    if (removeCommenState.statuses.isSucceed && comId && postId) {
      removeComment({
        commentId: comId,
        postId,
      });
      console.log(comId, postId);
      dispatch(removeCommentActions.removeComment.reset());
      setComid(null);
      setPostId(null);
    }
  }, [removeCommenState, comId, postId]);

  return {
    handleDelete,
    isModalOpen,
    setModalOpen,
    handleDeleteDisagree,
    handleDeleteAgree,
  };
};
