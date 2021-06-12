import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import {
  actions as addNewPostActions,
  selectors as addNewPostSelectors,
} from 'modules/University/Feed/AddNewPost';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import moment from 'moment';
import {
  hooks as authedUserHook,
} from 'modules/Authentication/AuthedUser';
import {
  actions as updatePostActions,
  selectors as updatePostSelectors,
} from 'modules/University/Feed/UpdatePost';

const useAddPostHook = (editPost, setEditPost) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [postDesc, setPostDesc] = useState('');
  const [cursPos, setCursPos] = useState(0);
  const textareaRef = useRef();
  const { id: uniId } = useParams();
  const emojiRef = useRef(null);
  const addNewPostState = useSelector(addNewPostSelectors.selectAddNewPost);
  const { addPost, updatePost } = useFetchedPostsHook();
  const { authedUser } = authedUserHook.useAuthedUser();
  const updatePostState = useSelector(updatePostSelectors.selectUpdatePost);

  // resize textarea automatically
  const handleUpload = (e) => {
    if (e.target.files[0].size > 1024 * 1024 * 2) {
      enqueueSnackbar('Max Upload File Size 2Mib', {
        variant: 'error',
      });
    } else {
      setImage({
        url: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      });
    }
  };

  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };

  const handleCommentChange = (e) => setPostDesc(e.target.value);

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [postDesc]);

  // emoji
  const toggleEmoji = () => setShowEmoji(!showEmoji);

  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    const newComment = `${postDesc.substring(0, cursPos.start)}${emojiObject.emoji}${postDesc.substring(cursPos.end, postDesc.length)}`;
    setPostDesc(newComment);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });

  // add new post
  const handleNewPost = () => {
    const data = {
      text: postDesc,
      universityId: uniId,
    };
    dispatch(addNewPostActions.addNewPost.request(image?.file || null, data));
  };

  useEffect(() => {
    if (addNewPostState.statuses.isSucceed) {
      addPost({
        commentCnt: 0,
        createdAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
        emoji: {
          dislike: { id: 3, quantity: 0 },
          haha: { id: 4, quantity: 0 },
          like: { id: 1, quantity: 0 },
          love: { id: 2, quantity: 0 },
        },
        id: addNewPostState.data.id,
        image: image?.url || null,
        text: postDesc,
        universityId: 1,
        updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
        user: {
          image: authedUser.image,
          firstname: authedUser.firstName,
          lastname: authedUser.lastName,
          universityId: authedUser.universityId,
        },
        userId: authedUser.userId,
        yourEmoji: null,
      });
      dispatch(addNewPostActions.addNewPost.reset());
    }
  }, [addNewPostState]);

  // edit post
  const handlePostEditCancel = () => {
    setEditPost(null);
    setImage(null);
    setPostDesc('');
  };

  const handlePostEditSave = () => {
    dispatch(updatePostActions.updatePost.request({
      image: image?.file,
      data: {
        universityId: uniId,
        postId: editPost.id,
        text: postDesc,
        image: image?.url || null,
      },
    }));
  };

  useEffect(() => {
    if (editPost) {
      setImage(editPost.image && {
        url: editPost.image,
      });
      setPostDesc(editPost.text);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [editPost]);

  useEffect(() => {
    if (updatePostState.statuses.isSucceed) {
      updatePost({
        id: editPost.id,
        text: postDesc,
        image: image?.url || null,
        updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
      });
      dispatch(updatePostActions.updatePost.reset());
      handlePostEditCancel();
      document.getElementById(`post-${editPost.id}`).scrollIntoView({ behavior: 'smooth' });
    }
  }, [updatePostState, editPost]);

  return {
    handleUpload,
    handleNewPost,
    toggleEmoji,
    handleCommentChange,
    handleCursorPosition,
    onEmojiClick,
    postDesc,
    textareaRef,
    image,
    setImage,
    emojiRef,
    showEmoji,
    handleClickOutsideEmoji,
    handlePostEditCancel,
    handlePostEditSave,
  };
};

export default useAddPostHook;
