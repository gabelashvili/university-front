import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import { Nav } from 'components/Header/Navigation/styles';

export const Navigation = ({ navigationRef }) => {
  const navScrollState = useSelector(navScrollSelector.selectScrollState);

  return (
    <Nav ref={navigationRef} isScrolled={navScrollState}>Navigation</Nav>
  );
};

export default Navigation;
