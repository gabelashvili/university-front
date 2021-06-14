/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actions as navScrollActions } from 'modules/NavScroll';

export const handleScrollHook = ({ navigationRef }) => {
  const dispatch = useDispatch();
  const handleScroll = () => {
    const navigationHeight = navigationRef?.current?.clientHeight;

    if (window.pageYOffset >= navigationHeight) {
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
};
