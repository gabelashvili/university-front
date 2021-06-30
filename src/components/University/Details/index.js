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
                <Li onClick={() => setModalOpen(true)}>
                  ბიზნეს ადმინისტრირება
                </Li>
                <Li onClick={() => setModalOpen(true)}>
                  სამართალი
                </Li>
                <Li onClick={() => setModalOpen(true)}>
                  ინფორმაციული ტექნოლოგიები
                </Li>
                <Li onClick={() => setModalOpen(true)}>
                  ბიზნეს ადმინისტრირება
                </Li>
                <Li onClick={() => setModalOpen(true)}>
                  სამართალი
                </Li>
                <Li onClick={() => setModalOpen(true)}>
                  ინფორმაციული ტექნოლოგიები
                </Li>
              </Ul>
            </SectionDesc>
          </Section>
          <Section isOpen={openSection === 3}>
            <SectionTitle
              onClick={() => setOpen(3)}
              isOpen={openSection === 3}
            >
              რაღაც სათაყრუ
            </SectionTitle>
            <SectionDesc>
              რომელმან შექმნა სამყარო ძალითა მით ძლიერითა, ზეგარდმო არსნი სულითა ყვნა
            </SectionDesc>
            <SectionDesc>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
              Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
              Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
            </SectionDesc>

          </Section>
        </SectionList>
        <RightSide>111</RightSide>
      </Container>
    </>
  );
};

export default Details;
