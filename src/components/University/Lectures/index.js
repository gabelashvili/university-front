import {
  containerStyles,
  Lectures,
  Lecture,
  LectureImg,
  LectureTitle,
  LectureDesc,
  RaitingWrapper,
  buttonStyles,
  ButtonWrapper,
  Filters,
  FilterTitle,
  Search,
  Ul,
  Li,
  modalStyles,
  Textarea,
  AddComment,
  addButtonStyles,
  Comments,
  Comment,
  ComAvatar,
  ComAvatarImg,
  ComDetails,
  ComAuthor,
  ComText,
  EditCom,
  ComAuthorWrapper,
  Emoji,
  EmojiWrapper,
  ButtonsWrapper,
} from 'components/University/Lectures/styles';
import Container from 'components/Container';
import Raiting from 'components/Raiting';
import Button from 'components/Button';
import Modal from 'components/Modal';
import useLecturesHook from 'components/University/Lectures/hook';
import DefaultAvatar from 'Icons/DefaultAvatar';
import EditIcon from 'Icons/Edit';
import RemoveIcon from 'Icons/Remove';
import EmojiIcon from 'Icons/Emoji';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const LecturesComponent = () => {
  const {
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
  } = useLecturesHook();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        costumeStyles={modalStyles}
        title="მაქსიმ იავიჩი"
        showClose
        onClose={() => setModalOpen(false)}
      >
        <AddComment>
          <Textarea
            rows={2}
            value={comment}
            onChange={(e) => handleCommentChange(e)}
            onKeyUp={(e) => handleCursorPosition(e)}
            onClick={(e) => handleCursorPosition(e)}
            ref={textareaRef}
          />
          <ButtonsWrapper>
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
            <Button costumStyles={addButtonStyles}>დამატება</Button>
          </ButtonsWrapper>
        </AddComment>
        <Comments>
          {new Array(20).fill().map(() => (
            <Comment>
              <ComAvatar>
                {false ? <ComAvatarImg src="" /> : <DefaultAvatar />}
              </ComAvatar>
              <ComDetails>
                <ComAuthorWrapper>
                  <ComAuthor>Lasha Gabelashvili</ComAuthor>
                  <EditCom>
                    <EditIcon handleClick={() => console.log('Edit')} />
                    <RemoveIcon handleClick={() => console.log('Remove')} />
                  </EditCom>
                </ComAuthorWrapper>
                <ComText>
                  qwdqwqwdqwqwdqwdqwqwdqwqwdqwdqwqwdqwqwdqwdqwqqwdqwqwdqwdqwdqwdqwdqwdqwqwqqwd
                  wdqwqwdqwdqwqwdqwqwdqwdqwqwdqwqwdqwdqwdqwdqw
                  qwdqwd
                </ComText>
              </ComDetails>
            </Comment>
          ))}
        </Comments>
      </Modal>
      <Container costumStyles={containerStyles}>
        <Filters>
          <FilterTitle>ფილტრი</FilterTitle>
          <Search type="text" placeholder="ლექტორის სახელი" />
          <Ul>
            <Li>ინფორმატიკა</Li>
            <Li>ინფორმატიკა</Li>
            <Li>ინფორმატიკა</Li>
            <Li>ინფორმატიკა</Li>
            <Li>ინფორმატიკა</Li>
            <Li>ინფორმატიკა</Li>
          </Ul>
        </Filters>
        <Lectures>
          {new Array(10).fill().map(() => (
            <Lecture>
              <LectureImg src="https://deadline.com/wp-content/uploads/2020/03/jimhouston.jpg?w=360&h=383&crop=1" />
              <LectureTitle>მაქსიმ იავიჩი</LectureTitle>
              <LectureDesc>
                მოწვეული ლექტორი
                <br />
                ინფორმატიკა
              </LectureDesc>
              <RaitingWrapper>
                <Raiting isDisabled={false} />
              </RaitingWrapper>
              <ButtonWrapper>
                <Button
                  costumStyles={buttonStyles}
                  handleClick={handleLectureClick}
                >
                  შეფასებები
                </Button>
              </ButtonWrapper>
            </Lecture>
          ))}
        </Lectures>
      </Container>
    </>
  );
};

export default LecturesComponent;
