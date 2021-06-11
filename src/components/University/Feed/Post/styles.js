import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Post = styled.div`
    max-width: 100%;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${transparentize(0.75, theme.colors.lightGrey)}`};
    border-radius: 10px;
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

export const PostHeader = styled.div`
    display:flex;
    align-items: center;
`;

export const AuthorAvatar = styled.img`
    width: 50px;
    height: 50px;
    border: ${({ theme }) => `2px solid ${transparentize(0.2, theme.colors.lightGrey)}`};
    border-radius: 50%;
`;

export const AuthorDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const AuthorName = styled.p`
    font-size: 16px;
    font-weight: 500;    
`;

export const AuthorUni = styled.p`
    font-size: 14px;
`;

export const PostDesc = styled.div`
    margin-top: 20px;
    font-size: 14px;
    width: 100%;
    word-break: break-word;
`;

export const PostImg = styled.img`
    max-height: 300px;
    height: 100%;
    width: 100%;
    margin-top: 15px;
`;

export const PostReactions = styled.div``;

export const Reaction = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    & svg {
        width: 10px;
        height: 10px;
        margin-right: 5px;
    };
    border-bottom: ${({ theme }) => `1px solid ${transparentize(0.8, theme.colors.lightGrey)}`};
    padding: 5px 0;

`;

export const ReactionsCount = styled.p``;

export const PostBottom = styled.div`
    margin: 10px 0;
    display: flex;
`;

export const postButton = css`
    color: ${({ theme }) => transparentize(0.6, theme.colors.black)};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    & > svg {
        fill: ${({ theme }) => transparentize(0.6, theme.colors.black)};
        width: 16px;
        height: 16px;
        margin-right: 5px;
        transform: ${({ likeButton }) => likeButton && 'scaleX(-1)'}
    };
    &:hover{
        background-color: ${({ theme }) => transparentize(0.9, theme.colors.black)};
    }
`;

export const LikeButtonWrapper = styled.div`
    position: relative;
    &:hover > div {
        visibility: visible;
        transition: all 1s;
    }
`;

export const EditPost = styled.div`
    align-self: flex-start;
    margin-left: auto;
    & svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.lightGrey};
        box-sizing: content-box;
        padding: 5px;
        transition: all 0.3s;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background-color:  ${({ theme }) => transparentize(0.8, theme.colors.lightGrey)};
        }
    }
`;
