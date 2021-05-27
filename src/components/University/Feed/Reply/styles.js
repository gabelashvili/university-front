import styled from 'styled-components';
import { transparentize } from 'polished';

export const Reply = styled.div`
    min-height: 30px;
    border: ${({ theme }) => `2px solid ${transparentize(0.7, theme.colors.lightGrey)}`};
    border-radius: 20px;
    padding: 8px;
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    resize: none;
    border: none;
    &:focus {
        outline: 0;
    }
`;
