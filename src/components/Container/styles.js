import styled, { css } from 'styled-components';

export const Div = styled.div`
    max-width: ${({ theme }) => theme.settings.containerMaxWidth};
    ${({ isCentered }) => isCentered && css`margin:auto`};
    ${({ costumStyles }) => (costumStyles)};
`;
