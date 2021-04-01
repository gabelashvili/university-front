import { Div } from 'components/Container/styles';
import { propTypes } from 'components/Container/types';

const Container = ({ children, isCentered, className }) => (
  <Div isCentered={isCentered} className={className}>{children}</Div>
);

Container.propTypes = propTypes;

export default Container;
