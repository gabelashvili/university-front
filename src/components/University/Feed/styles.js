import { transparentize } from 'polished';
import { css } from 'styled-components';

export const containerStyles = css`
    padding: 20px;
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 1fr 2fr 1fr;
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
    & > div {
        border: none;
        color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
        & > div > svg  {
           fill: ${({ theme }) => transparentize(0.1, theme.colors.black)}
        }
    }
`;
