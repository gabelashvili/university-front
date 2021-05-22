/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Container from 'components/Container';
import {
  containerStyles,
  TextArea,
  Bottom,
  LeftPart,
  IconWrapper,
  buttonStyle,
  ImageUpload,
  Upload,
  UploadLabel,
  ImagePreview,
  Image,
  RemoveImage,
  containerStylesSecond,
  Comment,
  Avatar,
  CommentDetails,
  ComAuthor,
  ComText,
  ComButtons,
  comButtonStyle,
  ComContainer,
  ComReplies,
  Emoji,
  EmojiWrapper,
} from 'components/University/Feedback/styles';
import CameraIcon from 'Icons/Camera';
import { useSnackbar } from 'notistack';
import PenIcon from 'Icons/Pen';
import Button from 'components/Button';
import CloseIcon from 'Icons/Close';
import LikeIcon from 'Icons/Like';
import HeartIcon from 'Icons/Heart';
import EmojiIcon from 'Icons/Emoji';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const Feedback = () => {
  const [image, setImage] = useState(null);
  const [showEmojies, setShowEmojies] = useState(false);
  const [cursPos, setCursPos] = useState(0);
  const [comment, setComment] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const handleUpload = (e) => {
    if (e.target.files[0].size > 1024 * 1024 * 2) {
      enqueueSnackbar('Max Upload File Size 2Mib', {
        variant: 'error',
      });
    } else {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleImageRemove = () => {
    setImage(null);
  };
  const handleEmojiOpen = () => {
    setShowEmojies(!showEmojies);
  };
  const handleCommentChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };
  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };
  const onEmojiClick = (event, emojiObject) => {
    const newComment = comment.substring(0, cursPos.start) + emojiObject.emoji + comment.substring(cursPos.end, comment.length);
    setComment(newComment);
  };
  return (
    <>
      <Container costumStyles={containerStyles}>
        <TextArea rows={4} onChange={(e) => handleCommentChange(e)} onKeyUp={(e) => handleCursorPosition(e)} value={comment} onClick={(e) => handleCursorPosition(e)} />
        <Bottom>
          <LeftPart>
            <ImageUpload>
              <UploadLabel htmlFor="upload-image">
                <CameraIcon />
              </UploadLabel>
              <Upload type="file" id="upload-image" onInput={(e) => handleUpload(e)} accept="image/png, image/jpeg" />
              {image && (
              <ImagePreview>
                <Image src={image} alt="" />
                <RemoveImage onClick={handleImageRemove}>
                  <CloseIcon />
                </RemoveImage>
              </ImagePreview>
              )}
            </ImageUpload>
            <Emoji onClick={handleEmojiOpen}>
              <EmojiIcon />
              {showEmojies && (
              <EmojiWrapper>
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
          </LeftPart>
          <Button
            bgColor="lightGreen"
            cursorType="pointer"
            hoverBgColor="green"
            borderRadius="5px"
            padding="8px 10px"
            costumStyles={buttonStyle}
          >
            <IconWrapper>
              <PenIcon />
            </IconWrapper>
            გაგზავნა
          </Button>
        </Bottom>
      </Container>
      <Container costumStyles={containerStylesSecond}>
        <ComContainer>
          <Comment>
            <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
            <CommentDetails>
              <ComAuthor href="/">Lasha</ComAuthor>
              <ComText>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
              </ComText>
              <ComButtons>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                  totalLikes
                >
                  <HeartIcon />
                  250 Likes
                </Button>
                <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                  <LikeIcon />
                  {' '}
                  you like it
                </Button>
                <Button costumStyles={comButtonStyle} type="button" dislike><LikeIcon /></Button>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                >
                  Comment
                </Button>

              </ComButtons>
            </CommentDetails>
          </Comment>
          <ComReplies>
            <Comment>
              <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
              <CommentDetails>
                <ComAuthor href="/">Lasha</ComAuthor>
                <ComText>
                  Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                  IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                  IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                  IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </ComText>
                <ComButtons>
                  <Button
                    type="button"
                    costumStyles={comButtonStyle}
                    totalLikes
                  >
                    <HeartIcon />
                    250 Likes
                  </Button>
                  <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                    <LikeIcon />
                    {' '}
                    you like it
                  </Button>
                  <Button costumStyles={comButtonStyle} type="button"><LikeIcon /></Button>
                  <Button costumStyles={comButtonStyle} type="button" dislike><LikeIcon /></Button>
                  <Button
                    type="button"
                    costumStyles={comButtonStyle}
                  >
                    Comment
                  </Button>

                </ComButtons>
              </CommentDetails>
            </Comment>
          </ComReplies>
        </ComContainer>
      </Container>
    </>
  );
};

export default Feedback;
