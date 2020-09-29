import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from '../Header';
import Footer from '../Footer'
import image from '../../Assets/Images/Image@2x.png'
import useStyles from './ProjectStyle.js';

function Project() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <div className={classes.Content}>
        <Container style={{ textAlign: 'center' }}>
          <p className={classes.Project_Title}> Project </p>
        </Container>

        <div className="Project">
          <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center', paddingTop: '50px' }}>
            <Grid lg={4} item container direction="column">
              <Grid item>
                <img src={image} className={classes.Project_Image} alt="Image1" />
              </Grid>
            </Grid>
            <Grid lg={4} item container direction="column">
              <Grid item>
                <img src={image} className={classes.Project_Image} alt="Image2" />
              </Grid>
            </Grid>
            <Grid lg={4} item container direction="column">
              <Grid item>
                <img src={image} className={classes.Project_Image} alt="Image3" />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ marginTop: "300px" }}>
        <Footer />
      </div>
    </>
  );




}

export default Project;
