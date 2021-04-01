import React from 'react';
import { Button } from 'components/Button/styles';

const ButtonComponent = ({
  children,
  bgColor,
  width,
  height,
  padding,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  borderColor,
  borderWidth,
  borderStyle,
  spaceBetween,
  onHoverBgColor,
  onHoverTextColor,
  textColor,
  fontSize,
  fontWeight,
  type,
  cursorType,
  borderRadius,

}) => (
  <Button
    bgColor={bgColor}
    width={width}
    height={height}
    padding={padding}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    borderColor={borderColor}
    borderWidth={borderWidth}
    borderStyle={borderStyle}
    spaceBetween={spaceBetween}
    onHoverBgColor={onHoverBgColor}
    textColor={textColor}
    onHoverTextColor={onHoverTextColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    cursorType={cursorType}
    borderRadius={borderRadius}
    as={type || 'div'}
  >
    {children}
  </Button>
);

export default ButtonComponent;
