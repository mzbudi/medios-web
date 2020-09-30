import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ReactComponent as Drone } from '../../Assets/Images SVG/Drone.svg';
import ellipse from '../../Assets/Icon/Ellipse.svg';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import useStyles from './ServicesStyle';

function IOT() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.HeaderImage}>
            <Header />
            <div className={classes.textStyle}>
              <h1>Internet of Things</h1>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.Card_Style}>
            <CardContent>
              <div className={classes.Cirlce}>
                <Drone className={classes.Main_ImageSection} />
              </div>
              <p className={classes.Title_Card}>Internet of </p>
              <p className={classes.Title_Extra}>Things</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <h1 className={classes.Title}>Feature</h1>
          <table>
            <tr>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot_Left} />
              </td>
              <td>
                <p className={classes.Card_Title}>Smart Warehouse</p>
              </td>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot} />
              </td>
              <td>
                <p className={classes.Card_Title}>Smart Office</p>
              </td>
            </tr>
            <tr>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot_Left} />
              </td>
              <td>
                <p className={classes.Card_Title}>Smart Home</p>
              </td>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot} />
              </td>
              <td>
                <p className={classes.Card_Title}>Smart Factory</p>
              </td>
            </tr>
          </table>
          <h1 className={classes.Title}>Description</h1>
          <p className={classes.Card_Title}>
            Pada fitur Internet of Things (IoT), konektivitas hardware ataupun sensor untuk memberikan data yang akurat.
            Anda tidak perlu melakukan input karena semua terkoneksi dengan sensor ke sistem ERP Anda.
          </p>
        </Grid>
      </Grid>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default IOT;
