import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { actions as addNewPostActions } from 'modules/University/Feed/AddNewPost';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useAddPostHook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [postDesc, setPostDesc] = useState('');
  const [cursPos, setCursPos] = useState(0);
  const textareaRef = useRef();
  const { id: uniId } = useParams();
  const emojiRef = useRef(null);

  const handleUpload = (e) => {
    if (e.target.files[0].size > 1024 * 1024 * 2) {
      enqueueSnackbar('Max Upload File Size 2Mib', {
        variant: 'error',
      });
    } else {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    const newComment = `${postDesc.substring(0, cursPos.start)}${emojiObject.emoji}${postDesc.substring(cursPos.end, postDesc.length)}`;
    setPostDesc(newComment);
  };

  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };

  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  const handleCommentChange = (e) => setPostDesc(e.target.value);

  const toggleEmoji = () => setShowEmoji(!showEmoji);

  const handleNewPost = () => {
    const data = {
      text: postDesc,
      category: 'Test',
      universityId: uniId,
    };
    dispatch(addNewPostActions.addNewPost.request(image, data));
  };

  // resize textarea automatically
  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [postDesc]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });

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
  };
};

export default useAddPostHook;
