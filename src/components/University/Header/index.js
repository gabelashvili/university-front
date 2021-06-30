import {
  Div, Tabs, containerStyle, buttonStyle,
} from 'components/University/Header/styles';
import { useSelector } from 'react-redux';
import Container from 'components/Container';
import Button from 'components/Button';
import { useParams, useHistory } from 'react-router-dom';
import {
  selectors as getUniInfoSelectors,
} from 'modules/University/GetUniInfo';

const Header = () => {
  const { tabName } = useParams();
  const uniInfo = useSelector(getUniInfoSelectors.selectGetUniInfo);

  const history = useHistory();
  const handleClick = (name) => {
    history.push(name);
  };
  return (
    <Div bgImg={uniInfo?.data?.university?.coverImage.split('\\images\\').join('/images/')}>
      <Container isCentered costumStyles={containerStyle}>
        <Tabs>
          <Button
            padding="10px"
            cursorType="pointer"
            type="button"
            textColor="darkBlack"
            hoverBgColor="white"
            hoverBgColorOpacity={0.8}
            active={tabName === 'details'}
            costumStyles={buttonStyle}
            handleClick={() => handleClick('details')}
          >
            ინფორმაცია
          </Button>
          <Button
            padding="10px"
            cursorType="pointer"
            type="button"
            textColor="darkBlack"
            hoverBgColor="white"
            hoverBgColorOpacity={0.8}
            costumStyles={buttonStyle}
            active={tabName === 'lectures'}
            handleClick={() => handleClick('lectures')}
          >
            ლექტორები
          </Button>
          <Button
            padding="10px"
            cursorType="pointer"
            type="button"
            textColor="darkBlack"
            hoverBgColor="white"
            hoverBgColorOpacity={0.8}
            costumStyles={buttonStyle}
            active={tabName === 'news'}
            handleClick={() => handleClick('news')}
          >
            სიახლეები
          </Button>
        </Tabs>
      </Container>
    </Div>
  );
};

export default Header;
