import styled, { css } from 'styled-components';

export const Div = styled.div``;

export const containerStyles = css`
  display: grid;
  grid-template-areas: 
    "Header Header LastPosts"
    "UniversityDetails UniversityDetails LastPosts"
    "UniversityDetails UniversityDetails .";
  grid-gap: 30px;
`;

export const Details = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 7px -5px #000000;
    border-radius: 3px;
    grid-area: Header;
`;

export const LastPosts = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 7px -5px #000000;
    border-radius: 3px;
    grid-area: LastPosts;
`;

export const UniversityDetails = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 7px -5px #000000;
    border-radius: 3px;
    grid-area: UniversityDetails;
`;
