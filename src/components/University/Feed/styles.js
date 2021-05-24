/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const containerStyles = css`
    padding: 20px;
    display: grid;
    grid-column-gap: 15px;
    grid-template-areas:
    'left middle middle middle right'
    '. middle middle middle .'
`;

export const containerStylesLeft = css`
    background-color: ${({ theme }) => theme.colors.white};
    grid-area: left;
    border: 1px solid black;
    border-radius: 10px;
`;

export const containerStylesMiddle = css`
    background-color: ${({ theme }) => theme.colors.white};
    grid-area: middle;
    max-width: 100%;
    padding: 10px;
    border-radius: 10px;
`;

export const containerStylesRight = css`
    background-color: ${({ theme }) => theme.colors.white};
    grid-area: right;
    border: 1px solid green;
    border-radius: 10px;
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    border-radius: 5px;
    resize: vertical;
    padding: 10px;
    &:focus {
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
        border-color :#66afe9;
    }
`;

export const BottomPart = styled.div`
    display: flex;
    margin-top: 10px;
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

export const ImgPreview = styled.div`
    margin-left: 30px;
    position: relative;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    margin-left: auto;
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
