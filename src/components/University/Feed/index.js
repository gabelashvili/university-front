/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import Container from 'components/Container';
import {
  containerStyles,
  containerStylesLeft,
  containerStylesRight,
  containerStylesMiddle,
  TextArea,
  BottomPart,
  UploadImage,
  UploadLabel,
  Upload,
  Emoji,
  EmojiWrapper,
  ImgPreview,
  Img,
} from 'components/University/Feed/styles';
import CameraIcon from 'Icons/Camera';
import EmojiIcon from 'Icons/Emoji';
import CloseIcon from 'Icons/Close';
import { useSnackbar } from 'notistack';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const Feedback = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [image, setImage] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [comment, setComment] = useState('');
  const [cursPos, setCursPos] = useState(0);
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
    const newComment = comment.substring(0, cursPos.start) + emojiObject.emoji + comment.substring(cursPos.end, comment.length);
    setComment(newComment);
  };
  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };
  const handleCommentChange = (e) => setComment(e.target.value);

  const toggleEmoji = () => setShowEmoji(!showEmoji);

  const emojiRef = useRef(null);

  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });
  return (
    <Container costumStyles={containerStyles}>
      <Container costumStyles={containerStylesLeft}>
        LeftSide
      </Container>
      <Container costumStyles={containerStylesMiddle}>
        <TextArea value={comment} onChange={(e) => handleCommentChange(e)} onKeyUp={(e) => handleCursorPosition(e)} onClick={(e) => handleCursorPosition(e)} />
        <BottomPart>
          <UploadImage>
            <UploadLabel htmlFor="upload-image">
              <CameraIcon />
            </UploadLabel>
            <Upload type="file" id="upload-image" accept="image/png, image/jpeg" onInput={(e) => handleUpload(e)} />
          </UploadImage>
          <Emoji ref={emojiRef}>
            <EmojiIcon onClick={toggleEmoji} />
            {showEmoji && (
            <EmojiWrapper onClick={handleClickOutsideEmoji}>
              <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus
                skinTone={SKIN_TONE_MEDIUM_DARK}
                groupNames={{ smileys_people: 'PEOPLE' }}
                native
              />
            </EmojiWrapper>
            )}
          </Emoji>
          {image && (
          <ImgPreview onClick={() => setImage(false)}>
            <Img src={image} alt="" />
            <CloseIcon />
          </ImgPreview>
          )}
        </BottomPart>
      </Container>
      <Container costumStyles={containerStylesRight}>
        RightSide
      </Container>
    </Container>
  );
};

export default Feedback;
