import Container from 'components/Container';
import {
  Header, Feedback, Details, Lectures,
} from 'components/University';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import { useEffect } from 'react';
import {
  actions as getUniInfoActions,
} from 'modules/University/GetUniInfo';

const universityPage = () => {
  const { tabName, id: uniId } = useParams();
  const dispatch = useDispatch();
  const {
    resetList,
  } = useFetchedPostsHook();

  useEffect(() => () => {
    if (tabName !== 'feed') {
      resetList();
    }
  }, [tabName]);

  useEffect(() => {
    dispatch(getUniInfoActions.getUniInfo.request(uniId));
  }, []);

  useEffect(() => () => dispatch(getUniInfoActions.getUniInfo.reset()), []);

  return (
    <>
      <Header />
      <Container isCentered>
        {tabName === 'details' && <Details />}
        {tabName === 'lectures' && <Lectures />}
        {tabName === 'news' && <Feedback />}
      </Container>
    </>
  );
};

export default universityPage;
