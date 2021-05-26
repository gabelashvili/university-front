/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
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
  Post,
  TextAreaWrapper,
  ImgPreviewWrapper,
  PostHeader,
  AuthorAvatar,
  AuthorDetails,
  AuthorUni,
  AuthorName,
  PostDesc,
  PostImg,
  PostReactions,
  Reaction,
  ReactionsCount,
  PostBottom,
  postButton,
  LikeButtonWrapper,
  ToolTip,
} from 'components/University/Feed/styles';
import CameraIcon from 'Icons/Camera';
import EmojiIcon from 'Icons/Emoji';
import CloseIcon from 'Icons/Close';
import LikeIcon from 'Icons/Like';
import CommentIcon from 'Icons/Comment';
import { useSnackbar } from 'notistack';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import Button from 'components/Button';

const Feedback = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [image, setImage] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [comment, setComment] = useState('');
  const [cursPos, setCursPos] = useState(0);
  const emojiRef = useRef(null);
  const textareaRef = useRef();

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

  // resize textarea automatically
  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [comment]);
  return (
    <Container costumStyles={containerStyles}>
      <Container costumStyles={containerStylesLeft}>
        LeftSide
      </Container>
      <Container costumStyles={containerStylesMiddle}>
        <NewPost>
          <TextAreaWrapper>
            <TextArea
              value={comment}
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
          </BottomPart>
        </NewPost>
        <Post>
          <PostHeader>
            <AuthorAvatar src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="" />
            <AuthorDetails>
              <AuthorName>John Doe</AuthorName>
              <AuthorUni>Caucasus University</AuthorUni>
            </AuthorDetails>
          </PostHeader>
          <PostDesc>
            lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
            <PostImg src="https://media-exp1.licdn.com/dms/image/C4E22AQHoZlqp8dWaog/feedshare-shrink_800/0/1621521849666?e=1624492800&v=beta&t=FANoN4IckroFiIK-YHSE_aBMT_cIs_vQ22rxlXbuRW4" alt="" />
          </PostDesc>
          <PostReactions>
            <Reaction>
              <LikeIcon />
              <LikeIcon />
              <LikeIcon />
              <ReactionsCount>4</ReactionsCount>
            </Reaction>
          </PostReactions>
          <PostBottom>
            <LikeButtonWrapper>
              <ToolTip>
                <LikeIcon />
                <LikeIcon />
                <LikeIcon />
                <LikeIcon />
                <LikeIcon />
              </ToolTip>
              <Button costumStyles={postButton} type="button" likeButton>
                <LikeIcon />
                Like
              </Button>
            </LikeButtonWrapper>
            <Button costumStyles={postButton} type="button">
              <CommentIcon />
              Comment
            </Button>
          </PostBottom>
        </Post>
      </Container>
      <Container costumStyles={containerStylesRight}>
        RightSide
      </Container>
    </Container>
  );
};

export default Feedback;
