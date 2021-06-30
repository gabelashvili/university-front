import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const IconWrapper = styled.div`
    display: flex;
    & > svg {
        fill: ${({ checked, theme }) => (checked ? transparentize(0.4, theme.colors.yellow) : transparentize(0.4, theme.colors.lightGrey))};
    }
`;

export const Stars = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    & div {
        height: 100%;
        width: 10px;
        &:nth-child(2n + 1) {
            transform: scaleX(-1);
        }
        ${({ isDisabled }) => !isDisabled && css`
            &:hover ~ ${IconWrapper} svg, :hover${IconWrapper} svg {
            fill: ${({ theme }) => transparentize(0, theme.colors.yellow)};
        }
        `}
    }
`;
