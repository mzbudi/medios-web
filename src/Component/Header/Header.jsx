import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { ReactComponent as Logo } from '../../Assets/Icon/Logo Medios.svg';
import { ReactComponent as ID } from '../../Assets/Icon/FLAG ID.svg';
import { ReactComponent as UK } from '../../Assets/Icon/FLAG UK.svg';
import useStyles from './HeaderStyle.js';

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.Header_Root}>
      <AppBar position="fixed" className={classes.Header_Menubar}>
        <Toolbar>
          <Logo className={classes.Header_Logo} />
          <div className={classes.Header_Tittle} />
          <Button component={Link} to="/about" className={classes.Header_MenuBtn}>
            About Medios
          </Button>
          <Button component={Link} to="/product" className={classes.Header_MenuBtn}>
            Product
          </Button>
          <Button component={Link} to="/service" className={classes.Header_MenuBtn}>
            Service
          </Button>
          <Button component={Link} to="/project" className={classes.Header_MenuBtn}>
            Project
          </Button>
          <Button className={classes.Header_FlagID}>
            <ID className={classes.Header_Flag} />
          </Button>
          <Button className={classes.Header_FlagUK}>
            <UK className={classes.Header_Flag} />
          </Button>
          <Button component={Link} to="/contact" className={classes.Header_ContactBtn}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
