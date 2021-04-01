import styled, { keyframes, css } from 'styled-components';
import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';

const navigationAnimation = keyframes`
  from {
    transform: translateY(-1000%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const Navigation = ({ navigationRef }) => {
  const navScrollState = useSelector(navScrollSelector.selectScrollState);

  const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: ${(props) => (props.isScrolled && 'white')};
    position: ${(props) => (props.isScrolled && 'fixed')};
    animation: ${(props) => (props.isScrolled === true ? css`${navigationAnimation} 0.5s` : '')};
    border-bottom: 1px solid #e0e0e0;
    z-index: 1;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 12%);
  `;
  return (
    <Nav ref={navigationRef} isScrolled={navScrollState}>Navigation</Nav>
  );
};

export default Navigation;
