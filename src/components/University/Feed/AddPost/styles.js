import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const TextAreaWrapper = styled.div`
    border-radius: 5px;
    padding: 10px;
    border: ${({ theme }) => `1px solid ${transparentize(0.75, theme.colors.lightGrey)}`};
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    resize: none;
    border: none;
    &:focus {
        outline: 0;
    }
`;

export const BottomPart = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
`;

export const UploadImage = styled.div`

`;

export const UploadLabel = styled.label`
    & > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`;

export const Upload = styled.input`
    display: none;
`;

export const Emoji = styled.div`
    position: relative;
    & > svg {
        width: 20px;
        height: 20px;
    }
`;

export const EmojiWrapper = styled.div`
    position: absolute;
`;

export const ImgPreviewWrapper = styled.div`
width: 100%;
border-top: ${({ theme }) => `1px solid ${transparentize(0.3, theme.colors.lightGrey)}`};
padding: 10px 0 10px;
margin-top: 10px;
`;

export const ImgPreview = styled.div`
    position: relative;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    &:hover:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => transparentize(0.1, theme.colors.white)};
        top: 0;
        left: 0;
        border-radius: 10px;
    }
    & >svg {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }
    &:hover > svg {
        display: block;
        z-index: 1;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const NewPost = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    border: ${({ theme }) => `1px solid ${transparentize(0.75, theme.colors.lightGrey)}`}
`;

export const postButton = css`
    padding: 8px 12px;
    margin-left: auto;
    font-size: 12px;
    border-radius: 5px;
    background-color: ${({ theme, isCancel }) => (isCancel ? theme.colors.red : theme.colors.green)};
    &:hover {
        background-color: ${({ theme, isCancel }) => (isCancel ? theme.colors.red : theme.colors.green)};
    }
`;

export const PostButtonWrapper = styled.div`
   margin-left: auto;
   display: flex;
   gap: 10px;
`;

export const IconWrapper = styled.div`
    display: flex;
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
            border-radius: 50%;
        }
    }
`;
