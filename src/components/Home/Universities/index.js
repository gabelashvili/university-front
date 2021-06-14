import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
import { useHistory } from 'react-router-dom';
import Container from 'components/Container';
import {
  actions as getUniListActions,
  selectors as getUniListSelectors,
} from 'modules/University/GetUniList';

const Universities = () => {
  const LIMIT = 10;
  const dispatch = useDispatch();
  const uniList = useSelector(getUniListSelectors.selectGetUniList);
  const history = useHistory();

  const handleNavigate = (uniId) => {
    history.push(`/university/${uniId}/details`);
  };

  useEffect(() => {
    dispatch(getUniListActions.getUniList.request({
      offset: 0,
      limit: LIMIT,
    }));
  }, []);

  return (
    <Container isCentered>
      <Div>
        {uniList?.data?.universities && uniList.data.universities.map((uni) => (
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
