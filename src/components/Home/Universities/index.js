import React from 'react';
import Button from 'components/Button';
import ArrowIcon from 'Icons/Arrow';
import LocationIcon from 'Icons/Location';
import {
  Div,
  Card,
  Details,
  Title,
  Rating,
  Location,
  ButtonStyle,
} from 'components/Home/Universities/styles';

const Universities = () => (
  <Div>
    {new Array(5).fill().map(() => (
      <Card>
        <Details>
          <Title>Caucasus University</Title>
          <Rating>შეფასება: 3.5</Rating>
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
