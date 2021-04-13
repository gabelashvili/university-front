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

const Universities = () => (
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
        <Button costumStyles={ButtonStyle} type="button">
          გადასვლა
          <ArrowIcon />
        </Button>
      </Card>
    ))}
  </Div>
);

export default Universities;
