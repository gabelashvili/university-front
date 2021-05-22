/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const containerStyles = css`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
`;

export const containerStylesSecond = css`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    margin-top: 20px;
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    border-radius: 5px;
    &:focus {
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
        border-color :#66afe9;
    }
`;

export const Bottom = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
   
`;

export const LeftPart = styled.div`
    display: flex;
    & svg {
        width: 30px;
    }
`;

export const IconWrapper = styled.div`
  & svg {
    width: 24px;
    height: 18px;
    display: flex;
    fill: ${({ theme }) => theme.colors.darkWhite};
    margin-right: 5px;
  }
`;

export const buttonStyle = css`
    display: flex;
    align-items: end;
    letter-spacing: 0;
    font-size: 14px;
`;

export const ImageUpload = styled.div`
    
`;

export const Upload = styled.input`
    display: none;
`;

export const UploadLabel = styled.label``;

export const RemoveImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => transparentize(0.2, theme.colors.white)};
    top: 0;
    display: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;

export const ImagePreview = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    &:hover > ${RemoveImage} {
        display: flex;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

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
`;

export const ComAuthor = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
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
    border-bottom: ${({ theme }) => `1px solid ${transparentize(0.8, theme.colors.lightGrey)}`};
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

export const Emoji = styled.div`
    position: relative;
    margin-left: 10px;
`;

export const EmojiWrapper = styled.div`
    position: absolute;
    z-index: 2;
`;
