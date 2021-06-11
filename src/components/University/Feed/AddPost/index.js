import CameraIcon from 'Icons/Camera';
import EmojiIcon from 'Icons/Emoji';
import CloseIcon from 'Icons/Close';
import Button from 'components/Button';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

import {
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
} from 'components/University/Feed/AddPost/styles';
import useAddPostHook from 'components/University/Feed/AddPost/hooks';

const AddPost = () => {
  const {
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
  } = useAddPostHook();
  return (
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
  );
};

export default AddPost;
