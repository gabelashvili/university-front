import React, { useState, useRef, useEffect } from 'react';
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
  NewPost,
  TextAreaWrapper,
  ImgPreviewWrapper,
  postButton,
} from 'components/University/Feed/styles';
import CameraIcon from 'Icons/Camera';
import EmojiIcon from 'Icons/Emoji';
import CloseIcon from 'Icons/Close';
import { useSnackbar } from 'notistack';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import Post from 'components/University/Feed/Post';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actions as addNewPostActions } from 'modules/University/Feed/AddNewPost';
import Button from 'components/Button';

const Feedback = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [postDesc, setPostDesc] = useState('');
  const [cursPos, setCursPos] = useState(0);
  const emojiRef = useRef(null);
  const textareaRef = useRef();
  const { id: uniId } = useParams();

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
    // eslint-disable-next-line max-len
    const newComment = `${postDesc.substring(0, cursPos.start)}${emojiObject.emoji}${postDesc.substring(cursPos.end, postDesc.length)}`;
    setPostDesc(newComment);
  };

  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };

  const handleCommentChange = (e) => setPostDesc(e.target.value);

  const toggleEmoji = () => setShowEmoji(!showEmoji);

  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  const handleNewPost = () => {
    const data = {
      text: postDesc,
      category: 'Test',
      universityId: uniId,
    };
    dispatch(addNewPostActions.addNewPost.request(image, data));
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });

  // resize textarea automatically
  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [postDesc]);
  return (
    <Container costumStyles={containerStyles}>
      <Container costumStyles={containerStylesLeft}>
        LeftSide
      </Container>
      <Container costumStyles={containerStylesMiddle}>
        <NewPost>
          <TextAreaWrapper>
            <TextArea
              value={postDesc}
              onChange={(e) => handleCommentChange(e)}
              onKeyUp={(e) => handleCursorPosition(e)}
              onClick={(e) => handleCursorPosition(e)}
              ref={textareaRef}
            />
            {image && (
              <ImgPreviewWrapper>
                <ImgPreview onClick={() => setImage(false)}>
                  <Img src={image} alt="" />
                  <CloseIcon />
                </ImgPreview>
              </ImgPreviewWrapper>
            )}
          </TextAreaWrapper>
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
            <Button type="button" handleClick={handleNewPost} costumStyles={postButton}>დაპოსტვა</Button>
          </BottomPart>
        </NewPost>
        <Post />
      </Container>
      <Container costumStyles={containerStylesRight}>
        RightSide
      </Container>
    </Container>
  );
};

export default Feedback;
