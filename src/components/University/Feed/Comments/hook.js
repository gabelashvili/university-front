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
import {
  selectors as getCommentsSelectors,
  actions as getCommentsActions,
} from 'modules/University/Feed/GetComments';

export default (postId) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCom, setSelectedCom] = useState(null);
  const [showReply, setShowReply] = useState({});
  const removeCommenState = useSelector(removeCommentSelectors.selectRemoveComment);
  const getCommentsState = useSelector(getCommentsSelectors.selectGetComments);
  const {
    inserReplies,
    removeComment,
    resetReplies,
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
    if (!showReply[comId]) {
      dispatch(getCommentsActions.getComments.request({
        offset: 0,
        limit: 5,
        parentId: comId,
        postId,
      }));
    }
    if (showReply[comId]) {
      resetReplies({
        parentId: comId,
        postId,
      });
    }
    setShowReply({
      ...showReply,
      [comId]: !showReply[comId],
    });
  };

  useEffect(() => {
    if (getCommentsState.statuses.isSucceed
       && getCommentsState.data.comments.length > 0
       && getCommentsState.data.comments[0].parent) {
      inserReplies(getCommentsState.data);
      dispatch(getCommentsActions.getComments.reset());
    }
  }, [getCommentsState]);

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
