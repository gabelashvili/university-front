import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Div = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    margin: 50px 0;
    @media ${({ theme }) => theme.device.tablet} {
        flex-direction: column;
    }
`;

export const Box = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 6%);
    border-radius: 4px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: max-content;
`;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 15px 30px;
    color: #333;
    background-color: #fff;
    display: block;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.8, theme.colors.lightGrey)};
    border-radius: 4px 4px 0 0;
    background-color: ${({ theme }) => transparentize(0.95, theme.colors.black)};
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 13px 26px;
        font-size: 15px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        padding: 11px 20px;
        font-size: 14px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: 9px 17px;
        font-size: 13px;
    }
`;

export const Content = styled.div`
    padding: 30px;
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 26px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        padding: 20px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: 17px;
    }
`;

export const ProfilePhoto = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    margin-bottom: 30px;
    @media ${({ theme }) => theme.device.laptopL} {
        width: 230px;
        height: 230px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        width: 190px;
        height: 190px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        width: 160px;
        height: 160px;
        margin: auto;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

export const uploadButton = css`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => transparentize(0.3, theme.colors.lightGrey)};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    padding: 12px 20px;
    font-size: 13px;
    cursor: pointer;
    border-radius: 30px;
    width: max-content;
    & svg {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        fill: ${({ theme }) => theme.colors.white};
    };
    &:hover{
        background-color: ${({ theme }) => transparentize(0.2, theme.colors.lightGreen)};
    }
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 10px 18px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        padding: 8px 16px;
    }
    @media ${({ theme }) => theme.device.tablet} {
    }
`;

export const UploadInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const InputWrapper = styled.div`
    margin-bottom: 30px;
`;

export const Label = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    & svg {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        font-size: 14px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        font-size: 13px;
    }
`;

export const Error = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.colors.red};
    margin-bottom: 9px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    padding: 14px 18px;
    outline: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGrey};
    margin: 0;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: ${({ theme }) => transparentize(0.95, theme.colors.black)};
    font-weight: 500;
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.red : transparentize(0.9, theme.colors.black))};
    opacity: 1;
    width: 100%;
    &:focus {
        outline: none;
    }
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 12px 16px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        padding: 11px 15px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: 8px 12px;
        font-size: 13px;
    }
`;

export const saveButton = css`
    font-size: 16px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    cursor: pointer;
    width: max-content;
    padding: 13px 15px;
    border-radius: 5px;
    margin-left: auto;
    &:hover{
        background-color: ${({ theme }) => theme.colors.black};
    };
    &:disabled {
        cursor: not-allowed;
    };
    @media ${({ theme }) => theme.device.laptopL} {
        padding: 11px 13px;
        font-size: 15px;
    }
    @media ${({ theme }) => theme.device.laptop} {
        padding: 9px 11px;
        font-size: 14px;
    }
    @media ${({ theme }) => theme.device.tablet} {
        padding: 9px 11px;
        font-size: 13px;
    }
`;
