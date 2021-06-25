/* eslint-disable global-require */
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import TriangleIcon from 'assets/right-arrow.svg';
import ArrowIcon from '../../../assets/doubleArrow.svg';

export const containerStyles = css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 25px;
`;

export const SectionList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
    height: max-content;
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
    & > div {
        color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
        margin-bottom: 30px;
        & > div > svg  {
           fill: ${({ theme }) => transparentize(0.1, theme.colors.black)}
        }
    }
`;
