import { transparentize } from 'polished';
import styled from 'styled-components';

export const Div = styled.div``;

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max-content, 0));
    grid-column-gap: 20px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.6, theme.colors.lightGrey)};
    padding: 20px 0 0;
`;

export const Text = styled.p`
    cursor: pointer;
    position: relative;
    padding-bottom: 15px;
    &::after {
        position: absolute;
        content: "";
        display: block;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme, selected }) => transparentize(selected ? 0.1 : 1, theme.colors.lightGreen)};
        transition: all 0.3s;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    cursor: pointer;
    position: relative;
    & svg {
        fill: ${({ color, theme }) => color && theme.colors[color]};
        width: 16px;
        height: 16px;
        display: flex;
        cursor: pointer;
        margin-right: 5px;
    }
    &::after {
        position: absolute;
        content: "";
        display: block;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme, selected }) => transparentize(selected ? 0.1 : 1, theme.colors.lightGreen)};
        transition: all 0.3s;
    }
`;

export const UserList = styled.div`
    padding: 15px;
    max-height: 400px;
    overflow: auto;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
`;

export const UserReaction = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    & svg {
        width: 50%;
        height: 50%;
        fill: ${({ theme }) => theme.colors.white};
    };
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(30%, -50%);
`;

export const AvatarWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    margin-right: 20px;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
`;

export const UserDetail = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.6, theme.colors.lightGrey)};
    width: 100%;
    padding-bottom: 15px;
    margin-top: 15px;
`;

export const UserName = styled.p`
    line-height: 1.2;
    font-weight: 500;
`;

export const UserUni = styled.p`
    font-size: 14px;
    line-height: 1;
`;
