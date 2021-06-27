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
  RaitingWrapper,
  ButtonText,
} from 'components/Home/Universities/styles';
import Container from 'components/Container';
import useUnisHook from 'components/Home/Universities/hook';
import Raiting from 'components/Raiting';

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
              </DetailsWrapper>
            </Details>
            <RaitingWrapper>
              <Raiting raiting={uni.rate} />
            </RaitingWrapper>
            <Location>
              <LocationIcon />
              {uni.location}
            </Location>
            <Button costumStyles={ButtonStyle} type="button" handleClick={() => handleNavigate(uni.id)}>
              <ButtonText>გადასვლა</ButtonText>
              <ArrowIcon />
            </Button>
          </Card>
        ))}
      </Div>
    </Container>
  );
};

export default Universities;
