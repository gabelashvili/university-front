import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import { Nav } from 'components/Header/Navigation/styles';
import Container from 'components/Container';

export const Navigation = ({ navigationRef }) => {
  const navScrollState = useSelector(navScrollSelector.selectScrollState);

  return (
    <Nav ref={navigationRef} isScrolled={navScrollState}>
      <Container isCentered>Navigation</Container>
    </Nav>
  );
};

export default Navigation;
