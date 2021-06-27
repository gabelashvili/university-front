import styled, { css } from 'styled-components';
import mainBanner from 'assets/mainBanner.jpg';

export const Div = styled.div`
  background-image: url(${mainBanner});
  background-attachment: fixed;
  background-size: 1912.78px 1272px;
  background-position: 50% -280.547px;
  max-height: 530px;
  position: relative;
  &::before {
    content: "''";
    position: absolute;
    background-color: rgba(42, 46, 50, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Filters = styled.div`
  position: relative;
  padding: 150px 0;
  z-index: 1;
  max-width: ${({ theme }) => theme.settings.containerMaxWidth};
  margin: auto;
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 130px 0;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 90px 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 50px 0;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    padding: 20px 0;
  }
`;

export const Title = styled.h1`
    font-size: 36px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 30px;
    letter-spacing: 1px;
    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 32px;
      margin-bottom: 26px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 24px;
      margin-bottom: 24px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 20px;
      margin-bottom: 20px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
      font-size: 15px;
      margin-bottom: 14px;
    }
`;

export const FiltersWrapper = styled.div`
    display: grid;
    grid-template-columns: 5fr 5fr 1fr;
    grid-column-gap: 30px;
    height: 60px;
    @media ${({ theme }) => theme.device.laptopL} {
      grid-column-gap: 26px;
      height: 50px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
      grid-column-gap: 24px;
      height: 40px;
      & > div > div > input {
        font-size: 12px;
      }
      & > div > div > div > svg {
        width: 20px;
        height: 20px;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      grid-column-gap: 18px;
      height: 30px;
      & > div > div > div > svg {
        width: 16px;
        height: 16px;
      }
    }
    @media ${({ theme }) => theme.device.mobileL} {
      grid-column-gap: 15px;
      height: 20px;
      grid-template-columns: 1fr;
      height: max-content;
      grid-row-gap: 15px;
      & > div > div > input {
        font-size: 11px;
        height: 35px;
      }
      & > div > div > div > svg {
        width: 14px;
        height: 14px;
      }
    }
`;

export const IconWrapper = styled.div`
  & svg {
    width: 24px;
    display: flex;
    fill: ${({ theme }) => theme.colors.darkWhite};
    @media ${({ theme }) => theme.device.laptopL} {
      width: 22px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
      width: 20px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 18px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
      width: 16px;
    }
  }
`;

export const ButtonText = styled.p`
  display: none;
`;

export const buttonStyles = css`
  padding: 10px;
  @media ${({ theme }) => theme.device.mobileL} {
    padding: 8px;
    & > ${ButtonText} {
      display: block;
      font-size: 13px;
    }
    & > ${IconWrapper} {
      display: none;
    }
  }
`;
