import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Button, Container, Typography } from '@material-ui/core';
import { ReactComponent as Responsive } from '../../Assets/Images SVG/Responsive.svg';
import { ReactComponent as Mobile } from '../../Assets/Images SVG/Mobile.svg';
import { ReactComponent as Drone } from '../../Assets/Images SVG/Drone.svg';
import { ReactComponent as Ai } from '../../Assets/Images SVG/AI.svg';
import { ReactComponent as Analyst } from '../../Assets/Images SVG/Analist.svg';
import Header from '../Header';
import Footer from '../Footer';
import './service.css';
import useStyles from './ServiceStyle';

function Service() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.HeaderImage}>
        <Header />
        <Typography align="center" className={classes.Main_TextService}>
          Service
        </Typography>
      </div>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={12} md={12}>
            <div id="title">Medios Service</div>
          </Grid>
          <div id="title-extra">
            <Grid item xs={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. .
            </Grid>
          </div>
          <Grid item xs={12} lg={4} md={4}>
            <Card className={classes.Card_Style}>
              <CardContent>
                <div className={classes.Cirlce}>
                  <Responsive className={classes.Main_ImageSection} />
                </div>
                <p className={classes.Card_Title}>Web and Mobile Apps</p>
              </CardContent>
              <CardContent>
                <p className={classes.Card_Text}>
                  We develop responsive websites and Smartphone Applications along with good UI/UX designs.
                </p>
              </CardContent>
              <div className={classes.Button_Midle}>
                <Button
                  component={Link}
                  to="/service/web"
                  className={classes.Button_Text}
                  size="small"
                  variant="outlined"
                >
                  Show More
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Card className={classes.Card_Style}>
              <CardContent>
                <div className={classes.Cirlce}>
                  <Mobile className={classes.Main_ImageSection} />
                </div>
                <p className={classes.Card_Title}>Desktop Software</p>
              </CardContent>
              <CardContent>
                <p className={classes.Card_Text}>
                  We develop software that have great UI/UX design that can run on a variety of your desktop OS.
                </p>
              </CardContent>
              <div className={classes.Button_Midle}>
                <Button
                  component={Link}
                  to="service/desktop"
                  className={classes.Button_Text}
                  size="small"
                  variant="outlined"
                >
                  Show More
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Card className={classes.Card_Style}>
              <CardContent>
                <div className={classes.Cirlce}>
                  <Drone className={classes.Main_ImageSection} />
                </div>
                <p className={classes.Card_Title}> Internet of Things </p>
              </CardContent>
              <CardContent>
                <p className={classes.Card_Text}>
                  We create IoT solutions that can be used to support your business needs
                </p>
                <p className={classes.Card_Text}>and demand.</p>
              </CardContent>
              <div className={classes.Button_Midle}>
                <Button
                  component={Link}
                  to="/service/iot"
                  className={classes.Button_Text}
                  size="small"
                  variant="outlined"
                >
                  Show More
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} md={6} className={classes.Margin_Card}>
            <Card className={classes.Card_Style}>
              <CardContent>
                <div className={classes.Cirlce}>
                  <Ai className={classes.Main_ImageSection} />
                </div>
                <p className={classes.Card_Title}>Analysis, Processing, Classification Data </p>{' '}
              </CardContent>
              <CardContent>
                <p className={classes.Card_Text}>
                  We develop software that have great UI/UX design that can run on a variety of your desktop OS.
                </p>
              </CardContent>
              <div className={classes.Button_Midle}>
                <Button
                  component={Link}
                  to="/service/analysis"
                  className={classes.Button_Text}
                  size="small"
                  variant="outlined"
                >
                  Show More
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} md={6} className={classes.Margin_Card}>
            <Card className={classes.Card_Style}>
              <CardContent>
                <div className={classes.Cirlce}>
                  <Analyst className={classes.Main_ImageSection} />
                </div>
                <p className={classes.Card_Title}>Artificial Intelligence & Machine Learning</p>
              </CardContent>
              <CardContent>
                <p className={classes.Card_Text}>
                  We develop responsive websites and Smartphone Applications along with good UI/UX designs.
                </p>
              </CardContent>
              <div className={classes.Button_Midle}>
                <Button
                  component={Link}
                  to="/service/ai"
                  className={classes.Button_Text}
                  size="small"
                  variant="outlined"
                >
                  Show More
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Service;
