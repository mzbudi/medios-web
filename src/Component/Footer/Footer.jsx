import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Divider, Container, Typography, Link as MLink } from '@material-ui/core';
import logo from '../../Assets/Icon/Logo Medios.svg';
import linkedin from '../../Assets/Icon/linkedin.svg';
import facebook from '../../Assets/Icon/facebook.svg';
import instagram from '../../Assets/Icon/instagram (1).svg';
import phone from '../../Assets/Icon/phone.svg';
import mail from '../../Assets/Icon/mail.svg';
import useStyles from './FooterStyle.js';

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <Container>
        <Grid container spacing={4}>
          <Grid item container direction="column" xs={12} md={4} sm={12} lg={5} xl={4} spacing={3}>
            <Grid item>
              <MLink className={classes.Footer_Text} component={Link} to="/">
                <img src={logo} alt="logo" className={classes.Logo_Medios} />
              </MLink>
            </Grid>
            <Grid item>
              <Typography className={classes.Footer_Text} style={{ marginBottom: '0px' }}>
                Specialized IT Solution in health service but not limited to them, for your instances & companies
              </Typography>
            </Grid>
            <Grid item>
              <div style={{ marginBottom: '0px', marginTop: '30px' }}>
                <img src={instagram} alt="logo" className={classes.Social_Logo} />
                <img src={facebook} alt="logo" className={classes.Social_Logo} />
                <img src={linkedin} alt="logo" className={classes.Social_Logo} />
              </div>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={12} md={4} sm={12} lg={4} xl={4} spacing={3}>
            <Grid item>
              <Typography className={classes.Footer_Title_Menu}>Menu</Typography>
            </Grid>
            <Grid item container direction="row">
              <Grid item lg={6}>
                <MLink className={classes.Footer_Text} component={Link} to="/about">
                  About Medios
                </MLink>
              </Grid>
              <Grid item lg={6}>
                <MLink className={classes.Footer_Text} component={Link} to="/service">
                  Service
                </MLink>
              </Grid>
            </Grid>
            <Grid item container direction="row">
              <Grid item lg={6}>
                <MLink className={classes.Footer_Text} component={Link} to="/product">
                  Product
                </MLink>
              </Grid>
              <Grid item lg={6}>
                <MLink className={classes.Footer_Text} component={Link} to="/project">
                  Project
                </MLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={12} md={4} sm={12} lg={3} xl={4} spacing={3}>
            <Grid item>
              <Typography className={classes.Footer_Title_Contact}>Contact Us</Typography>
            </Grid>
            <Grid item container direction="row">
              <Grid item lg={2} xs={2} sm={2}>
                <img src={phone} alt="logo" className={classes.Contact_Logo} />
              </Grid>
              <Grid item lg={10} xs={9} sm={9}>
                <Typography className={classes.Footer_Text}>+62 xxx-xxxx-xxxx</Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row">
              <Grid item lg={2} xs={2} sm={2}>
                <img src={mail} alt="logo" className={classes.Contact_Logo} />
              </Grid>
              <Grid item lg={10} xs={9} sm={9}>
                <Typography className={classes.Footer_Text}>contactmedios.com</Typography>
                <Typography className={classes.Footer_Text}>24 X 7 online support</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider variant="middle" className={classes.Footer_Divider} />
        <Typography className={classes.Footer_Text_Extra}>
          © 2020 MEDIOS. Hak Cipta Dilindungi oleh Undang-Undang.
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
