import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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
    <>
      <Grid container className={classes.Container}>
        <Grid item xs={4}>
          <img src={logo} alt="logo" className={classes.Logo_Medios} />
          <p className={classes.Footer_Text}>
            Specialized IT Solution in health service but not limited to them, for your instances & companies
          </p>
          <div>
            <img src={instagram} alt="logo" className={classes.Social_Logo} />
            <img src={facebook} alt="logo" className={classes.Social_Logo} />
            <img src={linkedin} alt="logo" className={classes.Social_Logo} />
          </div>
        </Grid>
        <Grid item xs={4}>
          <p className={classes.Footer_Title}>Menu</p>
          <br />
          <table>
            <tr>
              <td>
                <a className={classes.Footer_Text} href="/">
                  About Medios
                </a>
              </td>
              <td>
                <a className={classes.Footer_Text_product} href="/Service">
                  Service
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a className={classes.Footer_Text} href="/">
                  Product
                </a>
              </td>
              <td>
                <a className={classes.Footer_Text_product} href="/">
                  Project
                </a>
              </td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={4}>
          <p className={classes.Footer_Title}>Contact Us</p>
          <br />
          <table>
            <tr>
              <td>
                <img src={phone} alt="logo" className={classes.Contact_Logo} />
              </td>
              <td>
                <p className={classes.Footer_Text}>+62 xxx-xxxx-xxxx</p>
              </td>
            </tr>
            <tr>
              <td>
                <img src={mail} alt="logo" className={classes.Contact_Logo} />
              </td>
              <td>
                <p className={classes.Footer_Text}>contactmedios.com 24 X 7 online support</p>
              </td>
            </tr>
          </table>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <div>
        <p className={classes.Footer_Text_Extra}>© 2020 MEDIOS. Hak Cipta Dilindungi oleh Undang-Undang.</p>
      </div>
    </>
  );
}

export default Footer;
