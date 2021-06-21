import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const containerStyles = css`
    padding: 10px;
    border-radius: 5px;
    padding-bottom: 150px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
`;

export const Lectures = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
`;

export const ButtonWrapper = styled.div`
    transform: scaleY(0) translateY(100%);
    transition: all 0.1s;
`;

export const buttonStyles = css`
    border: 1px solid ${({ theme }) => transparentize(0.1, theme.colors.blue)};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => transparentize(0.9, theme.colors.blue)};
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
        padding-bottom: 68px;
        margin-bottom: -75px;
        z-index: 1;
        & ${ButtonWrapper} {
            transform: scaleY(1) translateY(100%);
        }
    }
`;

export const LectureImg = styled.img`
    border-radius: 50%;
    border: 10px solid ${({ theme }) => transparentize(0.9, theme.colors.blue)};
    width: 120px;
    height: 120px;
`;

export const LectureTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    margin: 20px 0 5px;
`;

export const LectureDesc = styled.p`
    font-size: 13px;
    color:${({ theme }) => transparentize(0.2, theme.colors.lightGrey)};
    font-weight: 500;
    margin-bottom: 20px;
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
    color: ${({ theme }) => transparentize(0.3, theme.colors.lightGrey)};
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
    & > div {
        color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
        & > div > svg  {
           fill: ${({ theme }) => transparentize(0.1, theme.colors.black)}
        }
    }
`;

export const AddComment = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
`;

export const Textarea = styled.textarea`
    width: 100%;
    &:focus {
        outline: 0;
    };
    resize: none;
    margin-right: 15px;
    padding: 8px;
`;

export const addButtonStyles = css`
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.black};
    height: max-content;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => transparentize(0.1, theme.colors.lightGreen)};
        color: ${({ theme }) => theme.colors.white};
    };
`;
