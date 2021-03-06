import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import {
  Nav, navContainer, Logo, Wrapper, Icon, NavWrapper, buttonStyles,
} from 'components/Header/Navigation/styles';
import Button from 'components/Button';
import { propTypes } from 'components/Header/Navigation/types';
import UserIcon from 'Icons/UserIcon';
import LogoutIcon from 'Icons/Logout';
import { Link, useHistory } from 'react-router-dom';
import {
  hooks as authedUserHook,
} from 'modules/Authentication/AuthedUser';
import Container from 'components/Container';

export const Navigation = ({ navigationRef }) => {
  const history = useHistory();
  const isScrolled = useSelector(navScrollSelector.selectScrollState);
  const { authedUser, isAuthed, logoutUser } = authedUserHook.useAuthedUser();
  return (
    <NavWrapper>
      <Nav ref={navigationRef} isScrolled={isScrolled}>
        <Container isCentered costumStyles={navContainer}>
          <Logo onClick={() => history.push('/')}>YOURUniversity</Logo>
          <Wrapper>
            {!isAuthed && (
              <Link to="/user/register">
                <Button
                  bgColor="darkWhite"
                  fontWeight={600}
                  hoverBgColor="lightGreen"
                  cursorType="pointer"
                  textColor="black"
                  hoverTextColor={isScrolled && 'white'}
                  costumStyles={buttonStyles}
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
                textColor="black"
                hoverTextColor={isScrolled && 'white'}
                as="link"
                costumStyles={buttonStyles}
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
                textColor="black"
                hoverTextColor={isScrolled && 'white'}
                as="link"
                handleClick={logoutUser}
                costumStyles={buttonStyles}
              >
                <Icon isScrolled={isScrolled}>
                  <LogoutIcon />
                </Icon>
                ??????????????????
              </Button>
            )}
          </Wrapper>
        </Container>
      </Nav>
    </NavWrapper>
  );
};

Navigation.propTypes = propTypes;

export default Navigation;
