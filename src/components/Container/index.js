import { Div } from 'components/Container/styles';

const Container = ({ children, isCentered }) => (
  <Div isCentered={isCentered}>{children}</Div>
);

export default Container;
