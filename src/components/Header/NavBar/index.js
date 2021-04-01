import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
  },
});

export const NavBar = () => {
  const classes = useStyles();
  return (
    (
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
  );
};

export default NavBar;
