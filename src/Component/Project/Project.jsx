import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@material-ui/core';
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
        <div className="Title">
          <Container style={{ textAlign: 'center' }}>
            <p className={classes.Project_Title}> Project </p>
          </Container>
        </div>
        <Grid item xs={12}>
          <div className={classes.Ongoing_Project}>Our Ongoing Project</div>
        </Grid>


        <div className={classes.Project_All}>
          <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center', paddingTop: '50px', margin: '20px' }}>
            <Grid lg={4} item container direction="column">
              <Grid item>
                <Card className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Image"
                    width='480px'
                    height='350px'
                    image={image}
                  />
                  <CardContent>
                    <div className={classes.Box1}>
                      <p> Bidang Service </p>
                    </div>
                    <div className={classes.Box2}>
                      <h1> Nama Project </h1>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid lg={4} item container direction="column">
            <Card className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Image"
                    width='480px'
                    height='350px'
                    image={image}
                  />
                  <CardContent>
                    <div className={classes.Box1}>
                      <p> Bidang Service </p>
                    </div>
                    <div className={classes.Box2}>
                      <h1> Nama Project </h1>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
            <Grid lg={4} item container direction="column">
              <Grid item>
              <Card className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Image"
                    width='480px'
                    height='350px'
                    image={image}
                  />
                  <CardContent>
                    <div className={classes.Box1}>
                      <p> Bidang Service </p>
                    </div>
                    <div className={classes.Box2}>
                      <h1> Nama Project </h1>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );




}

export default Project;
