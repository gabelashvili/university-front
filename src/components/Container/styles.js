import styled, { css } from 'styled-components';

export const Div = styled.div`
    max-width: ${({ theme }) => theme.settings.containerMaxWidth};
    ${({ isCentered }) => isCentered && css`margin:auto`};
    ${({ costumStyles }) => (costumStyles)};
    padding: 0 50px;
    @media ${({ theme }) => theme.device.laptop} {
        padding: 0 20px;;
    }
`;
