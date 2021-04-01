import styled from 'styled-components';

export const Button = styled.div`
    background-color: ${({ bgColor, theme }) => (theme.colors[bgColor] || 'transparent')};
    color: ${({ textColor }) => (textColor || 'white')};
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
        background-color: ${({ onHoverBgColor, theme }) => (theme.colors[onHoverBgColor] || 'transparent')};

    }
`;
