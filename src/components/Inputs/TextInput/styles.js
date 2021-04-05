import styled from 'styled-components';

export const Div = styled.div``;
export const InputLabel = styled.p`
    color: #666;
    margin-bottom: 10px
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const IconWrapper = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    transform: translate(10px,-50%);
    & > svg {
        width: 24px;
        fill: ${({ iconColor, theme }) => theme.colors[iconColor]}
    }
`;

export const Input = styled.input`
    padding: ${({ showIcon }) => (showIcon ? '14px 20px 14px 40px' : '14px 20px 14px 20px')};
    outline: none;
    font-size: 14px;
    color: #909090;
    margin: 0;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: #fcfcfc;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.red : 'transparent')}
`;
