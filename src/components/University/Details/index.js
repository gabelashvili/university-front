import {
  containerStyles,
  SectionList,
  RightSide,
  Section,
  SectionTitle,
  SectionDesc,
  Ul,
  Li,
  modalStyles,
} from 'components/University/Details/styles';
import Container from 'components/Container';
import Modal from 'components/Modal';
import { Bar } from 'react-chartjs-2';
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
  } = useDetailsHook();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        costumeStyles={modalStyles}
        title="სტატისტიკა"
        showClose
        onClose={() => setModalOpen(false)}
      >
        <Bar data={chartData} options={chartOptions} />
      </Modal>
      <Container costumStyles={containerStyles}>
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
                  <Li onClick={() => handleModalOpen(faculty.id)} key={faculty.name}>
                    {faculty.name}
                  </Li>
                ))}
              </Ul>
            </SectionDesc>
          </Section>
        </SectionList>
        <RightSide>111</RightSide>
      </Container>
    </>
  );
};

export default Details;
