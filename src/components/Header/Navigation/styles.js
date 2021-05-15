import styled, { keyframes, css } from 'styled-components';

const navigationAnimation = keyframes`
  from {
    transform: translateY(-1000%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.white};
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'relative')};
    animation: ${({ isScrolled }) => (isScrolled === true ? css`${navigationAnimation} 0.5s` : '')};
    border-bottom: 1px solid #e0e0e0;
    z-index: 3;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 12%);
`;

export const navContainer = css`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

export const Logo = styled.h1`
  color: black;
  margin-right: 25px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
  }
  & a {
    text-decoration: none;
  }
`;

export const Icon = styled.div`
  & > svg {
    width: 15px;
    fill: ${({ theme }) => theme.colors.black};
  }
`;
