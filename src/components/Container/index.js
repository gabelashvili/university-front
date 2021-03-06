import { Div } from 'components/Container/styles';
import { propTypes } from 'components/Container/types';

const Container = ({ children, isCentered, costumStyles }) => (
  <Div isCentered={isCentered} costumStyles={costumStyles}>{children}</Div>
);

Container.propTypes = propTypes;

export default Container;
