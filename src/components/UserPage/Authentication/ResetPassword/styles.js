import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const buttonStyle = css`
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    width: max-content;
    margin-right: 1px;
    margin-top: 15px;
    align-self: flex-end;
`;

export const Title = styled.p`
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
    color:  ${({ theme }) => theme.colors.lightGreen}
`;

export const Desc = styled.p`
    color:  ${({ theme }) => theme.colors.green}
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 15px;
    & div {
        height: auto;
    }
`;
