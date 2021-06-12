// eslint-disable-next-line no-unused-vars
import {
  Comment,
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
  CommentWrapper,
  buttonStyles,
  ButtonWrapper,
} from 'components/University/Feed/AddComment/styles';
import CameraIcon from 'Icons/Camera';
import EmojiIcon from 'Icons/Emoji';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import useAddCommentHook from 'components/University/Feed/AddComment/hook';
import Button from 'components/Button';

const CommentComponent = ({ postId, data, setSelectedCom }) => {
  const {
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
  } = useAddCommentHook(postId, data, setSelectedCom);
  return (
    <CommentWrapper id={`add-comment-${postId}`}>
      <Comment>
        <Wrapper onClick={() => textareaRef.current.focus()}>
          <TextArea
            onKeyUp={handleCursorPosition}
            onClick={handleCursorPosition}
            ref={textareaRef}
            value={comment}
            contentEditable
            onBlur={(e) => {
              setComment(e.target.textContent);
            }}
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
              <UploadLabel htmlFor={`upload-image-comment-${postId}`}>
                <CameraIcon />
              </UploadLabel>
              <Upload
                type="file"
                id={`upload-image-comment-${postId}`}
                accept="image/png, image/jpeg"
                onChange={(e) => handleUpload(e)}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
            </UploadImage>
          </BottomPart>
        </Wrapper>
        {image && (
        <ImagePreview>
          <ImgWrapper>
            <Img src={image.url} />
            <IconWrapper onClick={() => setImage(null)}>
              <CloseIconWithoutCircle />
            </IconWrapper>
          </ImgWrapper>
        </ImagePreview>
        )}

      </Comment>
      {(commentLength > 0 || comment.length > 0 || image) && (
        <ButtonWrapper>
          {data?.isEditing && <Button isCancel handleClick={handleEditCancel} costumStyles={buttonStyles} type="button">გაუქმება</Button>}
          <Button
            handleClick={data?.isEditing ? handleEditFinish : () => handleAdd(postId)}
            costumStyles={buttonStyles}
            type="button"
          >
            {data?.isEditing ? 'შენახვა' : 'დამატება'}
          </Button>
        </ButtonWrapper>
      )}
    </CommentWrapper>
  );
};

export default CommentComponent;
