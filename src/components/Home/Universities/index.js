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

  const handleBodyScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight
      && uniList.data.universities.length < uniList.data.totally) {
      dispatch(getUniListActions.getUniList.request({
        offset: uniList.data.universities.length,
        limit: LIMIT,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleBodyScroll);
    return () => window.removeEventListener('scroll', handleBodyScroll);
  }, [uniList]);

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
