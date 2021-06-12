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
  const [selectedCom, setSelectedCom] = useState(null);
  const [showReply, setShowReply] = useState({});
  const removeCommenState = useSelector(removeCommentSelectors.selectRemoveComment);
  const {
    removeComment,
  } = useFetchedPostsHook();

  // delete comment
  const handleDelete = (com) => {
    setModalOpen(true);
    setSelectedCom(com);
  };

  const handleDeleteDisagree = () => {
    setSelectedCom(null);
    setModalOpen(false);
  };

  const handleDeleteAgree = () => {
    setModalOpen(false);
    dispatch(removeCommentActions.removeComment.request(selectedCom.id));
  };

  useEffect(() => {
    if (removeCommenState.statuses.isSucceed && selectedCom) {
      removeComment({
        commentId: selectedCom.id,
        postId: selectedCom.postId,
      });
      dispatch(removeCommentActions.removeComment.reset());
      setSelectedCom(null);
    }
  }, [removeCommenState, setSelectedCom]);

  // edit comment

  const handleCommentEdit = (comment) => {
    setSelectedCom({
      isEditing: true,
      comment,
    });
    document.getElementById(`add-comment-${comment.postId}`).scrollIntoView({ behavior: 'smooth' });
  };

  // replies
  const handleShowReply = (comId) => {
    setShowReply({
      ...showReply,
      [comId]: {
        isShow: !showReply[comId]?.isShow,
        data: {},
      },
    });
  };

  return {
    handleDelete,
    isModalOpen,
    setModalOpen,
    handleDeleteDisagree,
    handleDeleteAgree,
    handleCommentEdit,
    selectedCom,
    setSelectedCom,
    showReply,
    handleShowReply,
  };
};
