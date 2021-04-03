import Header from 'components/Header';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Notification from 'components/Notification';

const Div = styled.div`
  position: relative;
`;

const baseLayout = ({ children }) => (
  <Div>
    <Notification />
    <Header />
    {children}
  </Div>
);

baseLayout.propTypes = {
  children: PropTypes.node,
};

export default baseLayout;
