import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import {
  Nav, navContainer, Logo, Wrapper, Icon,
} from 'components/Header/Navigation/styles';
import Button from 'components/Button';
import { propTypes } from 'components/Header/Navigation/types';
import UserIcon from 'Icons/UserIcon';
import { Link } from 'react-router-dom';
import {
  hooks as authedUserHook,
} from 'modules/Authentication/AuthedUser';
import Container from 'components/Container';

export const Navigation = ({ navigationRef }) => {
  const isScrolled = useSelector(navScrollSelector.selectScrollState);
  const { authedUser, isAuthed } = authedUserHook.useAuthedUser();
  console.log(authedUser);
  return (
    <Nav ref={navigationRef} isScrolled={isScrolled}>
      <Container isCentered costumStyles={navContainer}>
        <Logo>YOURUniversity</Logo>
        <Wrapper>
          <div>
            <Link to="/">
              <Button
                cursorType="pointer"
                hoverBgColor="lightGreen"
                paddingLeft="14px"
                paddingRight="14px"
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="3px"
                textColor="black"
                fontWeight={700}
                type="span"
              >
                Home
              </Button>
            </Link>
          </div>
          <div>
            {!isAuthed && (
            <Link to="/user/register">
              <Button
                bgColor="darkWhite"
                fontWeight={600}
                hoverBgColor="lightGreen"
                cursorType="pointer"
                borderRadius="3px"
                spaceBetween="10px"
                padding="10px 14px"
                textColor="black"
                hoverTextColor={isScrolled && 'white'}
              >
                <Icon isScrolled={isScrolled}>
                  <UserIcon />
                </Icon>
                Sign Up
              </Button>
            </Link>
            )}
            <Link to="/user/login">
              <Button
                bgColor="darkWhite"
                fontWeight={600}
                hoverBgColor="lightGreen"
                cursorType="pointer"
                borderRadius="3px"
                spaceBetween="10px"
                padding="10px 14px"
                textColor="black"
                hoverTextColor={isScrolled && 'white'}
                as="link"
              >
                <Icon isScrolled={isScrolled}>
                  <UserIcon />
                </Icon>
                {isAuthed ? authedUser.firstName : 'Sign In'}
              </Button>
            </Link>
          </div>
        </Wrapper>
      </Container>
    </Nav>
  );
};

Navigation.propTypes = propTypes;

export default Navigation;
