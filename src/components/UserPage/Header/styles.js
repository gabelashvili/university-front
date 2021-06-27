import styled from 'styled-components';
import userPageImg from 'assets/userPage.jpg';

export const Div = styled.div`
    background: url(${userPageImg});
    padding: 40px 0;
    margin: 0;
    border-top: 1px solid #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 36px 0;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 32px 0;
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: 26px 0;
    }
    @media ${({ theme }) => theme.device.mobileL} {
        padding: 20px 0;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1px;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 26px;
        margin-bottom: 8px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 22px;
        margin-bottom: 7px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 18px;
        margin-bottom: 4px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
        font-size: 18px;
    }
`;

export const BreadCrumb = styled.div`
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 16px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 15px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        line-height: 14px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
        font-size: 13px;
    }
`;
