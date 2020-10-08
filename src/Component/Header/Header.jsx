import React from 'react';
import { Link } from 'react-router-dom';
import { Link as MLink, Button, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { logoMedios, flagId, flagUk } from '../../Assets/Icon';
import useStyles from './HeaderStyle.js';

function Header() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'menu-mobile-trigger';
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/about">
        <Button className={classes.Header_BtnResponsive}>About Medios</Button>
      </MenuItem>
      <MenuItem component={Link} to="/product">
        <Button className={classes.Header_BtnResponsive}>Product</Button>
      </MenuItem>
      <MenuItem component={Link} to="/service">
        <Button className={classes.Header_BtnResponsive}>Service</Button>
      </MenuItem>
      <MenuItem component={Link} to="/project">
        <Button className={classes.Header_BtnResponsive}>Project</Button>
      </MenuItem>
      <MenuItem component={Link} to="/contact">
        <Button variant="contained" className={classes.Header_ContactBtn}>
          Contact
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.Header_Root}>
      <AppBar position="absolute" className={classes.Header_Menubar}>
        <Toolbar>
          <MLink component={Link} to="/">
            <img src={logoMedios} alt="Medios Logo" className={classes.Header_Logo} />
          </MLink>
          <div className={classes.Header_Grow} />
          <div className={classes.Header_Menulist}>
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
              <img src={flagId} alt="Flag Id" className={classes.Header_Flag} />
            </Button>
            <Button className={classes.Header_FlagUK}>
              <img src={flagUk} alt="Flag Uk" className={classes.Header_Flag} />
            </Button>
            <Button variant="contained" component={Link} to="/contact" className={classes.Header_ContactBtn}>
              Contact
            </Button>
          </div>
          <div className={classes.Header_DropdownBtn}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <DehazeIcon />
            </IconButton>
          </div>
          {renderMobileMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
