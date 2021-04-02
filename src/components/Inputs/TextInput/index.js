import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div``;
const InputLabel = styled.p`
    color: #666;
    margin-bottom: 10px
`;

const InputWrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    transform: translate(10px,-50%);
    & > svg {
        width: 24px;
        fill: ${({ iconColor, theme }) => theme.colors[iconColor]}
    }
`;

const Input = styled.input`
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
`;

const TextInput = ({
  label, Icon, iconColor, ref, value, onChange,
}) => (
  <Div>
    <InputLabel>
      {label}
      {' '}
      :
    </InputLabel>
    <InputWrapper>
      {Icon && <IconWrapper iconColor={iconColor}><Icon /></IconWrapper>}
      <Input showIcon={Icon} ref={ref} value={value} onChange={onChange} />
    </InputWrapper>
  </Div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.func,
  iconColor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
};

export default TextInput;
