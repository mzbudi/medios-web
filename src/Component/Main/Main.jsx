import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
// import { ReactComponent as Logo } from '../../Assets/Icon/Logo Medios.svg';
import useStyles from './MainStyle';
import Header from '../Header';
import Footer from '../Footer';
import { ReactComponent as App } from '../../Assets/Images SVG/Responsive.svg';
import { ReactComponent as Mobile } from '../../Assets/Images SVG/Mobile.svg';
import { ReactComponent as Drone } from '../../Assets/Images SVG/Drone.svg';
import { ReactComponent as AI } from '../../Assets/Images SVG/AI.svg';
import { ReactComponent as Analyst } from '../../Assets/Images SVG/Analist.svg';

function Main() {
  const classes = useStyles();

  const OpeningText = () => (
    <>
      <p className={classes.Main_OpeningText}>
        Specialized IT Solution in health service but not limited to them, for your instances & companies
      </p>
      <p className={classes.Main_OpeningText2}>
        We already apply standard procedure that guarantee safety & optimality for your needs to give you a
        comprehensive IT solutions
      </p>
    </>
  );

  const ImageSection = () => (
    <>
      <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center' }} spacing={3}>
        <Grid lg={4} item container direction="column">
          <Grid item>
            <App className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Web and Mobile Apps</b>
            </p>
          </Grid>
          <Grid item>
            <p>We develop responsive websites and Smartphone Applications along with good UI/UX designs.</p>
          </Grid>
        </Grid>
        <Grid lg={4} item container direction="column">
          <Grid item>
            <Mobile className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Desktop Software</b>
            </p>
          </Grid>
          <Grid item>
            <p>We develop software that have great UI/UX design that can run on a variety of your desktop OS.</p>
          </Grid>
        </Grid>
        <Grid lg={4} item container direction="column">
          <Grid item>
            <Drone className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Internet of Things</b>
            </p>
          </Grid>
          <Grid item>
            <p>We create IoT solutions that can be used to support your business needs and demand.</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center' }} spacing={3}>
        <Grid container item direction="column" lg={2} />
        <Grid container item direction="column" lg={4}>
          <Grid item>
            <AI className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Analysis, processing, classification data</b>
            </p>
          </Grid>
          <Grid item>
            <p>We develop software that have great UI/UX design that can run on a variety of your desktop OS.</p>
          </Grid>
        </Grid>
        <Grid container item direction="column" lg={4}>
          <Grid item>
            <Analyst className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Artificial intelligence & Machine Learning</b>
            </p>
          </Grid>
          <Grid item>
            <p>We develop software that have great UI/UX design that can run on a variety of your desktop OS.</p>
          </Grid>
        </Grid>
        <Grid container item direction="column" lg={2} />
      </Grid>
    </>
  );

  return (
    <>
      <Header />
      <Container>
        <OpeningText />
        <ImageSection />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
