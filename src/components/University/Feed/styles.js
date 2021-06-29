import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Div = styled.div`
    display: grid;
    grid-column-gap: 35px;
    grid-template-columns: 1fr 2.3fr 1fr;
`;

export const containerStylesLeft = css`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid black;
    border-radius: 10px;
    height: max-content;
`;

export const containerStylesMiddle = css`
    max-width: 100%;
    display: grid;
    grid-row-gap: 15px;
    max-width: 100%;
    padding: 0 !important;
  `;

export const containerStylesRight = css`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid green;
    border-radius: 10px;
    height: max-content;
`;

export const modalStyles = css`
   max-width: 650px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 12px 18px 1px rgb(0 0 0 / 20%);
    background-color: white;
    & > div {
        border: none;
        color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
        & > div > svg  {
           fill: ${({ theme }) => transparentize(0.1, theme.colors.black)}
        }
    }
`;
