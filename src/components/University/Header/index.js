import {
  Div, Tabs, containerStyle, buttonStyle,
} from 'components/University/Header/styles';
import Container from 'components/Container';
import Button from 'components/Button';
import { useParams, useHistory } from 'react-router-dom';

const Header = () => {
  const { tabName } = useParams();
  const history = useHistory();
  const handleClick = (name) => {
    history.push(name);
  };
  return (
    <Div>
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
            active={tabName === 'feed'}
            handleClick={() => handleClick('feed')}
          >
            შეფასებები
          </Button>
        </Tabs>
      </Container>
    </Div>
  );
};

export default Header;
