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
`;

export const Title = styled.h1`
    font-size: 30px;
    line-height: 38px;
    font-weight: 900;
    letter-spacing: 1px;
`;

export const BreadCrumb = styled.div``;
