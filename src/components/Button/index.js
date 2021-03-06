import { Button, LoaderWrapper } from 'components/Button/styles';
import { propTypes } from 'components/Button/types';
import Loader from 'Icons/Loader';

const ButtonComponent = (props) => {
  const {
    children,
    active,
    bgColor,
    bgColorOpacity,
    width,
    height,
    padding,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    margin,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderColor,
    borderWidth,
    borderStyle,
    spaceBetween,
    hoverBgColor,
    hoverBgColorOpacity,
    hoverTextColor,
    hoverTextColorOpacity,
    textColor,
    textColorOpacity,
    fontSize,
    fontWeight,
    type,
    cursorType,
    borderRadius,
    handleClick,
    costumStyles,
    isLoading,
  } = props;
  return (
    <Button
      {...props}
      costumStyles={costumStyles}
      bgColor={bgColor}
      bgColorOpacity={bgColorOpacity}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
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
      hoverBgColor={hoverBgColor}
      hoverBgColorOpacity={hoverBgColorOpacity}
      textColor={textColor}
      textColorOpacity={textColorOpacity}
      hoverTextColor={hoverTextColor}
      hoverTextColorOpacity={hoverTextColorOpacity}
      fontSize={fontSize}
      fontWeight={fontWeight}
      cursorType={cursorType}
      borderRadius={borderRadius}
      as={type || 'div'}
      onClick={handleClick}
      isLoading={isLoading}
      active={active}
    >
      {children}
      {isLoading && (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      )}
    </Button>
  );
};

ButtonComponent.propTypes = propTypes;

export default ButtonComponent;
