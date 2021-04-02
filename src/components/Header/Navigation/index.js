import { selectors as navScrollSelector } from 'modules/NavScroll';
import { useSelector } from 'react-redux';
import {
  Nav, NavContainer, Logo, Wrapper, Icon,
} from 'components/Header/Navigation/styles';
import Button from 'components/Button';
import { propTypes } from 'components/Header/Navigation/types';
import UserIcon from 'Icons/UserIcon';

export const Navigation = ({ navigationRef }) => {
  const isScrolled = useSelector(navScrollSelector.selectScrollState);

  return (
    <Nav ref={navigationRef} isScrolled={isScrolled}>
      <NavContainer isCentered>
        <Logo>YOURUniversity</Logo>

        <Wrapper>
          <div>
            <Button
              cursorType="pointer"
              hoverBgColor="lightGreen"
              paddingLeft="14px"
              paddingRight="14px"
              paddingTop="10px"
              paddingBottom="10px"
              borderRadius="3px"
              textColor={isScrolled ? 'black' : 'white'}
              fontWeight={700}
            >
              Home
            </Button>
          </div>
          <div>
            <Button
              bgColor={isScrolled ? 'darkWhite' : 'white'}
              fontWeight={600}
              bgColorOpacity={isScrolled ? 1 : 0.1}
              hoverBgColor={isScrolled ? 'lightGreen' : 'darkWhite'}
              hoverBgColorOpacity={isScrolled ? 1 : 0.3}
              cursorType="pointer"
              borderRadius="3px"
              spaceBetween="10px"
              padding="10px 14px"
              textColor={isScrolled ? 'black' : 'white'}
              hoverTextColor={isScrolled && 'white'}
            >
              <Icon isScrolled={isScrolled}>
                <UserIcon />
              </Icon>
              Sign Up
            </Button>
            <Button
              bgColor={isScrolled ? 'darkWhite' : 'white'}
              fontWeight={600}
              bgColorOpacity={isScrolled ? 1 : 0.1}
              hoverBgColor={isScrolled ? 'lightGreen' : 'darkWhite'}
              hoverBgColorOpacity={isScrolled ? 1 : 0.3}
              cursorType="pointer"
              borderRadius="3px"
              spaceBetween="10px"
              padding="10px 14px"
              textColor={isScrolled ? 'black' : 'white'}
              hoverTextColor={isScrolled && 'white'}
            >
              <Icon isScrolled={isScrolled}>
                <UserIcon />
              </Icon>
              Sign In
            </Button>
          </div>
        </Wrapper>
      </NavContainer>
    </Nav>
  );
};

Navigation.propTypes = propTypes;

export default Navigation;
