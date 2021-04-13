import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Div = styled.div`
  max-width: ${({ theme }) => theme.settings.containerMaxWidth};
  box-shadow: 0px 2px 7px -5px #000000;
  background-color: ${({ theme }) => theme.colors.white};
  margin: auto;
  margin-top: 50px;
  padding: 0 30px;
`;

export const Card = styled.div`
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

export const Details = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 18px;
`;

export const Location = styled.div`
  display: flex;
  justify-self: center;
  & > svg {
    width: 20px;
    margin-right: 8px;
    fill: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const ButtonStyle = css`
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
