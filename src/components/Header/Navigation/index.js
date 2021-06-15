import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import {
  Nav, navContainer, Logo, Wrapper, Icon, menuButtonStyle, NavWrapper,
} from 'components/Header/Navigation/styles';
import Button from 'components/Button';
import { propTypes } from 'components/Header/Navigation/types';
import UserIcon from 'Icons/UserIcon';
import LogoutIcon from 'Icons/Logout';
import { Link } from 'react-router-dom';
import {
  hooks as authedUserHook,
} from 'modules/Authentication/AuthedUser';
import Container from 'components/Container';

export const Navigation = ({ navigationRef }) => {
  const isScrolled = useSelector(navScrollSelector.selectScrollState);
  const { authedUser, isAuthed, logoutUser } = authedUserHook.useAuthedUser();
  return (
    <NavWrapper>
      <Nav ref={navigationRef} isScrolled={isScrolled}>
        <Container isCentered costumStyles={navContainer}>
          <Logo>YOURUniversity</Logo>
          <Wrapper>
            <div>
              <Link to="/">
                <Button
                  type="span"
                  costumStyles={menuButtonStyle}
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
              <Link to={authedUser.isAuthed ? `/user/profile/${authedUser.userId}` : '/user/login'}>
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
              {authedUser.isAuthed && (
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
                handleClick={logoutUser}
              >
                <Icon isScrolled={isScrolled}>
                  <LogoutIcon />
                </Icon>
                გასვლა
              </Button>
              )}
            </div>
          </Wrapper>
        </Container>
      </Nav>
    </NavWrapper>
  );
};

Navigation.propTypes = propTypes;

export default Navigation;
