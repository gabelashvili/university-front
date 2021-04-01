import React from 'react';
import Box from '@material-ui/core/Box';
import NavBar from 'components/Header/NavBar';
import backgroundImage from 'assets/banner-home-02.jpg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '1852.63px 1232px',
    backgroundPosition: '50% -278.708px',
    height: '5000px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(42, 46, 50, 0.7)',
      width: '100%',
      height: '100%',
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <NavBar />
    </Box>
  );
};

export default Header;
