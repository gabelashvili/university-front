import Container from 'components/Container';
import {
  Div,
  containerStyles,
  Details,
  LastPosts,
  UniversityDetails,
} from 'pages/universityPage/styles';
import { Header } from 'components/University';

const universityPage = () => (
  <Div>
    <Header />
    <Container isCentered costumStyles={containerStyles}>
      <Details>Details</Details>
      <LastPosts>LastPost</LastPosts>
      <UniversityDetails>Uni Details</UniversityDetails>
    </Container>
  </Div>
);

export default universityPage;
