import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import headerBg from 'assets/headerBg.jpg';
import Navigation from 'components/Header/Navigation';
import { actions as navScrollActions } from 'modules/NavScroll';
import { useDispatch } from 'react-redux';

const Div = styled.div`
  background-image: url(${headerBg});
  background-attachment: fixed;
  background-size: 1936.84px 1288px;
  background-position: 50% -281.292px;
  height: 5000px;
  position: relative;
  &:after {
    content: '';
    background-color: rgba(42, 46, 50, 0.7);
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigationRef = useRef();
  const handleScroll = () => {
    const navigationHeight = navigationRef.current.clientHeight;
    if (window.pageYOffset >= navigationHeight / 2) {
      dispatch(navScrollActions.setScrollState.request(true));
    } else {
      dispatch(navScrollActions.setScrollState.request(false));
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Div>
      <Navigation navigationRef={navigationRef} />
    </Div>
  );
};

export default Header;
