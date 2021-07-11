/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  actions as getPostsActions,
  selectors as getPostsSelectors,
} from 'modules/University/Feed/GetPosts';
import {
  selectors as fetchedPostsSelectors,
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';

import {
  selectors as getPostReactionsSelectors,
  actions as getPostReactionsActions,
} from 'modules/University/Feed/GetPostReactions';
import {
  actions as getUniListActions,
  selectors as getUniListSelectors,
} from 'modules/University/GetUniList';

const useFeedHook = () => {
  const dispatch = useDispatch();
  const [editPost, setEditPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const fetchedPosts = useSelector(fetchedPostsSelectors.selectFetchedPosts);
  const getPosts = useSelector(getPostsSelectors.selectGetPosts);
  const getPostReactions = useSelector(getPostReactionsSelectors.selectGetPostReactions);
  const uniList = useSelector(getUniListSelectors.selectGetUniList);
  const { id: uniId } = useParams();
  const { updateList } = useFetchedPostsHook();

  // fetch five post and set in fetched posts state
  const handleBodyScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      if (fetchedPosts?.posts?.length < fetchedPosts?.totally) {
        dispatch(getPostsActions.getPosts.request({
          offset: fetchedPosts.posts.length,
          limit: 5,
          uniId: Number(uniId),
        }));
      }
    }
  };

  useEffect(() => {
    dispatch(getPostsActions.getPosts.request({
      offset: 0,
      limit: 5,
      uniId: Number(uniId),
    }));
  }, []);

  useEffect(() => {
    if (getPosts.statuses.isSucceed && getPosts.data.posts.length > 0) {
      updateList(getPosts.data);
      dispatch(getPostsActions.getPosts.reset());
    }
  }, [getPosts]);

  useEffect(() => {
    window.addEventListener('scroll', handleBodyScroll);
    return () => window.removeEventListener('scroll', handleBodyScroll);
  }, [fetchedPosts]);

  // hande modal open

  useEffect(() => {
    if (getPostReactions.statuses.isSucceed) {
      setModalOpen(true);
    }
  }, [getPostReactions]);

  useEffect(() => {
    if (!isModalOpen) {
      dispatch(getPostReactionsActions.getPostReactions.reset());
    }
  }, [isModalOpen]);

  // get top 5 uni

  useEffect(() => {
    dispatch(getUniListActions.getUniList.request({
      offset: 0,
      limit: 4,
    }));
  }, []);

  return {
    fetchedPosts,
    editPost,
    setEditPost,
    isModalOpen,
    setModalOpen,
    reactionsData: getPostReactions.data.userEmojiList,
    uniList: uniList?.data?.universities || [],
  };
};

export default useFeedHook;
