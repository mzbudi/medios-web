import React from 'react';
import { Typography, Card, Grid, CardContent } from '@material-ui/core/';
import { ReactComponent as Responsive } from '../../../Assets/Images SVG/Responsive.svg';
import ellipse from '../../../Assets/Icon/Ellipse.svg';
import './styles.css';
import useStyles from './styles';

function Web() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} md={12}>
          <div className={classes.HeaderImage}>
            <Typography align="center" className={classes.Main_Text}>
              Web and Mobile Apps
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} md={4} className={classes.Grid_Margin}>
          <Card className={classes.Card_Style}>
            <CardContent>
              <div className={classes.Cirlce}>
                <Responsive className={classes.Main_ImageSection} />
              </div>
              <p className={classes.Title_Card}>Web and </p>
              <p className={classes.Title_Extra}>Mobile Apps</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} md={6} className={classes.Grid_Margin}>
          <h1 className={classes.Title}>Features</h1>
          <table>
            <tr>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot_Left} />
              </td>
              <td>
                <p className={classes.Card_Title}>Lorem Ipsum</p>
              </td>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot} />
              </td>
              <td>
                <p className={classes.Card_Title}>Lorem Ipsum</p>
              </td>
            </tr>
            <tr>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot_Left} />
              </td>
              <td>
                <p className={classes.Card_Title}>Lorem Ipsum</p>
              </td>
              <td>
                <img src={ellipse} alt="logo" className={classes.Dot} />
              </td>
              <td>
                <p className={classes.Card_Title}>Lorem Ipsum</p>
              </td>
            </tr>
          </table>
          <h1 className={classes.Title}>Description</h1>
          <p className={classes.Card_Title_Description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. .
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default Web;