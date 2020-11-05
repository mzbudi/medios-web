import React from 'react';
import { Link } from 'react-router-dom';
import {
  Link as MLink,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  Collapse,
  List,
  ListItem,
} from '@material-ui/core';
import { ExpandLess, ExpandMore, Dehaze } from '@material-ui/icons';
import { logoMedios, flagId, flagUk } from '../../Assets/Icon';

import useStyles from './HeaderStyle.js';

function Header() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);
  const anchorRef = React.useRef(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    setOpenMobile(!openMobile);
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
      <ListItem component={Link} to="/about">
        <Button className={classes.Header_BtnResponsive}>About Medios</Button>
      </ListItem>
      <ListItem onClick={handleClick}>
        <Button className={classes.Header_BtnResponsive}>Product</Button>
        {openMobile ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openMobile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem component={Link} to="/product" button className={classes.Header_Nested}>
            CMS
          </ListItem>
          <ListItem button className={classes.Header_Nested}>
            DSS-CoividNet
          </ListItem>
          <ListItem button className={classes.Header_Nested}>
            EHR-HIS
          </ListItem>
        </List>
      </Collapse>
      <ListItem component={Link} to="/service">
        <Button className={classes.Header_BtnResponsive}>Service</Button>
      </ListItem>
      <ListItem component={Link} to="/project">
        <Button className={classes.Header_BtnResponsive}>Project</Button>
      </ListItem>
      <ListItem component={Link} to="/contact">
        <Button variant="contained" className={classes.Header_ContactBtn}>
          Contact
        </Button>
      </ListItem>
    </Menu>
  );

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={classes.Header_Root}>
      <AppBar position="absolute" className={classes.Header_Menubar}>
        <Toolbar>
          <MLink component={Link} to="/">
            <img src={logoMedios} alt="Medios Logo" className={classes.Header_Logo} />
          </MLink>
          <div className={classes.Header_Grow} />
          <div className={classes.Header_Menulist}>
            <Button component={Link} to="/about" className={classes.Header_MenuBtn} disableRipple>
              About Medios
            </Button>
            <Button
              className={classes.Header_MenuBtn}
              onMouseEnter={handleToggle}
              ref={anchorRef}
              disableRipple
              // onMouseLeave={handleToggle}
            >
              Product
              <ExpandMore />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
              {({ transitionProps }) => (
                <Paper {...transitionProps} className={classes.Header_ProductPoP}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleClose}>Cloud Medical System</MenuItem>
                      <MenuItem onClick={handleClose}>DSS-CoividNet</MenuItem>
                      <MenuItem onClick={handleClose}>EHR-HIS</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              )}
            </Popper>

            <Button component={Link} to="/service" className={classes.Header_MenuBtn} disableRipple>
              Service
            </Button>
            <Button component={Link} to="/project" className={classes.Header_MenuBtn} disableRipple>
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
              <Dehaze />
            </IconButton>
          </div>
          {renderMobileMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
