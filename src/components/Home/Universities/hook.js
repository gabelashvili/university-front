import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  actions as getUniListActions,
  selectors as getUniListSelectors,
} from 'modules/University/GetUniList';
import {
  selectors as getFilteredUniListSelectors,
} from 'modules/University/GetFilteredUniList';

export default () => {
  const LIMIT = 10;
  const dispatch = useDispatch();
  const uniList = useSelector(getUniListSelectors.selectGetUniList);
  const filteredUniList = useSelector(getFilteredUniListSelectors.selectGetFilteredUniList);
  const history = useHistory();

  const handleNavigate = (uniId) => {
    history.push(`/university/${uniId}/details`);
  };

  console.log(filteredUniList);

  const handleBodyScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight
      && uniList.data.universities.length < uniList.data.totally) {
      dispatch(getUniListActions.getUniList.request({
        offset: uniList.data.universities.length,
        limit: LIMIT,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleBodyScroll);
    return () => window.removeEventListener('scroll', handleBodyScroll);
  }, [uniList]);

  useEffect(() => {
    if (!filteredUniList.data.universities) {
      dispatch(getUniListActions.getUniList.request({
        offset: 0,
        limit: LIMIT,
      }));
    } else {
      dispatch(getUniListActions.getUniList.reset());
    }
  }, [filteredUniList.data.universities]);
  return {
    uniList: filteredUniList.data.universities
      ? filteredUniList.data.universities
      : uniList.data.universities,
    handleNavigate,
  };
};
