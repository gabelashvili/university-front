import styled, { keyframes } from 'styled-components';
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
    font-size: ${({ fontSize }) => (fontSize || 'initial')};
    font-weight: ${({ fontWeight }) => (fontWeight || 'initial')};
    margin-left: ${({ marginLeft }) => (marginLeft || 0)};
    margin-right: ${({ marginRight }) => (marginRight || 0)};
    margin-top: ${({ marginTop }) => (marginTop || 0)};
    margin-bottom: ${({ marginBottom }) => (marginBottom || 0)};
    ${({ margin }) => ({ margin })};
    padding-left: ${({ paddingLeft }) => (paddingLeft || 0)};
    padding-right: ${({ paddingRight }) => (paddingRight || 0)};
    padding-top: ${({ paddingTop }) => (paddingTop || 0)};
    padding-bottom: ${({ paddingBottom }) => (paddingBottom || 0)};
    padding: ${({ padding }) => (padding || 'auto')};
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
    background-color: ${({
    hoverBgColor, hoverBgColorOpacity, theme, bgColor,
  }) => {
    if (hoverBgColor && hoverBgColorOpacity) {
      return transparentize(1 - hoverBgColorOpacity, theme.colors[hoverBgColor]);
    }
    if (hoverBgColor) {
      return theme.colors[hoverBgColor];
    }
    return theme.colors[bgColor] || 'transparent';
  }};
    color:  ${({ hoverTextColorOpacity, hoverTextColor, theme }) => {
    if (hoverTextColorOpacity && hoverTextColor) {
      return transparentize(1 - hoverTextColorOpacity, theme.colors[hoverTextColor]);
    }
    if (hoverTextColor) {
      return theme.colors[hoverTextColor];
    }
    return theme.colors.hoverTextColor;
  }};
    }
  ${({ costumStyles }) => costumStyles}
`;

const LoaderKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
   width: 20px;
   height: 20px;
   display:inline-block;
   padding:0px;
   border-radius:100%;
   border:5px solid;
   border-top-color: ${({ theme }) => theme.colors.darkWhite};
   border-bottom-color:  ${({ theme }) => transparentize(0.7, theme.colors.darkWhite)};
   border-left-color: ${({ theme }) => theme.colors.darkWhite};
   border-right-color: ${({ theme }) => transparentize(0.7, theme.colors.darkWhite)};
   animation: ${LoaderKeyFrames} 1s ease-in-out infinite;
   margin-left: 10px;
`;
