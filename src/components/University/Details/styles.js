import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import TriangleIcon from 'assets/right-arrow.svg';
import ArrowIcon from '../../../assets/doubleArrow.svg';

export const Div = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-column-gap: 25px;
`;

export const SectionList = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const RightSide = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 20px;
    height: max-content;
    border: 2px solid #e8ecec;
    border-radius: 8px;
    padding: 30px;
    cursor: pointer;
`;

export const BoxIcon = styled.div`
    & > svg {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        display: flex;
        fill: ${({ theme }) => transparentize(0.3, theme.colors.blue)};
        transition: all 0.3s;
    }
`;

export const BoxContent = styled.div``;

export const BoxTitle = styled.p`
    font-size: 15px;
    color: ${({ theme }) => transparentize(0.2, theme.colors.black)};
    font-weight: 500;
`;

export const BoxDesc = styled.p`
    color: ${({ theme }) => transparentize(0.4, theme.colors.black)};
    margin-top: 7px;
    font-size: 15px;
    font-weight: 500;
`;

export const RaitingWrapper = styled.div`
    margin-top: 7px;
    display: flex;
    & p {
        margin-left: 4px;
        margin-top: 0;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    &:hover > ${BoxIcon}{
        & svg {
         fill: ${({ theme }) => transparentize(0.3, theme.colors.lightGreen)};
        }
    }
`;

export const SectionDesc = styled.p`
    font-size: 16px;
    padding-left: 30px;
    color: ${({ theme }) => transparentize(0.3, theme.colors.black)};
    line-height: 1.5;
    margin-bottom: 15px;
    overflow: hidden;
`;

export const Section = styled.section`
    margin-bottom:  ${({ isOpen }) => (isOpen ? '30px' : '0px')};
    & > ${SectionDesc} {
        margin-bottom: ${({ isOpen }) => (isOpen ? '15px' : '0px')};
        max-height: ${({ isOpen }) => (isOpen ? '7000px' : '0px')};
        transition: ${({ isOpen }) => (isOpen ? 'max-height 6s' : 'all 0s')};
    }
`;

export const SectionTitle = styled.h1`
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => transparentize(0.95, theme.colors.lightGrey)};
    padding: 10px 30px 10px;
    border-left: 4px solid ${({ theme }) => transparentize(0.1, theme.colors.lightGreen)};
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;
    &::after {
        position: absolute;
        content: '';
        background-image: url(${TriangleIcon});
        right: 0;
        top: 50%;
        transform: ${({ isOpen }) => (isOpen ? 'translate(-100% , -50%) rotate(90deg)' : 'translate(-100% , -50%) rotate(-90deg)')};
        transition: all 0.3s;
        width: 16px;
        height: 16px;
    }
`;

export const Ul = styled.ul`
    padding-left: 20px;
`;

export const Li = styled.li`
    list-style: none;
    color: ${({ theme }) => transparentize(0.3, theme.colors.black)};
    font-size: 16px;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
    &::after {
        position: absolute;
        content: ' ';
        background-image: url(${ArrowIcon});
        background-size: 100%;
        background-repeat: no-repeat;
        display: block;
        width: 10px; 
        height: 10px;
        top: 0;
        left: 0;
        transform: translate(-200% , 70%);
    }
`;

export const modalStyles = css`
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 12px 18px 1px rgb(0 0 0 / 20%);
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    & > div:first-child {
        color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
        margin-bottom: 30px;
        & > div > svg  {
           fill: ${({ theme }) => transparentize(0.1, theme.colors.black)}
        }
    }
`;
