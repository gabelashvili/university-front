import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
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

export const Section = styled.section`
    margin-bottom: 30px;
`;

export const SectionTitle = styled.h1`
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => transparentize(0.95, theme.colors.lightGrey)};
    padding: 10px 30px 10px;
    border-left: 4px solid ${({ theme }) => transparentize(0.1, theme.colors.lightGreen)};
    margin-bottom: 20px;
`;

export const SectionDesc = styled.p`
    font-size: 16px;
    padding-left: 30px;
    color: ${({ theme }) => transparentize(0.3, theme.colors.black)};
    line-height: 1.5;
    margin-bottom: 15px;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
    list-style: none;
    color: ${({ theme }) => transparentize(0.3, theme.colors.black)};
    font-size: 16px;
    position: relative;
    margin-bottom: 10px;
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
