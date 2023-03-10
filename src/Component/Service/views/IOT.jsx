import React from 'react';
import { Typography, Card, Grid, CardContent } from '@material-ui/core/';
import { ReactComponent as Drone } from '../../../Assets/Images SVG/Drone.svg';
import ellipse from '../../../Assets/Icon/Ellipse.svg';
import './styles.css';
import useStyles from './styles';

function IOT() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} md={12}>
          <div className={classes.HeaderImage}>
            <Typography align="center" className={classes.Main_Text}>
              Internet of Things
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} md={4} className={classes.Grid_Margin}>
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
        <Grid item xs={12} lg={7} md={7} className={classes.Grid_Margin}>
          <h1 className={classes.Title}>Features</h1>
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
          <p className={classes.Card_Title_Description}>
            Internet of Things (IoT), hardware & sensor connectivities provides you accurate & reliable data. You don't
            need to make any data input, everything is connected to your ERP system.
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default IOT;
