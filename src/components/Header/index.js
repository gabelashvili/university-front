import { useRef } from 'react';
import Navigation from 'components/Header/Navigation';
import { hooks as navScrollHooks } from 'modules/NavScroll';
import { Div } from 'components/Header/styles';

const Header = () => {
  const navigationRef = useRef();
  navScrollHooks.handleScrollHook({ navigationRef });

  return (
    <Div>
      <Navigation navigationRef={navigationRef} />
    </Div>
  );
};

export default Header;
