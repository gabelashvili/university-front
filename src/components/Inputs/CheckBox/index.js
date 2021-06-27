import styled, { css } from 'styled-components';
import { forwardRef, useState } from 'react';

const Div = styled.div`
    display: flex;
    align-items: center;
`;
const Input = styled.input`
    background-color: transparent;
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    cursor: pointer;
    border: 2px solid ${({ theme, isError }) => (isError ? theme.colors.red : theme.colors.lightGreen)};
    transition: all 0.1s;
    margin-right: 10px;
    &:before {
        content: " ";
        position: absolute;
        top: 50%;
        right: 50%;
        bottom: 50%;
        left: 50%;
        ${({ checked }) => (checked && css`
            top: 2px;
            right: 2px;
            bottom: 2px;
            left: 2px;
        `)};
        transition: all 0.1s;
        background: ${({ theme }) => theme.colors.lightGreen};
    };
    @media ${({ theme }) => theme.device.laptopL} {
        width: 18px;
        height: 18px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        width: 16px;
        height: 16px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        width: 14px;
        height: 14px;
    }
`;
const Label = styled.p`
    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 16px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        font-size: 14px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        font-size: 13px;
    }
`;

const CheckBox = forwardRef((props, ref) => {
  const {
    label, isError,
  } = { ...props };
  const [state, setSate] = useState(false);

  return (
    <Div>
      <Input
        {...props}
        type="checkbox"
        checked={state}
        onChange={() => setSate(!state)}
        ref={ref}
        isError={isError}
      />
      <Label>{label}</Label>
    </Div>
  );
});

export default CheckBox;
