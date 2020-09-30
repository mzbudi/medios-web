import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ReactComponent as AI } from '../../Assets/Images SVG/AI.svg';
import ellipse from '../../Assets/Icon/Ellipse.svg';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import useStyles from './ServicesStyle';

function Analysis() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.HeaderImage}>
            <Header />
            <div className={classes.textStyle}>
              <h1>Analysis, Processing </h1>
              <h1> Classification Data</h1>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.Card_Style}>
            <CardContent>
              <div className={classes.Cirlce}>
                <AI className={classes.Main_ImageSection} />
              </div>
              <p className={classes.Title_Card}>Analysis, </p>
              <p className={classes.Title_Extra}>Processing, </p>
              <p className={classes.Title_Extra}>Classification </p>
              <p className={classes.Title_Extra}>Data</p>
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
          <p className={classes.Card_Title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. .
          </p>
        </Grid>
      </Grid>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Analysis;
