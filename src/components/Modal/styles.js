import { transparentize } from 'polished';
import styled from 'styled-components';

export const Div = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => transparentize(0.1, theme.colors.black)};
`;

export const ModalWrapper = styled.div`
max-width: 720px;
width: 100%;
background-color: ${({ theme }) => theme.colors.darkWhite};
padding: 20px;
${({ costumeStyles }) => costumeStyles};
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 10px;
border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const ModalTitle = styled.p`
font-size: 20px;
font-weight: 600px;
`;

export const IconWrapper = styled.div`
display: flex;
& svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
`;
