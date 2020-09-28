import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import HeaderImage from '../../Assets/Images/ImageService.png';
// import responsive from '../../Assets/Images SVG/undraw_responsive_6c8s.svg';
// import mobile from '../../Assets/Images SVG/undraw_mobile_devices_k1ok.svg';
// import drone from '../../Assets/Images SVG/undraw_drone_surveillance_kjjg.svg';
// import robot from '../../Assets/Images SVG/undraw_Artificial_intelligence_oyxx.svg';
// import ai from '../../Assets/Images SVG/undraw_detailed_analysis_xn7y.svg';
import Header from '../Header';
import Footer from '../Footer';
import './service.css';

function Service() {
  const textStyle = {
    position: 'absolute',
    top: '25%',
    left: '43%',
    color: '#29AE6D',
    fontSize: '45px',
    fontFamily: 'Montserrat',
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Header />
          <img src={HeaderImage} alt="header_image" width="1440px" height="350px" />
          <h1 style={textStyle}>Service</h1>
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
            <CardMedia />
            <CardContent>
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
            <CardMedia />
            <CardContent>
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
            <CardMedia />
            <CardContent>
              {' '}
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
            <CardMedia />
            <CardContent>
              {' '}
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
            <CardMedia />
            <CardContent>
              {' '}
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
      <Footer />
    </>
  );
}

export default Service;
