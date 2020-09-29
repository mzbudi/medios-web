import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import HeaderImage from '../../Assets/Images/ImageService.png';
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
  const textStyle = {
    position: 'absolute',
    top: '25%',
    left: '45%',
    color: '#29AE6D',
    fontSize: '45px',
    fontFamily: 'Montserrat',
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              backgroundImage: `url(${HeaderImage})`,
              height: '350px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Header />
            <h1 style={textStyle}>Service</h1>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div id="title">Medios Service</div>
        </Grid>
        <div id="title-extra">
          <Grid item xs={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. .
          </Grid>
        </div>
        <Grid item xs={4}>
          <Card id="cardStyle">
            <CardContent>
              <div className={classes.Cirlce} id="cirlce">
                <Responsive className={classes.Main_ImageSection} />
              </div>
              <p id="cardTittle">Web and Mobile Apps</p>
            </CardContent>
            <CardContent>
              <p id="cardText">
                We develop responsive websites and Smartphone Applications along with good UI/UX designs.
              </p>
            </CardContent>
            <div style={{ textAlign: 'center' }}>
              <Button size="small" variant="outlined">
                Show More
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card id="cardStyle">
            <CardContent>
              <div className={classes.Cirlce} id="cirlce">
                <Mobile className={classes.Main_ImageSection} />
              </div>
              <p id="cardTittle">Desktop Software</p>
            </CardContent>
            <CardContent>
              <p id="cardText">
                We develop software that have great UI/UX design that can run on a variety of your desktop OS.
              </p>
            </CardContent>
            <div style={{ textAlign: 'center' }}>
              <Button size="small" variant="outlined">
                Show More
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card id="cardStyle">
            <CardContent>
              <div className={classes.Cirlce} id="cirlce">
                <Drone className={classes.Main_ImageSection} />
              </div>
              <p id="cardTittle"> Internet of Things </p>
            </CardContent>
            <CardContent>
              {' '}
              <p id="cardText">We create IoT solutions that can be used to support your business needs and demand.</p>
            </CardContent>
            <div style={{ textAlign: 'center' }}>
              <Button size="small" variant="outlined">
                Show More
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card id="cardStyle">
            <CardContent>
              <div className={classes.Cirlce} id="cirlce">
                <Ai className={classes.Main_ImageSection} />
              </div>
              <p id="cardTittle">Analysis, Processing, Classification Data </p>{' '}
            </CardContent>
            <CardContent>
              <p id="cardText">
                We develop software that have great UI/UX design that can run on a variety of your desktop OS.
              </p>
            </CardContent>
            <div style={{ textAlign: 'center' }}>
              <Button size="small" variant="outlined">
                Show More
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card id="cardStyle">
            <CardContent>
              <div className={classes.Cirlce} id="cirlce">
                <Analyst className={classes.Main_ImageSection} />
              </div>
              <p id="cardTittle">Artificial Intelligence & Machine Learning</p>
            </CardContent>
            <CardContent>
              <p id="cardText">
                We develop responsive websites and Smartphone Applications along with good UI/UX designs.
              </p>
            </CardContent>
            <div style={{ textAlign: 'center' }}>
              <Button size="small" variant="outlined">
                Show More
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Service;
