import {
  Div, Tabs, containerStyle, buttonStyle,
} from 'components/University/Header/styles';
import Container from 'components/Container';
import Button from 'components/Button';

const Header = () => (
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
          active
          costumStyles={buttonStyle}
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
        >
          შეფასებები
        </Button>
      </Tabs>
    </Container>
  </Div>
);

export default Header;
