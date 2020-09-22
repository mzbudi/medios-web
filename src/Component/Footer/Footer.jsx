import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import logo from '../../Assets/Icon/Logo Medios.svg';
import linkedin from '../../Assets/Icon/linkedin.svg';
import facebook from '../../Assets/Icon/facebook.svg';
import instagram from '../../Assets/Icon/instagram (1).svg';
import phone from '../../Assets/Icon/phone.svg';
import mail from '../../Assets/Icon/mail.svg';
import './footer.css';

function Footer() {
  return (
    <>
      <Container>
        <Grid container spacing={8} style={{ backgroundColor: '#F2FFF9', margin: '0px' }}>
          <Grid item xs={4}>
            <img src={logo} alt="logo" height="72" width="120" />
            <p id="footerText">
              Specialized IT Solution in health service but not limited to them, for your instances & companies
            </p>
            <div>
              <img src={instagram} alt="logo" height="50" width="22" />
              <img src={facebook} alt="logo" height="50" width="22" />
              <img src={linkedin} alt="logo" height="50" width="22" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <p id="footerTitle">Menu</p>
            <br />
            <table>
              <tr>
                <td>
                  <a id="footerText" style={{ textDecoration: 'none' }} href="/">
                    About Medios
                  </a>
                </td>
                <td>
                  <a id="footerText" style={{ textDecoration: 'none', marginLeft: '40px' }} href="/Service">
                    Service
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a id="footerText" style={{ textDecoration: 'none' }} href="/">
                    Product
                  </a>
                </td>
                <td>
                  <a id="footerText" style={{ textDecoration: 'none', marginLeft: '40px' }} href="/">
                    Project
                  </a>
                </td>
              </tr>
            </table>
          </Grid>
          <Grid item xs={4}>
            <p id="footerTitle">Contact Us</p>
            <br />
            <table>
              <tr>
                <td>
                  <img src={phone} alt="logo" height="20" width="22" />
                </td>
                <td>
                  <p id="footerText">+62 xxx-xxxx-xxxx</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={mail} alt="logo" height="20" width="22" />
                </td>
                <td>
                  <p id="footerText">contactmedios.com 24 X 7 online support</p>
                </td>
              </tr>
            </table>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <div>
          <p id="footerTextExtra">© 2020 MEDIOS. Hak Cipta Dilindungi oleh Undang-Undang.</p>
        </div>
      </Container>
    </>
  );
}

export default Footer;
