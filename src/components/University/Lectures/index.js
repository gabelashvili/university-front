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
    setRate,
  } = useLecturesHook();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        costumeStyles={modalStyles}
        title={`${selectedLecturer?.firstName} ${selectedLecturer?.lastName}`}
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
            <CheckBox label="??????????????????????????????" handleChange={handleCheckBoxChange} />
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
              ????????????????????????
            </Button>
            )}
            <Button
              costumStyles={addButtonStyles}
              handleClick={isEditing ? handleEditSave : handleCommentAdd}
            >
              {isEditing ? '?????????????????????' : '????????????????????????'}
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
                    {!item.user ? '???????????????????????????' : `${item.user.firstName} ${item.user.lastName}`}
                  </ComAuthor>
                  { authedUser.userId === item?.user?.id && authedUser.userId
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
          <FilterTitle>??????????????????</FilterTitle>
          <Search
            value={keyWord}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="???????????????????????? ??????????????????"
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
              <LectureImg src={lecture.gender ? 'https://www.w3schools.com/howto/img_avatar2.png' : 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'} />
              <LectureTitle>{`${lecture.firstName} ${lecture.lastName}`}</LectureTitle>
              <LectureDesc>
                {lecture.faculty}
              </LectureDesc>
              <RaitingWrapper>
                <Raiting
                  isDisabled={false}
                  raiting={lecture.rate}
                  handleClick={(raiting) => setRate(raiting, lecture.id)}
                />
              </RaitingWrapper>
              <ButtonWrapper>
                <Button
                  costumStyles={buttonStyles}
                  handleClick={() => handleLectureClick(lecture)}
                >
                  ??????????????????????????????
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
