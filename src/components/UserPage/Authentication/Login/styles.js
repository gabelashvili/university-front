import styled, { css } from 'styled-components';

export const Form = styled.form`
    gap: 15px;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Recover = styled.p`
    font-weight: 500;
    cursor: pointer;
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 16px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        font-size: 14px;
    }
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
