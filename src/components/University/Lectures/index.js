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
} from 'components/University/Lectures/styles';
import Container from 'components/Container';
import Raiting from 'components/Raiting';
import Button from 'components/Button';
import Modal from 'components/Modal';
import useLecturesHook from 'components/University/Lectures/hook';

const LecturesComponent = () => {
  const {
    isModalOpen,
    handleLectureClick,
    setModalOpen,
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
          <Textarea rows={2} />
          <Button costumStyles={addButtonStyles}>დამატება</Button>
        </AddComment>
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
