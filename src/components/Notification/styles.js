import styled from 'styled-components';

export const Div = styled.div`
position: absolute;
top: 40px;
right: 0;
right: 20px;
z-index: 2;
width: max-content;
background-color: ${({ type, theme }) => {
    if (!type || type === 'success') {
      return theme.colors.lightGreen;
    }
    return theme.colors.red;
  }};
color: white;
padding: 15px;
display: flex;
align-items: center;
border-radius: 5px;
`;

export const IconWrapper = styled.div`
 & > svg {
  width: 24px;
  margin-left: 15px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
}
`;
