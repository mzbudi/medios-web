import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  TextField,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
// import { ReactComponent as Logo } from '../../Assets/Icon/Logo Medios.svg';
import useStyles from './MainStyle';
import Header from '../Header';
import Footer from '../Footer';
import { ReactComponent as App } from '../../Assets/Images SVG/Responsive.svg';
import { ReactComponent as Mobile } from '../../Assets/Images SVG/Mobile.svg';
import { ReactComponent as Drone } from '../../Assets/Images SVG/Drone.svg';
import { ReactComponent as AI } from '../../Assets/Images SVG/AI.svg';
import { ReactComponent as Analyst } from '../../Assets/Images SVG/Analist.svg';
// import ChooseUs from '../../Assets/Images/ChooseUs.jpg';
import Partner1 from '../../Assets/Images/Partner1.png';
import Partner2 from '../../Assets/Images/Partner2.png';
import Partner3 from '../../Assets/Images/Partner3.png';
import Partner4 from '../../Assets/Images/Partner4.png';
import Partner5 from '../../Assets/Images/Partner5.png';

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

  const OurProduct = () => (
    <Card>
      <CardActionArea>
        <CardMedia image="../../Assets/Images SVG/Responsive.svg" title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Show more
        </Button>
      </CardActions>
    </Card>
  );

  // const WhyChooseUs = () => (
  //   <div style={{ backgroundImage: '../../Assets/Images/ChooseUs.jpg', width: '100%', height: 800 }} />
  // );

  const Partner = () => (
    <div>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid item lg={12} xs={12} md={12} xl={12} sm={12}>
          <Typography align="center" variant="h5" style={{ fontWeight: 'bold' }}>
            Our successful friend
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item lg={2}>
          <img src={Partner1} alt="partner1" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={Partner2} alt="partner2" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={Partner3} alt="partner3" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={Partner4} alt="partner4" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={Partner5} alt="partner5" className={classes.Main_PartnerImg} />
        </Grid>
      </Grid>
    </div>
  );

  const ReachUs = () => {
    const handleSend = (event) => {
      event.preventDefault();
      console.log(event.target.elements.name.value);
      console.log(event.target.elements.email.value);
      console.log(event.target.elements.msg.value);
    };

    return (
      <>
        <form
          autoComplete="off"
          className={classes.Main_FormContact}
          onSubmit={(e) => {
            handleSend(e);
          }}
        >
          <Grid container spacing={3} style={{ marginBottom: 30 }}>
            <Grid item lg={12} xs={12} md={12} xl={12} sm={12}>
              <Typography align="left" variant="h5" style={{ fontWeight: 'bold' }}>
                Reach Us
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10} justify="center">
            <Grid item lg={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="name">Your Name or Company</InputLabel>
                <Input
                  id="name"
                  name="name"
                  aria-describedby="my-helper-text"
                  placeholder="Enter your name or company"
                />
              </FormControl>
            </Grid>
            <Grid item lg={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">Your Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  aria-describedby="my-helper-text"
                  placeholder="Enter your email address"
                  type="email"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item lg={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="msg">Message</InputLabel>
                <Input
                  multiline
                  id="msg"
                  name="msg"
                  aria-describedby="my-helper-text"
                  placeholder="Your message here ..."
                  rows="4"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <div className={classes.Main_MarginFlyIt}>
              <Button type="submit" className={classes.Main_Btn_Flyit}>
                Fly it
              </Button>
            </div>
          </Grid>
        </form>
      </>
    );
  };

  return (
    <>
      <Header />
      <Container>
        <OpeningText />
        <ImageSection />
        <OurProduct />
        {/* <WhyChooseUs /> */}
        <Partner />
        <ReachUs />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
