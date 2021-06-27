import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Div = styled.div`
  margin: 50px 0;
  display: grid;
  grid-row-gap: 10px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin: 45px 0;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    margin: 40px 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 35px 0;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    margin: 25px 0;
  }
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    & > button {
      justify-self: self-end;
    };
    border: 1px solid ${({ theme }) => transparentize(0.7, theme.colors.lightGrey)};
    padding: 20px 20px;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0px 0px 30px rgb(0 0 0 / 20%);
      transform: scale(1.02)
    };
    border-radius: 5px;
    @media ${({ theme }) => theme.device.laptopL} {
      padding: 18px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
      padding: 14px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      padding: 12px;
    }
    @media (max-width: 650px) {
      grid-template-columns: 2.5fr 1.5fr 1fr;
      grid-column-gap: 25px;
    }  
    @media ${({ theme }) => theme.device.mobileL} {
      padding: 8px;
    }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  @media ${({ theme }) => theme.device.laptopL} {
    width: 40px;
    height: 40px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    width: 30px;
    height: 30px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 25px;
    height: 25px;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 20px;
    height: 20px;
  }  
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 18px;
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 17px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 12px;
  }  
`;

export const Location = styled.div`
  display: flex;
  justify-self: center;
  & > svg {
    width: 20px;
    margin-right: 8px;
    fill: ${({ theme }) => theme.colors.lightGrey};
  }
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 15px;
    & > svg {
      width: 18px;
      margin-right: 8px;
      fill: ${({ theme }) => theme.colors.lightGrey};
    }; 
  }
  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 14px;
    & > svg {
      width: 16px;
      margin-right: 8px;
      fill: ${({ theme }) => theme.colors.lightGrey};
    }; 
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 13px;
    & > svg {
      width: 14px;
      margin-right: 6px;
      fill: ${({ theme }) => theme.colors.lightGrey};
    }; 
  }
  @media (max-width: 650px) {
    justify-self: flex-start;
  }  
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 12px;
  }  
`;

export const ButtonStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.lightGreen};
  padding: 5px 30px;
  border-radius: 3px;
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.white};
    & > svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  };
  & > svg {
    width: 16px;
    fill: ${({ theme }) => theme.colors.lightGreen};
    margin-left: 8px;
    @media (max-width: 650px) {
      margin-left: 0px;
      width: 12px;
    }  
  }
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 5px 20px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 5px 16px;
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 4px 12px;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    padding: 3px 10px;
    font-size: 12px;
  }  
`;

export const RaitingWrapper = styled.div`
  @media ${({ theme }) => theme.device.laptopL} {
    transform: scale(0.95);
  }
  @media ${({ theme }) => theme.device.laptopL} {
    transform: scale(0.85);
  }
  @media ${({ theme }) => theme.device.tablet} {
    transform: scale(0.75);
  }
  @media (max-width: 650px) {
    display: none;
  }  
`;

export const ButtonText = styled.p`
  @media (max-width: 650px) {
    display: none;
  }  
`;
