import styled from 'styled-components';
import { transparentize } from 'polished';

export const ToolTip = styled.div`
    background: ${({ theme }) => theme.colors.white};
    visibility: hidden;
    top: 0;
    position: absolute;
    transition: all 0.3s ease-in-out;
    transform: translateY(-120%);
    width: max-content;
    padding: 10px;
    border-radius: 15px;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 15px;
    border: ${({ theme }) => `1px solid ${transparentize(0.2, theme.colors.lightGrey)}`};
    box-shadow: 0px 2px 7px -5px #000000;
`;

export const IconWrapper = styled.div`
    transform: ${({ dislike }) => dislike && 'scaleX(-1) rotate(180deg)'};
    display: flex;
    align-items: center;
    position: relative;
    &:hover::after {
        position: absolute;
        content: "${({ title }) => `${title}`}";
        top: 0;
        left: 50%;
        transform: ${({ dislike }) => (dislike ? 'translate(-50%,170%) scaleX(-1) rotate(-180deg)' : 'translate(-50%,-170%)')};
        background-color: ${({ theme }) => transparentize(0.3, theme.colors.black)};
        color: ${({ theme }) => theme.colors.white};
        padding: 2px 8px 2px 8px;
        border-radius: 15px;
        font-size: 12px;
    }
    & svg {
        fill: ${({ theme, color }) => theme.colors[color]};
        width: 20px;
        height: 20px;
        &:hover{
            transform: scale(1.3);
            transition: all 0.2s;
            transform: ${({ dislike }) => (dislike ? 'translateY(30%)' : 'translateY(-30%)')} scale(1.3);
        }
    }
`;
