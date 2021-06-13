/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { reactions } from 'components/University/Feed/Reactions/reactions';
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
import {
  selectors as sendComEmojiSelectors,
  actions as sendComEmojiActions,
} from 'modules/University/Feed/SendComEmoji';

export default (postId) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCom, setSelectedCom] = useState(null);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReply, setShowReply] = useState({});
  const removeCommenState = useSelector(removeCommentSelectors.selectRemoveComment);
  const getCommentsState = useSelector(getCommentsSelectors.selectGetComments);
  const sendComEmojiState = useSelector(sendComEmojiSelectors.selectSendComEmoji);
  const {
    inserReplies,
    removeComment,
    resetReplies,
    removeReply,
    updateComReaction,
  } = useFetchedPostsHook();

  // delete comment
  const handleDelete = (com) => {
    setModalOpen(true);
    setSelectedCom(com);
    console.log(com);
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
    if (removeCommenState.statuses.isSucceed && selectedCom && selectedCom.postId === postId) {
      if (!selectedCom.parent) {
        removeComment({
          commentId: selectedCom.id,
          postId: selectedCom.postId,
        });
      }
      if (selectedCom.parent) {
        removeReply({
          id: selectedCom.id,
          parent: selectedCom.parent,
          postId: selectedCom.postId,
        });
      }
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

  const handleShowMoreReply = (parentId, curLength) => {
    dispatch(getCommentsActions.getComments.request({
      offset: curLength,
      limit: 5,
      parentId,
      postId,
    }));
  };

  useEffect(() => {
    if (getCommentsState.statuses.isSucceed) {
      dispatch(getCommentsActions.getComments.reset());
      if (getCommentsState.data.comments.length > 0
        && getCommentsState.data.comments[0].parent
        && getCommentsState.data.comments[0].postId === postId
      ) {
        inserReplies(getCommentsState.data);
      }
    }
  }, [getCommentsState]);

  // send reaction
  const sendReaction = (reaction, data) => {
    setSelectedCom(data);
    setSelectedReaction(reaction);
    dispatch(sendComEmojiActions.sendComEmoji.request({
      commentId: data.commentId,
      emojiId: reaction.id,
    }));
  };

  const getEmojiBytid = (emojiId) => reactions.find((el) => el.id === emojiId);

  useEffect(() => {
    if (sendComEmojiState.statuses.isSucceed && postId === selectedCom?.postId) {
      dispatch(sendComEmojiActions.sendComEmoji.reset());
      updateComReaction({ reaction: selectedReaction, comData: selectedCom });
      setSelectedCom(null);
      setSelectedReaction(null);
    }
  }, [sendComEmojiState, selectedCom, selectedReaction]);

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
    handleShowMoreReply,
    sendReaction,
    getEmojiBytid,
  };
};
