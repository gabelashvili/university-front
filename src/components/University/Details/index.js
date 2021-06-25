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
} from 'components/University/Details/styles';
import Container from 'components/Container';

const Details = () => {
  const [openSection, setOpenSection] = useState(1);
  const setOpen = (id) => {
    if (id === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };
  return (
    <Container costumStyles={containerStyles}>
      <SectionList>
        <Section
          isOpen={openSection === 1}
          onClick={() => setOpen(1)}
        >
          <SectionTitle isOpen={openSection === 1}>
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
        <Section
          isOpen={openSection === 2}
          onClick={() => setOpen(2)}
        >
          <SectionTitle isOpen={openSection === 2}>qwdqwd</SectionTitle>
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
        <Section
          isOpen={openSection === 3}
          onClick={() => setOpen(3)}
        >
          <SectionTitle isOpen={openSection === 3}>რაღაც სათაყრუ</SectionTitle>
          <SectionDesc>
            რომელმან შექმნა სამყარო ძალითა მით ძლიერითა, ზეგარდმო არსნი სულითა ყვნა
          </SectionDesc>
          <SectionDesc>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
            Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
            Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
            <Ul>
              <Li>
                რაღაც ტექსტიიირაღაც ტექსტიიირაღაც ტექსტიიირაღაც
                ტექსტიიირაღაც ტექსტიიირაღაც ტექსტიიირაღაც ტექსტიიირაღაც
                ტექსტიიირაღაც ტექსტიიირაღაც ტექსტიიი
              </Li>
              <Li>
                რაღაც ტექსტიიირაღაც ტექსტიიირაღაც ტექსტიიირაღაც
              </Li>
              <Li>
                რაღაც ტექსტიიირაღაც ტექსტიიირაღაც ტექსტიიირაღაც
              </Li>
            </Ul>
          </SectionDesc>

        </Section>
      </SectionList>
      <RightSide>111</RightSide>
    </Container>
  );
};

export default Details;
