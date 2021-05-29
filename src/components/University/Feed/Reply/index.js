// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import {
  Reply,
  TextArea,
  BottomPart,
  Upload,
  UploadImage,
  UploadLabel,
  ImagePreview,
  Wrapper,
  Img,
  ImgWrapper,
  IconWrapper,
  EmojiWrapper,
  Emoji,
} from 'components/University/Feed/Reply/styles';
import CameraIcon from 'Icons/Camera';
import EmojiIcon from 'Icons/Emoji';
import { useSnackbar } from 'notistack';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const ReplyComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [showEmoji, setShowEmoji] = useState(false);
  const [cursPos, setCursPos] = useState(0);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);
  const textareaRef = useRef();
  const emojiRef = useRef();
  const [flexWrap, setFlexWrap] = useState(false);

  // set textarea styles
  const handleCommentChange = () => {
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
      setImage(URL.createObjectURL(e.target.files[0]));
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
  return (
    <Reply>
      <Wrapper onClick={() => textareaRef.current.focus()}>
        <TextArea
          onKeyUp={handleCursorPosition}
          onClick={handleCursorPosition}
          ref={textareaRef}
          value={comment}
          contentEditable
          onBlur={(e) => setComment(e.target.textContent)}
          onInput={handleCommentChange}
          suppressContentEditableWarning
        >
          {comment}
        </TextArea>
        <BottomPart flexWrap={flexWrap}>
          <Emoji ref={emojiRef}>
            <EmojiIcon onClick={(e) => toggleEmoji(e)} />
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
          <UploadImage>
            <UploadLabel htmlFor="upload-image-comment">
              <CameraIcon />
            </UploadLabel>
            <Upload type="file" id="upload-image-comment" accept="image/png, image/jpeg" onChange={(e) => handleUpload(e)} />
          </UploadImage>
        </BottomPart>
      </Wrapper>
      {image && (
      <ImagePreview>
        <ImgWrapper>
          <Img src={image} />
          <IconWrapper onClick={() => setImage(null)}>
            <CloseIconWithoutCircle />
          </IconWrapper>
        </ImgWrapper>
      </ImagePreview>
      )}
    </Reply>
  );
};

export default ReplyComponent;
