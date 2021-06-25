import { useState } from 'react';
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
import Chart from 'react-google-charts';

const Details = () => {
  const [openSection, setOpenSection] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  const setOpen = (id) => {
    if (id === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        costumeStyles={modalStyles}
        title="სტატისტიკა"
        showClose
        onClose={() => setModalOpen(false)}
      >
        <Chart
          chartType="Bar"
          loader={<div>Loading Statistics</div>}
          data={[
            ['Year', '100% გრანტი', '70% გრანტი', '50% გრანტი', 'უგრანტო'],
            ['2014', 1000, 400, 600, 2],
            ['2015', 888, 400, 600, 20],
            ['2014', 1000, 400, 600, 2],
            ['2015', 888, 400, 600, 20],
            ['2014', 1000, 400, 600, 2],
            ['2015', 888, 400, 600, 1800],
          ]}
          options={{
            // Material design options
            chart: {
              subtitle: '',
            },
          }}
     // For tests
          rootProps={{ 'data-testid': '2' }}
        />
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
            <SectionDesc>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
              Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
              Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
              Duis Aute Irure Dolor In Reprehenderit In
              Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
              Excepteur Sint Occaecat Cupidatat Non Proident,
              Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
            </SectionDesc>
            <SectionDesc>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
              Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
              Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
            </SectionDesc>
          </Section>

          <Section isOpen={openSection === 2}>
            <SectionTitle
              onClick={() => setOpen(2)}
              isOpen={openSection === 2}
            >
              ფაკულტეტები
            </SectionTitle>
            <SectionDesc>
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
