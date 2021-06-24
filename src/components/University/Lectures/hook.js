import { useState, useRef, useEffect } from 'react';

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLectureClick = () => {
    setModalOpen(true);
  };

  // textarea

  const [comment, setComment] = useState('');
  const [cursPos, setCursPos] = useState(null);
  const textareaRef = useRef();

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };

  // emoji
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiRef = useRef();

  const toggleEmoji = () => setShowEmoji(!showEmoji);

  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    const newComment = `${comment.substring(0, cursPos.start)}${emojiObject.emoji}${comment.substring(cursPos.end, comment.length)}`;
    setComment(newComment);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });

  return {
    isModalOpen,
    handleLectureClick,
    setModalOpen,
    toggleEmoji,
    showEmoji,
    emojiRef,
    handleClickOutsideEmoji,
    comment,
    handleCommentChange,
    handleCursorPosition,
    textareaRef,
    onEmojiClick,
  };
};
