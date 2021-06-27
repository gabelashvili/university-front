import styled, { keyframes, css } from 'styled-components';

const navigationAnimation = keyframes`
  from {
    transform: translateY(-1000%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.white};
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'fixed')};
    animation: ${({ isScrolled }) => (isScrolled === true ? css`${navigationAnimation} 0.5s` : '')};
    border-bottom: 1px solid #e0e0e0;
    z-index: 3;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 12%);
    @media ${({ theme }) => theme.device.laptopL} {
      height: 60px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
      height: 50px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      height: 40px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
    }
`;

export const NavWrapper = styled.div`
  height: 100%;
`;

export const navContainer = css`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

export const Logo = styled.h1`
  color: black;
  margin-right: 25px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 22px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  & a {
    text-decoration: none;
  }
`;

export const Icon = styled.div`
  & > svg {
    width: 15px;
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const buttonStyles = css`
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 14px;
  grid-column-gap: 10px;
  border-radius: 3px;
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 14px;
    padding: 8px 12px;
    & > div > svg {
      width: 13px;
    }
  }
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 13px;
    padding: 6px 10px;
    grid-column-gap: 8px;
    & > div > svg {
      width: 11px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 12px;
    padding: 5px 8px;
    grid-column-gap: 6px;
    & > div > svg {
      width: 10px;
    }
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 11px;
    grid-column-gap: 5px;
    & > div > svg {
      width: 8px;
    }
  }
`;
