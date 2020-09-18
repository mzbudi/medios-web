import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menubar: {
    backgroundColor: 'green',
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menubar}>
        <Toolbar className={classes.title}>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">About Medios</Button>
          <Button color="inherit">Product</Button>
          <Button color="inherit">Service</Button>
          <Button color="inherit">Project</Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Main;
