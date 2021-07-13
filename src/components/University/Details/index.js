import {
  Div,
  SectionList,
  RightSide,
  Section,
  SectionTitle,
  SectionDesc,
  Ul,
  Li,
  modalStyles,
  Box,
  BoxIcon,
  BoxContent,
  BoxTitle,
  BoxDesc,
  RaitingWrapper,
} from 'components/University/Details/styles';
import Modal from 'components/Modal';
import { Bar } from 'react-chartjs-2';
import EyeIcon from 'Icons/Raiting';
import EmailIcon from 'Icons/Email';
import LocationIcon from 'Icons/Location';
import PhoneIcon from 'Icons/Phone';
import Raiting from 'components/Raiting';
import useDetailsHook from './hook';

const Details = () => {
  const {
    isModalOpen,
    setModalOpen,
    chartData,
    chartOptions,
    setOpen,
    openSection,
    uniInfo,
    faculties,
    handleModalOpen,
    handleRaitingChange,
    selectedFaculty,
  } = useDetailsHook();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        costumeStyles={modalStyles}
        title={`${selectedFaculty?.name} - ${selectedFaculty?.price}₾`}
        showClose
        onClose={() => setModalOpen(false)}
      >
        <Bar data={chartData} options={chartOptions} />
      </Modal>
      <Div>
        <SectionList>
          <Section isOpen={openSection === 1}>
            <SectionTitle
              onClick={() => setOpen(1)}
              isOpen={openSection === 1}
            >
              ზოგადი ინფრომაცია
            </SectionTitle>
            {uniInfo?.data?.info && uniInfo.data.info.split(/\n/).filter((item) => item).map((el) => (
              <SectionDesc key={el}>{el}</SectionDesc>
            ))}
          </Section>
          <Section isOpen={openSection === 2}>
            <SectionTitle
              onClick={() => setOpen(2)}
              isOpen={openSection === 2}
            >
              ფაკულტეტები
            </SectionTitle>
            <SectionDesc as="div">
              <Ul>
                {Array.isArray(faculties) && faculties.map((faculty) => (
                  <Li onClick={() => handleModalOpen(faculty)} key={faculty.name}>
                    {`${faculty.name} ${uniInfo?.data?.university?.location !== faculty.place ? `- ${faculty.place}` : ''}`}
                  </Li>
                ))}
              </Ul>
            </SectionDesc>
          </Section>
        </SectionList>
        <RightSide>
          <Box>
            <BoxIcon><EyeIcon /></BoxIcon>
            <BoxContent>
              <BoxTitle>რეიტინგი</BoxTitle>
              <RaitingWrapper>
                <Raiting
                  raiting={uniInfo?.data?.university?.rate}
                  isDisabled={false}
                  handleClick={handleRaitingChange}
                />
                <BoxDesc>{`(${uniInfo?.data?.university?.rateCnt})`}</BoxDesc>
              </RaitingWrapper>
            </BoxContent>
          </Box>
          <Box>
            <BoxIcon><EmailIcon /></BoxIcon>
            <BoxContent>
              <BoxTitle>Email</BoxTitle>
              <BoxDesc>{uniInfo?.data?.email}</BoxDesc>
            </BoxContent>
          </Box>
          <Box>
            <BoxIcon><PhoneIcon /></BoxIcon>
            <BoxContent>
              <BoxTitle>ტელეფონი</BoxTitle>
              <BoxDesc>{uniInfo?.data?.firstNumber}</BoxDesc>
            </BoxContent>
          </Box>
          <Box>
            <BoxIcon><PhoneIcon /></BoxIcon>
            <BoxContent>
              <BoxTitle>ტელეფონი</BoxTitle>
              <BoxDesc>{uniInfo?.data?.secondNumber}</BoxDesc>
            </BoxContent>
          </Box>
          <Box>
            <BoxIcon><LocationIcon /></BoxIcon>
            <BoxContent>
              <BoxTitle>მდებარეობა</BoxTitle>
              <BoxDesc>{uniInfo?.data?.university?.location}</BoxDesc>
            </BoxContent>
          </Box>
        </RightSide>
      </Div>
    </>
  );
};

export default Details;
