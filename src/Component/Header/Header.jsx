import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { ReactComponent as Logo } from '../../Assets/Icon/Logo Medios.svg';
import { ReactComponent as ID } from '../../Assets/Icon/FLAG ID.svg';
import { ReactComponent as UK } from '../../Assets/Icon/FLAG UK.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menubar: {
    backgroundColor: 'inherit',
  },
  contactBtn: {
    background: 'linear-gradient(114deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box;',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '5px 15px 30px #3939391A',
    opacity: 1,
  },
  menuBtn: {
    background: 'inherit',
    borderRadius: 3,
    border: 0,
    color: 'black',
    '&:hover': {
      background: 'inherit',
    },
    marginRight: theme.spacing(2),
  },
  logo: {
    height: '112px',
    width: '134px',
  },
  flag: {
    height: '25px',
    width: '25px',
  },
  flagID: {
    padding: '0px 0px',
    minWidth: '40px',
  },
  flagUK: {
    padding: '0px 0px',
    minWidth: '40px',
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menubar}>
        <Toolbar>
          <Logo className={classes.logo} />
          <div className={classes.title} />
          <Button component={Link} to="/about" className={classes.menuBtn}>
            About Medios
          </Button>
          <Button component={Link} to="/product" className={classes.menuBtn}>
            Product
          </Button>
          <Button component={Link} to="/service" className={classes.menuBtn}>
            Service
          </Button>
          <Button component={Link} to="/project" className={classes.menuBtn}>
            Project
          </Button>
          <Button className={classes.flagID}>
            <ID className={classes.flag} />
          </Button>
          <Button className={classes.flagUK}>
            <UK className={classes.flag} />
          </Button>
          <Button component={Link} to="/contact" className={classes.contactBtn}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
