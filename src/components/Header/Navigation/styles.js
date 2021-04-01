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
    background-color: ${(props) => (props.isScrolled && 'white')};
    position: ${(props) => (props.isScrolled && 'fixed')};
    animation: ${(props) => (props.isScrolled === true ? css`${navigationAnimation} 0.5s` : '')};
    border-bottom: 1px solid #e0e0e0;
    z-index: 1;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 12%);
`;
