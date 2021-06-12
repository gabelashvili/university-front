import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Comment = styled.div`
    min-height: 30px;
    border: ${({ theme }) => `2px solid ${transparentize(0.7, theme.colors.lightGrey)}`};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap!important;
    padding: 8px;
    width: 100%
`;

export const TextArea = styled.div`
    border: 1px solid red;
    word-break: break-all;
    min-width: 3%;
     tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    border: none;
    &:focus {
        outline: 0;
    }
`;

export const BottomPart = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    align-items: center;
    padding-top: ${({ flexWrap }) => flexWrap && '10px'};
    & svg {
        width: 20px;
        height: 20px;
    }
`;

export const Emoji = styled.div`
    position: relative;
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 10px;
      & svg {
        width: 20px;
        height: 20px;
    }
`;

export const EmojiWrapper = styled.div`
    position: absolute;
    transform: translate(-100%,-105%);
`;

export const UploadImage = styled.div`
    
`;

export const UploadLabel = styled.label`
    display: flex;
    & > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`;

export const Upload = styled.input`
    display: none;
`;

export const ImagePreview = styled.div`
    background-color: ${({ theme }) => transparentize(0.9, theme.colors.lightGrey)};
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 10px;
`;

export const ImgWrapper = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
     position: relative;
  
`;

export const IconWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(0%, 50%);
    & > svg {
      width: 16px;
      height: 16px;
      background-color: rgb(10, 102, 194);
      box-sizing: content-box;
      padding: 6px;
      fill: white;
      border-radius: 50%
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const CommentWrapper = styled.div`
    margin-bottom: 15px;
`;

export const buttonStyles = css`
    background-color: ${({ theme }) => theme.colors.green};
    width: max-content;
    padding: 5px;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    margin: 8px 12px 0 auto;
    &:hover {
        background-color: ${({ theme }) => theme.colors.green};
    }
`;
