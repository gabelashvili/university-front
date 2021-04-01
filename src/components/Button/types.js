import PropTypes from 'prop-types';
import { ReactNode } from 'react';

export const buttonPropTypes = {
  children: ReactNode,
  bgColor: PropTypes.string,
  bgColorOpacity: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  spaceBetween: PropTypes.string,
  onHoverBgColor: PropTypes.string,
  onHoverBgColorOpacity: PropTypes.number,
  onHoverTextColor: PropTypes.string,
  onHoverTextColorOpacity: PropTypes.number,
  textColor: PropTypes.string,
  textColorOpacity: PropTypes.number,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  type: PropTypes.string,
  cursorType: PropTypes.string,
  borderRadius: PropTypes.string,
};
