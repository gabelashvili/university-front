import styled from 'styled-components';
import { transparentize } from 'polished';

export const Button = styled.div`
    background-color : ${({ bgColor, bgColorOpacity, theme }) => {
    if (bgColor && bgColorOpacity) {
      return transparentize(1 - bgColorOpacity, theme.colors[bgColor]);
    }
    if (bgColor) {
      return theme.colors[bgColor];
    }
    return 'transparent';
  }};
    color: ${({ textColor, textColorOpacity, theme }) => {
    if (textColor && textColorOpacity) {
      return transparentize(1 - textColorOpacity, theme.colors[textColor]);
    }
    if (textColor) {
      return theme.colors[textColor];
    }
    return theme.colors.white;
  }};
    width: ${({ width }) => (width || 'auto')};
    height: ${({ height }) => (height || 'auto')};
    cursor: ${({ cursorType }) => (cursorType || 'auto')};
    font-size: ${({ fontSize }) => (fontSize || 'auto')};
    font-weight: ${({ fontWeight }) => (fontWeight || 'auto')};
    padding: ${({ padding }) => (padding || 0)};
    margin-left: ${({ marginLeft }) => (marginLeft || 0)};
    margin-right: ${({ marginRight }) => (marginRight || 0)};
    margin-top: ${({ marginTop }) => (marginTop || 0)};
    margin-bottom: ${({ marginBottom }) => (marginBottom || 0)};
    padding-left: ${({ paddingLeft }) => (paddingLeft || 0)};
    padding-right: ${({ paddingRight }) => (paddingRight || 0)};
    padding-top: ${({ paddingTop }) => (paddingTop || 0)};
    padding-bottom: ${({ paddingBottom }) => (paddingBottom || 0)};
    border-color: ${({ borderColor }) => (borderColor || 'transparent')};
    border-width: ${({ borderWidth }) => (borderWidth || 0)};
    border-style: ${({ borderStyle }) => (borderStyle || 'solid')};
    border-radius: ${({ borderRadius }) => (borderRadius || 0)};
    display: grid;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    grid-column-gap: ${({ spaceBetween }) => (spaceBetween || 0)};
    transition: .3s;
    &:focus {
        outline: 0;
    }
    &:hover {
    background-color: ${({ onHoverBgColor, onHoverBgColorOpacity, theme }) => {
    if (onHoverBgColor && onHoverBgColorOpacity) {
      return transparentize(1 - onHoverBgColorOpacity, theme.colors[onHoverBgColor]);
    }
    if (onHoverBgColor) {
      return theme.colors[onHoverBgColor];
    }
    return 'transparent';
  }};
    color:  ${({ onHoverTextColorOpacity, textColorOpacity, theme }) => {
    if (onHoverTextColorOpacity && textColorOpacity) {
      return transparentize(1 - textColorOpacity, theme.colors[onHoverTextColorOpacity]);
    }
    if (onHoverTextColorOpacity) {
      return theme.colors[onHoverTextColorOpacity];
    }
    return theme.colors.white;
  }};
    }
`;