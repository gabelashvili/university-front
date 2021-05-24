import Container from 'components/Container';
import { Header, Feedback } from 'components/University';
import { useParams } from 'react-router-dom';

const universityPage = () => {
  const { tabName } = useParams();
  return (
    <>
      <Header />
      <Container isCentered>
        {tabName === 'details' && 'details'}
        {tabName === 'lectures' && 'lectures'}
        {tabName === 'feed' && <Feedback />}
      </Container>
    </>
  );
};

export default universityPage;
