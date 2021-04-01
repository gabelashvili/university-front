import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import { Nav, NavContainer, Logo } from 'components/Header/Navigation/styles';
import Button from 'components/Button';

export const Navigation = ({ navigationRef }) => {
  const isScrolled = useSelector(navScrollSelector.selectScrollState);

  return (
    <Nav ref={navigationRef} isScrolled={isScrolled}>
      <NavContainer isCentered>
        <Logo>YOURUniversity</Logo>
        <Button
          cursorType="pointer"
          onHoverBgColor="lightGreen"
          paddingLeft="14px"
          paddingRight="14px"
          paddingTop="10px"
          paddingBottom="10px"
          borderRadius="3px"
          textColor={isScrolled && 'black'}
        >
          Home
        </Button>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
