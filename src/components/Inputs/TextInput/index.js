import React from 'react';
import PropTypes from 'prop-types';
import {
  Div, InputLabel, InputWrapper, IconWrapper, Input,
} from 'components/Inputs/TextInput/styles';

const TextInput = ({
  label, Icon, iconColor, ref, value, onChange, type,
}) => (
  <Div>
    <InputLabel>
      {label}
      {' '}
      :
    </InputLabel>
    <InputWrapper>
      {Icon && <IconWrapper iconColor={iconColor}><Icon /></IconWrapper>}
      <Input showIcon={Icon} ref={ref} value={value} onChange={onChange} type={type} />
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
  type: PropTypes.string,
};

export default TextInput;
