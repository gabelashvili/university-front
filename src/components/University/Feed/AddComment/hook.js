import { useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import {
  actions as addCommentActions,
  selectors as addCommentSelectors,
} from 'modules/University/Feed/AddComment';
import {
  actions as updateCommentActions,
  selectors as updateCommentSelectors,
} from 'modules/University/Feed/UpdateComment';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import moment from 'moment';
import {
  hooks as authedUserHook,
} from 'modules/Authentication/AuthedUser';

export default (postId, data, setSelectedCom, parent) => {
  const { enqueueSnackbar } = useSnackbar();
  const [showEmoji, setShowEmoji] = useState(false);
  const [cursPos, setCursPos] = useState(0);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);
  const textareaRef = useRef();
  const emojiRef = useRef();
  const [flexWrap, setFlexWrap] = useState(false);
  const [commentLength, setCommentLength] = useState(0);
  const dispatch = useDispatch();
  const addCommentState = useSelector(addCommentSelectors.selectAddComment);
  const { addComment, updateComment, addReply } = useFetchedPostsHook();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { authedUser } = authedUserHook.useAuthedUser();
  const updateCommentState = useSelector(updateCommentSelectors.selectUpdateComment);

  // add new comment || reply
  const handleAdd = (postId) => {
    setSelectedPostId(postId);
    dispatch(addCommentActions.addComment.request({
      image: image?.file || null,
      data: {
        postId,
        text: comment,
        parent,
      },
    }));
  };

  useEffect(() => {
    if (addCommentState.statuses.isSucceed && postId === selectedPostId) {
      if (!parent) {
        addComment({
          postId: selectedPostId,
          data: {
            createdAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
            emoji: {
              dislike: { id: 3, quantity: 0 },
              haha: { id: 4, quantity: 0 },
              like: { id: 1, quantity: 0 },
              love: { id: 2, quantity: 0 },
            },
            id: addCommentState.data.id,
            image: image?.url || null,
            parent: null,
            postId,
            replyCnt: 0,
            text: comment,
            updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
            user: {
              image: authedUser.image,
              firstName: authedUser.firstName,
              lastName: authedUser.lastName,
              universityId: authedUser.universityId,
            },
            userId: authedUser.userId,
            yourEmoji: null,
          },
        });
      }
      if (parent) {
        addReply({
          data: {
            createdAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
            emoji: {
              dislike: { id: 3, quantity: 0 },
              haha: { id: 4, quantity: 0 },
              like: { id: 1, quantity: 0 },
              love: { id: 2, quantity: 0 },
            },
            id: addCommentState.data.id,
            image: image?.url || null,
            parent,
            postId,
            replyCnt: 0,
            text: comment,
            updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
            user: {
              image: authedUser.image,
              firstName: authedUser.firstName,
              lastName: authedUser.lastName,
              universityId: authedUser.universityId,
            },
            userId: authedUser.userId,
            yourEmoji: null,
          },
        });
      }
      setSelectedPostId(null);
      dispatch(addCommentActions.addComment.reset());
      setImage(null);
      setComment('');
      setCommentLength(0);
    }
  }, [addCommentState, selectedPostId]);

  // edit comment
  const handleEditCancel = () => {
    setSelectedCom(null);
    setImage(null);
    setComment('');
    document.getElementById(`comment-${data.comment.id}`).scrollIntoView({ behavior: 'smooth' });
  };

  const handleEditFinish = () => {
    dispatch(updateCommentActions.updateComment.request({
      image: image?.file,
      data: {
        commentId: data.comment.id,
        text: comment,
        image: image?.url || null,
      },
    }));
  };

  useEffect(() => {
    if (data && parent === data.comment.parent) {
      setComment(data.comment.text);
      setImage(data.comment.image && {
        url: data.comment.image,
      });
    }
  }, [data]);

  useEffect(() => {
    if (updateCommentState.statuses.isSucceed
       && data?.isEditing && data.comment.parent === parent) {
      updateComment({
        ...data.comment,
        text: comment,
        image: image?.url || null,
        updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
      });
      handleEditCancel();
      dispatch(addCommentActions.addComment.reset());
    }
  }, [updateCommentState]);

  // set textarea styles
  const handleCommentChange = (e) => {
    setCommentLength(e.target.textContent.length);
    if (data?.isEditing) {
      if (e.target.textContent.length === 0 && !image) {
        handleEditCancel();
      }
    }
    const { scrollWidth } = textareaRef.current;
    const parentElementWidth = textareaRef.current.parentElement.clientWidth;
    const nextSiblingWidth = textareaRef.current.nextElementSibling.clientWidth;
    const parentElementPadding = parseFloat(
      getComputedStyle(textareaRef.current.parentElement).padding,
    );
    textareaRef.current.style.setProperty('min-width', `calc(100% - ${nextSiblingWidth + 2 * parentElementPadding}px)`);
    if ((scrollWidth + nextSiblingWidth + 2 * parentElementPadding) >= parentElementWidth) {
      setFlexWrap(true);
    } else {
      setFlexWrap(false);
    }
  };

  // handle file upload
  const handleUpload = (e) => {
    e.stopPropagation();
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

  // toggle emoji
  const toggleEmoji = (e) => {
    e.stopPropagation();
    setShowEmoji(!showEmoji);
  };

  // handle emoji click
  const onEmojiClick = (event, emojiObject) => {
    event.stopPropagation();
    const newComment = `${comment.substring(0, cursPos)}${emojiObject.emoji}${comment.substring(cursPos, comment.length)}`;
    setComment(newComment);
    setCommentLength(newComment.length);
  };

  // handle click outside emoji
  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  // set cursor position in textarea
  const handleCursorPosition = () => {
    // eslint-disable-next-line max-len
    setCursPos(window.getSelection().anchorOffset);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });

  return {
    handleCursorPosition,
    textareaRef,
    comment,
    setComment,
    handleCommentChange,
    flexWrap,
    emojiRef,
    toggleEmoji,
    showEmoji,
    handleClickOutsideEmoji,
    onEmojiClick,
    image,
    setImage,
    handleUpload,
    commentLength,
    handleAdd,
    handleEditCancel,
    handleEditFinish,
  };
};
