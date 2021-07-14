import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const containerStyles = css`
    padding: 10px;
    border-radius: 5px;
    padding-bottom: 150px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    @media (max-width: 1200px) {
        grid-template-columns: 1.5fr 3fr;
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Lectures = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${({ theme }) => theme.device.tablet} {
        max-width: 350px;
        grid-template-columns: repeat(1, 1fr);
        margin: auto;
    }
`;

export const ButtonWrapper = styled.div`
    transform: scaleY(0) translateY(100%);
`;

export const buttonStyles = css`
    border: 1px solid ${({ theme }) => transparentize(0.1, theme.colors.green)};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    padding: 8px;
    height: 100%;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => transparentize(0.9, theme.colors.green)};
    }
`;

export const Lecture = styled.div`
    padding: 20px 20px 30px;
    text-align: center;
    box-shadow: 0px 0px 18px 1px rgb(0 0 0 / 5%);
    width: 100%;
    height: max-content;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.1, theme.colors.black)};
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    position: relative;
    &:hover {
        transition: 0.5s;
        padding-bottom: 68px;
        margin-bottom: -75px;
        @media (max-width: 900px) {
            margin-bottom: -38px;
        }
        z-index: 1;
        & ${ButtonWrapper} {
            transform: scaleY(1) translateY(100%);
            transition: all 0.3s;
        }
    };
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const LectureImg = styled.img`
    border-radius: 50%;
    border: 10px solid ${({ theme }) => transparentize(0.9, theme.colors.blue)};
    width: 120px;
    height: 120px;
`;

export const LectureTitle = styled.h2`
    font-weight: 700;
    font-size: 20px;
    margin: 20px 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    @media ${({ theme }) => theme.device.laptop} {
        font-size: 18px;
    }
`;

export const LectureDesc = styled.p`
    font-size: 13px;
    color:${({ theme }) => transparentize(0.2, theme.colors.lightGrey)};
    font-weight: 500;
    margin-bottom: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const RaitingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Filters = styled.div`
    background: red;
    height: max-content;
    box-shadow: 3px 3px 9px rgb(0 0 0 / 8%);
    background-color: ${({ theme }) => transparentize(0.1, theme.colors.white)};;
    padding: 10px 20px;
`;

export const FilterTitle = styled.h1`
    font-weight: 600;
    font-size: 18px;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.7, theme.colors.black)};
    padding-bottom: 10px;
`;

export const Search = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => transparentize(0.7, theme.colors.black)};
    padding: 8px;
    color: ${({ theme }) => transparentize(0.3, theme.colors.lightGrey)};
    &:focus {
        outline: 0;
    };
    margin: 30px 0 20px;
`;

export const Ul = styled.ul`
    padding-left: 20px;
`;

export const Li = styled.li`
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme, active }) => transparentize(0.3, theme.colors[active ? 'lightGreen' : 'lightGrey'])};
    margin-bottom: 7px;
    transition: color 0.3s;
    &:hover {
        color: ${({ theme }) => transparentize(0.3, theme.colors.lightGreen)};
    }
`;

export const modalStyles = css`
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 12px 18px 1px rgb(0 0 0 / 20%);
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    & > div {
        color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
        & > div > svg  {
           fill: ${({ theme }) => transparentize(0.1, theme.colors.black)}
        }
    }
`;

export const AddComment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.8, theme.colors.black)};
    padding: 20px 0;
`;

export const Textarea = styled.textarea`
    width: 100%;
    &:focus {
        outline: 0;
    };
    resize: vertical;
    padding: 8px;
`;

export const addButtonStyles = css`
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.black};
    height: max-content;
    padding: 8px;
    font-size: 13px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    font-weight: 500;
    background-color: ${({ theme }) => transparentize(0.2, theme.colors.lightGreen)};
    &:hover {
        background-color: ${({ theme }) => transparentize(0.05, theme.colors.lightGreen)};
    };
    margin-left: 5px;
`;

export const deleteButtonStyles = css`
    border: 1px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.black};
    height: max-content;
    padding: 8px;
    font-size: 13px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    font-weight: 500;
    background-color: ${({ theme }) => transparentize(0.2, theme.colors.red)};
    &:hover {
        background-color: ${({ theme }) => transparentize(0.05, theme.colors.red)};
    };
`;

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    max-height: 100%;
    overflow: auto;
    width: 100%;
    
&::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar
    {
        width: 5px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
        background-color: ${({ theme }) => transparentize(0.2, theme.colors.lightGrey)};
        border: 2px solid ${({ theme }) => transparentize(0.2, theme.colors.lightGrey)};
    }

`;

export const Comment = styled.div`
    display: flex;
    margin-top: 15px;
    width: 100%;
`;

export const ComAvatar = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    & > img,svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

export const ComAvatarImg = styled.img``;

export const ComDetails = styled.div`
    margin-left: 10px;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.8, theme.colors.black)};
    padding-bottom: 10px;
    width: 100%;
`;

export const ComAuthor = styled.p`
    font-weight: 700;
`;

export const ComAuthorWrapper = styled.div`
    display: flex;
    padding-right: 20px;
`;

export const ComText = styled.p`
    word-break: break-word;
    font-size: 14px;
`;

export const EditCom = styled.div`
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
    transform: translate(-50%, 10%);
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
    & div:first-child {
        margin-right: auto;
    }
`;
