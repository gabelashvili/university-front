import { Button } from 'components/Button/styles';
import { buttonPropTypes } from 'components/Button/types';

const ButtonComponent = ({
  children,
  bgColor,
  bgColorOpacity,
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
  onHoverBgColorOpacity,
  onHoverTextColor,
  onHoverTextColorOpacity,
  textColor,
  textColorOpacity,
  fontSize,
  fontWeight,
  type,
  cursorType,
  borderRadius,

}) => (
  <Button
    bgColor={bgColor}
    bgColorOpacity={bgColorOpacity}
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
    onHoverBgColorOpacity={onHoverBgColorOpacity}
    textColor={textColor}
    textColorOpacity={textColorOpacity}
    onHoverTextColor={onHoverTextColor}
    onHoverTextColorOpacity={onHoverTextColorOpacity}
    fontSize={fontSize}
    fontWeight={fontWeight}
    cursorType={cursorType}
    borderRadius={borderRadius}
    as={type || 'div'}
  >
    {children}
  </Button>
);

ButtonComponent.propTypes = buttonPropTypes;

export default ButtonComponent;
