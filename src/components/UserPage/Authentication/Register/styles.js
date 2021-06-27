import styled, { css } from 'styled-components';

export const Form = styled.form`
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const buttonStyles = css`
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 1px;
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 8px 18px;
        font-size: 16px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        padding: 8px 16px;
        font-size: 14px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: 6px 14px;
        font-size: 13px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
       
    }
`;
