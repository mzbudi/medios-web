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
              <div className={classes.Container_Content}>
                  <img width='480px'
                    height='350px'
                    className={classes.Image_Border}
                    src={image} />
                  <div class={classes.Text_Block1}>
                    <h4 class={classes.TextBlock_Title}>BIDANG SERVICE</h4>
                    <div class={classes.Text_Block2}>
                      <h4 className={classes.TextBlock_Content1}>NAMA PROJECT</h4>
                      <p className={classes.TextBlock_Content2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid lg={4} item container direction="column">
            <div className={classes.Container_Content}>
                  <img width='480px'
                    height='350px'
                    className={classes.Image_Border}
                    src={image} />
                  <div class={classes.Text_Block1}>
                    <h4 class={classes.TextBlock_Title}>BIDANG SERVICE</h4>
                    <div class={classes.Text_Block2}>
                      <h4 className={classes.TextBlock_Content1}>NAMA PROJECT</h4>
                      <p className={classes.TextBlock_Content2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                  </div>
                </div>
            </Grid>
            <Grid lg={4} item container direction="column">
              <Grid item>
                <div className={classes.Container_Content}>
                  <img width='480px'
                    height='350px'
                    className={classes.Image_Border}
                    src={image} />
                  <div class={classes.Text_Block1}>
                    <h4 class={classes.TextBlock_Title}>BIDANG SERVICE</h4>
                    <div class={classes.Text_Block2}>
                      <h4 className={classes.TextBlock_Content1}>NAMA PROJECT</h4>
                      <p className={classes.TextBlock_Content2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                  </div>
                </div>
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
