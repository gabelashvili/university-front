import styled, { css } from 'styled-components';
import Container from 'components/Container';

const Div = styled.div``;

const containerStyles = css`
  display: grid;
  grid-template-areas: 
    "Header Header LastPosts"
    "UniversityDetails UniversityDetails LastPosts"
    "UniversityDetails UniversityDetails .";
  grid-gap: 30px;
`;

const Header = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid red;
    margin-bottom: 30px;
`;

const Details = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 7px -5px #000000;
    border-radius: 3px;
    grid-area: Header;
`;

const LastPosts = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 7px -5px #000000;
    border-radius: 3px;
    grid-area: LastPosts;
`;

const UniversityDetails = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 7px -5px #000000;
    border-radius: 3px;
    grid-area: UniversityDetails;
`;
const universityPage = () => (
  <Div>
    <Header>Header</Header>
    <Container isCentered costumStyles={containerStyles}>
      <Details>Details</Details>
      <LastPosts>LastPost</LastPosts>
      <UniversityDetails>Uni Details</UniversityDetails>
    </Container>
  </Div>
);

export default universityPage;
