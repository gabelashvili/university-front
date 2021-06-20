import Container from 'components/Container';
import {
  Header, Feedback, Details, Lectures,
} from 'components/University';
import { useParams } from 'react-router-dom';
import {
  hook as useFetchedPostsHook,
} from 'modules/University/Feed/FetchedPosts';
import { useEffect } from 'react';

const universityPage = () => {
  const { tabName } = useParams();

  const {
    resetList,
  } = useFetchedPostsHook();

  useEffect(() => () => {
    if (tabName !== 'feed') {
      resetList();
    }
  }, [tabName]);

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
