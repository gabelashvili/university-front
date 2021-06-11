/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  actions as getPostsActions,
  selectors as getPostsSelectors,
} from 'modules/University/Feed/GetPosts';
import {
  actions as fetchedPostsActions,
  selectors as fetchedPostsSelectors,
} from 'modules/University/Feed/FetchedPosts';

const useFeedHook = () => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(fetchedPostsSelectors.selectFetchedPosts);
  const getPosts = useSelector(getPostsSelectors.selectGetPosts);
  const { id: uniId } = useParams();

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
      dispatch(fetchedPostsActions.fetchedPosts.updateList(getPosts.data));
      dispatch(getPostsActions.getPosts.reset());
    }
  }, [getPosts]);

  useEffect(() => {
    window.addEventListener('scroll', handleBodyScroll);
    return () => window.removeEventListener('scroll', handleBodyScroll);
  }, [fetchedPosts]);

  return {
    fetchedPosts,
  };
};

export default useFeedHook;
