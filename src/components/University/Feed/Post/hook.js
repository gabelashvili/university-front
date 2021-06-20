import { useState, useEffect } from 'react';
import { reactions } from 'components/University/Feed/Reactions/reactions';
import { useDispatch, useSelector } from 'react-redux';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import {
  actions as removePostActions,
  selectors as removePostSelectors,
} from 'modules/University/Feed/RemovePost';
import {
  actions as getCommentsActions,
  selectors as getCommentstSelectors,
} from 'modules/University/Feed/GetComments';
import {
  actions as sendPostEmojiActions,
  selectors as sendPostEmojitSelectors,
} from 'modules/University/Feed/SendPostEmoji';
import {
  actions as getPostReactionsActions,
} from 'modules/University/Feed/GetPostReactions';

const usePostHook = (post) => {
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);
  const [selectedPostId, setselectedPostId] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    removePost,
    setComments,
    resetComments,
    updatePostReaction,
  } = useFetchedPostsHook();
  const removePostState = useSelector(removePostSelectors.selectRemovePost);
  const getComments = useSelector(getCommentstSelectors.selectGetComments);
  const sendPostEmojiState = useSelector(sendPostEmojitSelectors.selectSendPostEmoji);
  const LIMIT = 5;

  // remove post

  const handlePostRemove = () => {
    setModalOpen(true);
  };

  const agreePostDelete = (postId) => {
    dispatch(removePostActions.removePost.request(postId));
    setModalOpen(false);
    setselectedPostId(postId);
  };

  const disagreePostDelete = () => {
    setselectedPostId(null);
    setModalOpen(false);
  };

  useEffect(() => {
    if (removePostState.statuses.isSucceed && post.id === selectedPostId) {
      removePost(selectedPostId);
      setselectedPostId(null);
    }
  }, [removePostState, selectedPostId]);

  // fetch comments

  const handleShowMore = () => {
    dispatch(getCommentsActions.getComments.request({
      offset: post.comments.list.length,
      limit: LIMIT,
      postId: post.id,
    }));
  };

  useEffect(() => {
    if (showComment) {
      dispatch(getCommentsActions.getComments.request({
        offset: 0,
        limit: LIMIT,
        postId: post.id,
      }));
    }
    if (!showComment && post.comments) {
      resetComments(post.id);
    }
  }, [showComment]);

  useEffect(() => {
    if (getComments.statuses.isSucceed) {
      dispatch(getCommentsActions.getComments.reset());
      if (getComments.data.comments.length > 0
        && post.id === getComments.data.comments[0].postId
        && !getComments.data.comments[0].parent) {
        setComments({
          postId: post.id,
          comments: getComments.data,
        });
      }
    }
  }, [getComments]);

  // send emoji post
  const handleEmojiSend = (reaction, data) => {
    dispatch(sendPostEmojiActions.sendPostEmoji.request({
      postId: data.postId,
      emojiId: reaction.id,
    }));
    setselectedPostId(data.postId);
    setSelectedReaction(reaction);
  };

  const getEmojiBytid = (emojiId) => reactions.find((el) => el.id === emojiId);

  useEffect(() => {
    if (sendPostEmojiState.statuses.isSucceed && post.id === selectedPostId) {
      updatePostReaction({
        postId: selectedPostId,
        reaction: selectedReaction,
      });
      setselectedPostId(null);
      setSelectedReaction(null);
      dispatch(sendPostEmojiActions.sendPostEmoji.reset());
    }
  }, [sendPostEmojiState, selectedReaction, selectedPostId]);

  // show all reaction

  const handleShowAllReaction = () => {
    dispatch(getPostReactionsActions.getPostReactions.request({
      offset: 0,
      limit: 5,
      postId: post.id,
    }));
  };

  return {
    showComment,
    setShowComment,
    handlePostRemove,
    agreePostDelete,
    disagreePostDelete,
    isModalOpen,
    setModalOpen,
    handleShowMore,
    handleEmojiSend,
    getEmojiBytid,
    handleShowAllReaction,
  };
};

export default usePostHook;
