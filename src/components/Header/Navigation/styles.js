import styled, { keyframes, css } from 'styled-components';
import Container from 'components/Container';

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
    background-color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.white : 'transparent')};
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'relative')};
    animation: ${({ isScrolled }) => (isScrolled === true ? css`${navigationAnimation} 0.5s` : '')};
    border-bottom: 1px solid #e0e0e0;
    z-index: 1;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 12%);
`;

export const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

export const Logo = styled.h1`
`;
