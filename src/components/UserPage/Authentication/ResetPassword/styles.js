import styled, { css } from 'styled-components';

export const buttonStyle = css`
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    width: max-content;
    margin-right: 1px;
    margin-top: 15px;
    justify-self: flex-end;
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 15px;
    & div {
        height: auto;
    }
`;
