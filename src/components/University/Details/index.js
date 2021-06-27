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

import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
  datasets: [
    {
      label: '100% გრანტი',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '70% გრანტი',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '50% გრანტი',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(3, 252, 211)',
    },
    {
      label: 'უგრანტო',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(185, 227, 93)',
    },
    {
      label: 'შეუვსებელი ადგილები',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

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
        <Bar data={data} options={options} />
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
