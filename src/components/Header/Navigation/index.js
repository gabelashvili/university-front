import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import {
  Nav, NavContainer, Logo, Wrapper, Icon,
} from 'components/Header/Navigation/styles';
import Button from 'components/Button';
import { propTypes } from 'components/Header/Navigation/types';
import UserIcon from 'Icons/UserIcon';
import { Link } from 'react-router-dom';

export const Navigation = ({ navigationRef }) => {
  const isScrolled = useSelector(navScrollSelector.selectScrollState);

  return (
    <Nav ref={navigationRef} isScrolled={isScrolled}>
      <NavContainer isCentered>
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
                Sign In
              </Button>
            </Link>
          </div>
        </Wrapper>
      </NavContainer>
    </Nav>
  );
};

Navigation.propTypes = propTypes;

export default Navigation;
