import styled, { keyframes, css } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Div = styled.div`
    max-width: 430px;
    width: 100%;
    margin: auto;
    margin-top: 40px;
`;

export const containerStyles = css`
  margin: auto;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media ${({ theme }) => theme.device.laptopL} {
      margin-bottom: 25px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
      margin-bottom: 20px;
    }
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    & svg {
        width: 60px;
        margin-top: 20px;
    }
`;

export const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid ${({ theme }) => theme.colors.lightGreen};
  background: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 20px;
`;

export const buttonStyles = css`
  padding:  10px 20px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 1px;
  @media ${({ theme }) => theme.device.laptopL} {
    padding:  8px 16px;
    font-size: 15px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding:  7px 14px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding:  7px 12px;
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.mobileL} {
  }  
`;
