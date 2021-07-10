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
  deleteButtonStyles,
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
import CheckBox from 'components/Inputs/CheckBox';

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
    faculties,
    selectedFaculty,
    setSelectedFaculty,
    lectures,
    keyWord,
    setKeyword,
    setSelectedLecturer,
    handleCommentAdd,
    handleCheckBoxChange,
    comments,
    handleScroll,
    selectedLecturer,
    authedUser,
    handleDeleteComment,
    handleEditComment,
    isEditing,
    handleEditCancel,
    handleEditSave,
  } = useLecturesHook();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        costumeStyles={modalStyles}
        title={`${selectedLecturer?.firstname} ${selectedLecturer?.lastname}`}
        showClose
        onClose={() => {
          setModalOpen(false);
          setSelectedLecturer(null);
        }}
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
            <CheckBox label="ანონიმურად" handleChange={handleCheckBoxChange} />
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
            {isEditing && (
            <Button
              costumStyles={deleteButtonStyles}
              handleClick={handleEditCancel}
            >
              გაუქმება
            </Button>
            )}
            <Button
              costumStyles={addButtonStyles}
              handleClick={isEditing ? handleEditSave : handleCommentAdd}
            >
              {isEditing ? 'შენახვა' : 'დამატება'}
            </Button>
          </ButtonsWrapper>
        </AddComment>
        <Comments onScroll={handleScroll}>
          {comments.map((item) => (
            <Comment key={item.id}>
              <ComAvatar>
                {item?.user?.image ? <ComAvatarImg src={item.user.image} /> : <DefaultAvatar />}
              </ComAvatar>
              <ComDetails>
                <ComAuthorWrapper>
                  <ComAuthor>
                    {!item.user ? 'ანონიმური' : `${item.user.firstname} ${item.user.lastname}`}
                  </ComAuthor>
                  { authedUser.userId === item?.user?.id
                    && (
                      <EditCom>
                        <EditIcon handleClick={() => handleEditComment(item)} />
                        <RemoveIcon handleClick={() => handleDeleteComment(item.id)} />
                      </EditCom>
                    )}
                </ComAuthorWrapper>
                <ComText>
                  {item.text}
                </ComText>
              </ComDetails>
            </Comment>
          ))}
        </Comments>
      </Modal>
      <Container costumStyles={containerStyles}>
        <Filters>
          <FilterTitle>ფილტრი</FilterTitle>
          <Search
            value={keyWord}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="ლექტორის სახელი"
          />
          <Ul>
            {faculties.map(({ name, id }) => (
              <Li
                key={id}
                active={selectedFaculty === id}
                onClick={() => setSelectedFaculty(id)}
              >
                {name}
              </Li>
            ))}
          </Ul>
        </Filters>
        <Lectures>
          {lectures.map((lecture) => (
            <Lecture key={lecture.id}>
              <LectureImg src="https://deadline.com/wp-content/uploads/2020/03/jimhouston.jpg?w=360&h=383&crop=1" />
              <LectureTitle>{`${lecture.firstname} ${lecture.lastname}`}</LectureTitle>
              <LectureDesc>
                ინფორმატიკა
              </LectureDesc>
              <RaitingWrapper>
                <Raiting isDisabled={false} raiting={lecture.rate} />
              </RaitingWrapper>
              <ButtonWrapper>
                <Button
                  costumStyles={buttonStyles}
                  handleClick={() => handleLectureClick(lecture)}
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
