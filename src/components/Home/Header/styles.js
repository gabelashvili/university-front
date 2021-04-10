import styled from 'styled-components';
import mainBanner from 'assets/mainBanner.jpg';

export const Div = styled.div`
  background-image: url(${mainBanner});
  background-attachment: fixed;
  background-size: 1912.78px 1272px;
  background-position: 50% -280.547px;
  max-height: 530px;
  position: relative;
  &::before {
    content: "''";
    position: absolute;
    background-color: rgba(42, 46, 50, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Filters = styled.div`
  position: relative;
  padding: 150px 0;
  z-index: 1;
  max-width: ${({ theme }) => theme.settings.containerMaxWidth};
  margin: auto;
`;

export const Title = styled.h1`
    font-size: 36px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 30px;
    letter-spacing: 1px;
`;

export const FiltersWrapper = styled.div`
    display: grid;
    grid-template-columns: 5fr 5fr 1fr;
    grid-column-gap: 30px;
    height: 60px;
`;

export const IconWrapper = styled.div`
  & svg {
    width: 24px;
    display: flex;
    fill: ${({ theme }) => theme.colors.darkWhite}
  }
`;
