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

const useFeedHook = () => {
  const dispatch = useDispatch();
  const [editPost, setEditPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const fetchedPosts = useSelector(fetchedPostsSelectors.selectFetchedPosts);
  const getPosts = useSelector(getPostsSelectors.selectGetPosts);
  const getPostReactions = useSelector(getPostReactionsSelectors.selectGetPostReactions);
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

  const fakeData = [
    {
      emojiId: 2,
      id: 24,
      user: {
        firstname: 'Lasha',
        image: 'http://localhost:5000/public\\images\\64d72d90-c577-44a2-b22a-198dc455b201.png',
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 3,
      id: 24,
      user: {
        firstname: 'Vigaca',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 1,
      id: 24,
      user: {
        firstname: 'Ragac',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
    {
      emojiId: 4,
      id: 24,
      user: {
        firstname: 'Nika',
        image: null,
        lastname: 'Gabelashvili',
      },
    },
  ];

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

  return {
    fetchedPosts,
    editPost,
    setEditPost,
    isModalOpen,
    setModalOpen,
    reactionsData: fakeData,
  };
};

export default useFeedHook;
