import Container from 'components/Container';
import {
  Div,
  containerStyles,
} from 'pages/universityPage/styles';
import { Header } from 'components/University';
import { useParams } from 'react-router-dom';

const universityPage = () => {
  const { tabName } = useParams();
  return (
    <Div>
      <Header />
      <Container isCentered costumStyles={containerStyles}>
        {tabName === 'details' && 'details'}
        {tabName === 'lectures' && 'lectures'}
        {tabName === 'feedback' && 'feedback'}
      </Container>
    </Div>
  );
};

export default universityPage;
