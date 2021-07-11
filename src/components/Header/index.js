import { useRef } from 'react';
import Navigation from 'components/Header/Navigation';
import { hooks as navScrollHooks } from 'modules/NavScroll';
import { Div } from 'components/Header/styles';
import { ShowErrors } from 'helpers/axios';

const Header = () => {
  const navigationRef = useRef();
  navScrollHooks.handleScrollHook({ navigationRef });
  ShowErrors();
  return (
    <Div>
      <Navigation navigationRef={navigationRef} />
    </Div>
  );
};

export default Header;
