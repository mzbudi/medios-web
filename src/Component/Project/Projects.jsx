import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Header from '../Header';
import Footer from '../Footer';
import image from '../../Assets/Images/Blank.png';
import useStyles from './ProjectStyle.js';

function Project() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Image_Header}>
        <Header />
        <Typography align="center" className={classes.Main_TextService}>
          Project
        </Typography>
      </div>

      <div className={classes.root}>
        <Typography>{'xs down: red'}</Typography>
        <Typography>{'xs to sm: blue'}</Typography>
        <Typography>{'sm to md: yellow'}</Typography>
        <Typography>{'md to lg: purple'}</Typography>
        <Typography>{'lg up: green'}</Typography>
      </div>

      <div className={classes.Content}>
        <div className={classes.Ongoing_Project}>Our Ongoing Project</div>
        <div>
          <Container>
            <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center' }}>
              <Grid lg={4} item container direction="column">
                <Grid item>
                  <div className={classes.Container_Content}>
                    <img className={classes.Image_Border} src={image} alt="logo" />
                    <div className={classes.Text_Block1}>
                      <h4 className={classes.TextBlock_Title}>BIDANG SERVICE</h4>
                    </div>
                    <div className={classes.Text_Block2}>
                      <h4 className={classes.TextBlock_Content1}>NAMA PROJECT</h4>
                      <p className={classes.TextBlock_Content2}>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid lg={4} item container direction="column">
                <Grid item>
                  <div className={classes.Container_Content}>
                    <img className={classes.Image_Border} src={image} alt="logo" />
                    <div className={classes.Text_Block1}>
                      <h4 className={classes.TextBlock_Title}>BIDANG SERVICE</h4>
                    </div>
                    <div className={classes.Text_Block2}>
                      <h4 className={classes.TextBlock_Content1}>NAMA PROJECT</h4>
                      <p className={classes.TextBlock_Content2}>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid lg={4} item container direction="column">
                <Grid item>
                  <div className={classes.Container_Content}>
                    <img className={classes.Image_Border} src={image} alt="logo" />
                    <div className={classes.Text_Block1}>
                      <h4 className={classes.TextBlock_Title}>BIDANG SERVICE</h4>
                    </div>
                    <div className={classes.Text_Block2}>
                      <h4 className={classes.TextBlock_Content1}>NAMA PROJECT</h4>
                      <p className={classes.TextBlock_Content2}>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Project;
