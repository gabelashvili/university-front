/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actions as navScrollActions } from 'modules/NavScroll';

export const handleScrollHook = ({ navigationRef }) => {
  const dispatch = useDispatch();
  const { body } = document;
  const html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
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
