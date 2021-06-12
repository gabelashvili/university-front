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
