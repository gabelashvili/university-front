import Container from 'components/Container';
import { Header } from 'components/University';
import { useParams } from 'react-router-dom';

const universityPage = () => {
  const { tabName } = useParams();
  return (
    <>
      <Header />
      <Container isCentered>
        {tabName === 'details' && 'details'}
        {tabName === 'lectures' && 'lectures'}
        {tabName === 'feedback' && 'feedback'}
      </Container>
    </>
  );
};

export default universityPage;
