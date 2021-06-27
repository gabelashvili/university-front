import styled from 'styled-components';

export const Div = styled.div``;
export const InputLabel = styled.p`
    color: #666;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 15px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 14px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 13px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    height: 100%;
`;

export const IconWrapper = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    transform: translate(10px,-50%);
    & > svg {
        width: 24px;
        fill: ${({ iconColor, theme }) => theme.colors[iconColor]};
        @media ${({ theme }) => theme.device.laptopL} {
            width: 22px;
        }
        @media ${({ theme }) => theme.device.laptopL} {
            width: 19px;
        }
        @media ${({ theme }) => theme.device.tablet} {
            width: 16px;
        }
        @media ${({ theme }) => theme.device.mobileL} {
            width: 14px;
        }  
    }
`;

export const Input = styled.input`
    padding: ${({ showIcon }) => (showIcon ? '14px 20px 14px 40px' : '14px 20px 14px 20px')};
    outline: none;
    font-size: 14px;
    color: #909090;
    margin: 0;
    height: ${({ height }) => (height || '100%')};
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    opacity: 1;
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.red : theme.colors.grey)};
    @media ${({ theme }) => theme.device.laptopL} {
        padding: ${({ showIcon }) => (showIcon ? '12px 18px 12px 36px' : '12px 18px 12px 18px')};
        font-size: 13px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        padding: ${({ showIcon }) => (showIcon ? '10px 16px 10px 35px' : '10px 15px 10px 16px')};
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: ${({ showIcon }) => (showIcon ? '8px 14px 6px 33px' : '6px 15px 6px 14px')};
        font-size: 12px;
    }
    @media ${({ theme }) => theme.device.mobileL} {
       
    }  
`;
