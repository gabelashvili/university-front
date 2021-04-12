import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/Button';
import ArrowIcon from 'Icons/Arrow';
import LocationIcon from 'Icons/Location';
import { transparentize } from 'polished';

const Div = styled.div`
  max-width: ${({ theme }) => theme.settings.containerMaxWidth};
  box-shadow: 0px 2px 7px -5px #000000;
  background-color: ${({ theme }) => theme.colors.white};
  margin: auto;
  margin-top: 50px;
  padding: 0 30px;
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 600;
    & > button {
      justify-self: self-end;
    };
    border-bottom: 1px solid ${({ theme }) => transparentize(0.7, theme.colors.lightGrey)};
    padding: 20px 0;
`;

const Details = styled.div`
  justify-self: self-start;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 18px;
`;

const Rating = styled.div`

`;

const Location = styled.div`
  display: flex;
  justify-self: center;
  & > svg {
    width: 20px;
    margin-right: 8px;
    fill: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const ButtonStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.lightGreen};
  padding: 5px 30px;
  border-radius: 3px;
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.white};
    & > svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  };
  & > svg {
    width: 16px;
    fill: ${({ theme }) => theme.colors.lightGreen};
    margin-left: 8px;
  }
`;

const Universities = () => (
  <Div>
    {new Array(5).fill().map(() => (
      <Card>
        <Details>
          <Title>Caucasus University</Title>
          <Rating>Rating</Rating>
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
