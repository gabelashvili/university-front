import React from 'react';
import Button from 'components/Button';
import ArrowIcon from 'Icons/Arrow';
import LocationIcon from 'Icons/Location';
import {
  Div,
  Card,
  Details,
  Title,
  Location,
  ButtonStyle,
  Img,
  DetailsWrapper,
} from 'components/Home/Universities/styles';
import { useHistory } from 'react-router-dom';
import Container from 'components/Container';

const Universities = () => {
  const history = useHistory();
  const handleNavigate = (uniId) => {
    history.push(`/university/${uniId}/details`);
  };
  return (
    <Container isCentered>
      <Div>
        {new Array(5).fill(1).map((el, index) => (
          <Card key={`${el}${index + 5}`}>
            <Details>
              <Img src="https://upload.wikimedia.org/wikipedia/commons/0/08/CaLogo.jpg" alt="" />
              <DetailsWrapper>
                <Title>Caucasus University</Title>
                <p>rating</p>
              </DetailsWrapper>
            </Details>
            <Location>
              <LocationIcon />
              Tbilisi
            </Location>
            <Button costumStyles={ButtonStyle} type="button" handleClick={() => handleNavigate(el + index)}>
              გადასვლა
              <ArrowIcon />
            </Button>
          </Card>
        ))}
      </Div>
    </Container>
  );
};

export default Universities;
