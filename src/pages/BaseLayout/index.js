import Header from 'components/Header';
import PropTypes from 'prop-types';

const baseLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

baseLayout.propTypes = {
  children: PropTypes.node,
};

export default baseLayout;
