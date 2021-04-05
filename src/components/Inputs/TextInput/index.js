/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Div, InputLabel, InputWrapper, IconWrapper, Input,
} from 'components/Inputs/TextInput/styles';

const TextInput = React.forwardRef((props, ref) => {
  const {
    label, Icon, iconColor, value, type, name, isError,
  } = props;
  return (
    <Div>
      <InputLabel>
        {label}
        {' '}
        :
      </InputLabel>
      <InputWrapper>
        {Icon && <IconWrapper iconColor={iconColor}><Icon /></IconWrapper>}
        <Input
          {...props}
          showIcon={Icon}
          value={value}
          type={type}
          name={name}
          ref={ref}
          isError={isError}
        />
      </InputWrapper>
    </Div>
  );
});

TextInput.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.func,
  iconColor: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  isError: PropTypes.bool,
};

export default TextInput;
