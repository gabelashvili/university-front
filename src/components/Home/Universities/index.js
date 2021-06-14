import Button from 'components/Button';
import ArrowIcon from 'Icons/Arrow';
import LocationIcon from 'Icons/Location';
import {
  Div,
  Card,
  Details,
  Title,
  Location,
  ButtonStyle,
  Img,
  DetailsWrapper,
} from 'components/Home/Universities/styles';
import Container from 'components/Container';
import useUnisHook from 'components/Home/Universities/hook';

const Universities = () => {
  const {
    uniList,
    handleNavigate,
  } = useUnisHook();
  return (
    <Container isCentered>
      <Div>
        {uniList.map((uni) => (
          <Card key={uni.id}>
            <Details>
              <Img src={uni.image} alt="" />
              <DetailsWrapper>
                <Title>{uni.name}</Title>
                <p>rating</p>
              </DetailsWrapper>
            </Details>
            <Location>
              <LocationIcon />
              {uni.location}
            </Location>
            <Button costumStyles={ButtonStyle} type="button" handleClick={() => handleNavigate(uni.id)}>
              გადასვლა
              <ArrowIcon />
            </Button>
          </Card>
        ))}
      </Div>
    </Container>
  );
};

export default Universities;
