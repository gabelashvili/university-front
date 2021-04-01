import styled from 'styled-components';
import headerBg from 'assets/headerBg.jpg';

export const Div = styled.div`
  background-image: url(${headerBg});
  background-attachment: fixed;
  background-size: 1936.84px 1288px;
  background-position: 50% -281.292px;
  height: 5000px;
  position: relative;
    &:after {
      content: '';
      background-color: rgba(42, 46, 50, 0.7);
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
    }
`;
