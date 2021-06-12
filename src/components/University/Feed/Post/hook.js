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
import {
  actions as getCommentsActions,
  selectors as getCommentstSelectors,
} from 'modules/University/Feed/GetComments';

const usePostHook = (post) => {
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);
  const [selectedPostId, setselectedPostId] = useState(false);
  const {
    removePost,
    setComments,
    resetComments,
    resetList,
  } = useFetchedPostsHook();
  const removePostState = useSelector(removePostSelectors.selectRemovePost);
  const getComments = useSelector(getCommentstSelectors.selectGetComments);
  const LIMIT = 5;

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

  // fetch comments

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
      if (getComments.data.comments.length > 0 && post.id === getComments.data.comments[0].postId) {
        setComments({
          postId: post.id,
          comments: getComments.data,
        });
      }
    }
  }, [getComments]);

  // on unmount
  useEffect(() => () => {
    resetList();
  }, []);

  return {
    showComment,
    setShowComment,
    handlePostRemove,
    agreePostDelete,
    disagreePostDelete,
  };
};

export default usePostHook;
