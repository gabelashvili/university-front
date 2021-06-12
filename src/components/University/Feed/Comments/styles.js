/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Comment = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const CommentDetails = styled.div`
    border-bottom: ${({ theme }) => `1px solid ${transparentize(0.8, theme.colors.lightGrey)}`};
    width: 100%;
    margin-bottom: 15px;
`;

export const ComAuthor = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
`;

export const ComAuthorUni = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: 12px;
`;

export const ComText = styled.p`
    line-height: 1;
    font-size: 14px;
    margin: 5px 0 15px;
`;

export const ComButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, 0));
    grid-column-gap: 10px;
    padding-bottom: 20px;
`;

export const comButtonStyle = css`
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
    color: ${({ theme }) => theme.colors.black};
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    background-color: ${({ theme, alreadyLiked }) => alreadyLiked && transparentize(0.6, theme.colors.lightGrey)};
    width: max-content;
    & > svg {
        width: 15px;
        height: 15px;
        transform: ${({ dislike }) => dislike && 'scaleX(-1) rotate(180deg)'};
        margin-right: ${({ alreadyLiked }) => alreadyLiked && '5px'};
    };
    &:hover {
        background-color:  ${({ theme, totalLikes }) => !totalLikes && transparentize(0.7, theme.colors.lightGrey)};
    }
`;

export const ComContainer = styled.div``;

export const ComReplies = styled.div`
    padding: 20px 0px 0 60px;
`;

export const EditComment = styled.div`
    align-self: flex-start;
    margin-left: auto;
    & svg {
        width: 15px;
        height: 15px;
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

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between
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

export const DialogButtonWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    & button {
        padding: 10px;
        font-size: 12px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.green};
        &:hover {
            background-color: ${({ theme }) => theme.colors.green}
        };
        border-radius: 5px;
    }
    & button:first-child {
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.red};
        margin-right: 5px;
        &:hover {
            background-color: ${({ theme }) => theme.colors.red};
        }
    }
`;

export const ComImg = styled.img`
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
`;

export const ShowMore = styled.p`
    text-align: center;
    cursor: pointer;
`;
