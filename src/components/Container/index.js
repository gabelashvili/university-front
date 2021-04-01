import { Div } from 'components/Container/styles';

const Container = ({ children, isCentered, className }) => (
  <Div isCentered={isCentered} className={className}>{children}</Div>
);

export default Container;
