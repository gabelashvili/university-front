import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import caucasusUniversity from 'assets/caucasusUniversity.png';

export const Div = styled.div`
    background-image: url(${caucasusUniversity});
    background-size: cover;
    max-height: 530px;
    position: relative;
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => transparentize(0.5, theme.colors.black)};
    }
`;

export const containerStyle = css`
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
`;

export const Tabs = styled.div`
    height: 55px;
    display: flex;
`;

export const buttonStyle = css`
    background-color: ${({ theme, active }) => transparentize(active ? 0.2 : 0.5, theme.colors.white)};
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
`;
