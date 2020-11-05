import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './MainStyle';
import { ai, analist, drone, mobile, responsive } from '../../Assets/Images SVG';
import { logoMedios, affordable, fast, goodQuality, ontime } from '../../Assets/Icon';
import { partner1, partner2, partner3, partner4, partner5, cms, blank, quote } from '../../Assets/Images';

function Main() {
  const classes = useStyles();

  const OpeningText = () => (
    <>
      <p className={classes.Main_OpeningText}>
        Specialized IT Solution in health service but not limited to them, for your instances & companies
      </p>
      {/* <div className={classes.rood}>
        <Typography>{'xs down: red'}</Typography>
        <Typography>{'xs to sm: blue'}</Typography>
        <Typography>{'sm to md: yellow'}</Typography>
        <Typography>{'md to lg: purple'}</Typography>
        <Typography>{'lg up: green'}</Typography>
      </div> */}
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
            <img src={responsive} alt="App" className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Web and Mobile Apps</b>
            </p>
          </Grid>
          <Grid item>
            <Typography>
              We develop responsive websites and Smartphone Applications along with good UI/UX designs.
            </Typography>
          </Grid>
        </Grid>
        <Grid lg={4} item container direction="column">
          <Grid item>
            <img src={mobile} alt="mobile" className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Desktop Software</b>
            </p>
          </Grid>
          <Grid item>
            <Typography>
              We develop software that have great UI/UX design that can run on a variety of your desktop OS.
            </Typography>
          </Grid>
        </Grid>
        <Grid lg={4} item container direction="column">
          <Grid item>
            <img src={drone} alt="drone" className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Internet of Things</b>
            </p>
          </Grid>
          <Grid item>
            <Typography>We create IoT solutions that can be used to support your business needs and demand.</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center' }} spacing={3}>
        <Grid container item direction="column" lg={2} />
        <Grid container item direction="column" lg={4}>
          <Grid item>
            <img src={ai} alt="AI" className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Analysis, processing, classification data</b>
            </p>
          </Grid>
          <Grid item>
            <Typography>
              We develop software that have great UI/UX design that can run on a variety of your desktop OS.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction="column" lg={4}>
          <Grid item>
            <img src={analist} alt="analist" className={classes.Main_ImageSection} />
          </Grid>
          <Grid item>
            <p className={classes.Main_TextImageSection}>
              <b>Artificial intelligence & Machine Learning</b>
            </p>
          </Grid>
          <Grid item>
            <Typography>
              We develop software that have great UI/UX design that can run on a variety of your desktop OS.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction="column" lg={2} />
      </Grid>
    </>
  );

  const OurProduct = () => (
    <Grid
      container
      spacing={3}
      className={classes.Main_MarginOurProduct}
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <Grid item lg={12}>
        <Typography align="center" className={classes.Main_TextOurProduct}>
          Our Product
        </Typography>
      </Grid>
      <Grid item container justify="space-between">
        <Grid item container lg={1} xs={3} md={3} sm={3} direction="column" alignItems="center" justify="center">
          <IconButton aria-label="Left">
            <ChevronLeftIcon className={classes.Main_IconSize} />
          </IconButton>
        </Grid>
        <Grid item container direction="column" lg={4} md={10} sm={10} xs={10}>
          <Card className={classes.root}>
            <CardMedia image={cms} title="Cms" component="img" />
            <CardContent style={{ padding: '10%' }}>
              <Typography gutterBottom className={classes.Main_CardTitle}>
                Medios CMS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" align="left">
                Web application to help doctors to work in many hospitals and clinics easily, and also connecting and
                controls patient remotely
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end" alignItems="flex-end">
                <div className={classes.Main_CardBtnFlexer}>
                  <Button variant="contained" size="small" className={classes.Main_BtnShowMore}>
                    Show more
                  </Button>
                </div>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item container direction="column" lg={4}>
          <Card className={classes.root}>
            <CardMedia image={blank} title="Blank" component="img" />
            <CardContent style={{ padding: '10%' }}>
              <Typography gutterBottom className={classes.Main_CardTitle}>
                Medios DSS-CovidNet
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" align="left">
                We joined collaborative research between several hospitals in Indonesia and department of Physics,
                Universitas Indonesia to solve that problem by develop Deep Learning model and web apps to detect
                Covid-19 Based on Chest X-Ray Image.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end" alignItems="flex-end">
                <div className={classes.Main_CardBtnFlexer}>
                  <Button variant="contained" size="small" className={classes.Main_BtnShowMore}>
                    Show more
                  </Button>
                </div>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item container lg={1} direction="column" alignItems="center" justify="center">
          <IconButton aria-label="Right">
            <ChevronRightIcon className={classes.Main_IconSize} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );

  const WhyChooseUs = () => (
    <div className={classes.Main_WhyChooseUs}>
      <Grid container spacing={8}>
        <Grid item lg={12}>
          <Typography align="center" className={classes.Main_TextWhyChooseUsTitle}>
            Why Choose Us?
          </Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid item lg={2} />
          <Grid item lg={8}>
            <Typography className={classes.Main_TextWhyChooseUsSubtitle} align="center">
              We provide comprehensive & complete integrated IT solution to design, applicate, & maintenance an IT
              product for your business purpose, but not limited to, micro and macro
            </Typography>
          </Grid>
          <Grid item lg={2} />
        </Grid>
        <Grid item container direction="row" style={{ verticalAlign: 'center', textAlign: 'center' }} spacing={2}>
          <Grid container item direction="column" lg={2} />
          <Grid container item direction="column" lg={2}>
            <Grid item>
              <img src={affordable} alt="affordable" />
            </Grid>
            <Grid item>
              <Typography className={classes.Main_TextWhyChooseUsBody} variant="h6">
                AFFORDABLE
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="column" lg={2}>
            <Grid item>
              <img src={fast} alt="fast" />
            </Grid>
            <Grid item>
              <Typography className={classes.Main_TextWhyChooseUsBody} variant="h6">
                FAST RESPONSE
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="column" lg={2}>
            <Grid item>
              <img src={goodQuality} alt="Good Quality" />
            </Grid>
            <Grid item>
              <Typography className={classes.Main_TextWhyChooseUsBody} variant="h6">
                GOOD QUALITY
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="column" lg={2}>
            <Grid item>
              <img src={ontime} alt="On Time" />
            </Grid>
            <Grid item>
              <Typography className={classes.Main_TextWhyChooseUsBody} variant="h6">
                ON TIME
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="column" lg={2} />
        </Grid>
      </Grid>
    </div>
  );

  const PersuasiveText = () => (
    <div className={classes.Main_MarginQuote}>
      <Grid container className={classes.Main_QuoteContainer}>
        <Grid item container xs={12} md={12} lg={7} xl={7} direction="column">
          <Grid item>
            <img src={logoMedios} alt="Logo Medios" className={classes.Main_QuoteIcon} />
          </Grid>
          <Grid>
            <Typography align="left" variant="body1" className={classes.Main_TypoQuote}>
              What are you waiting for, change your Business so it can survive well in this new era, let's adapt it to
              IT with us and we see your comany will continue to shine
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={0} md={0} style={{ textAlign: '-webkit-right' }}>
          <img src={quote} alt="quote" style={{ width: 400 }} className={classes.Main_QuoteImg} />
        </Grid>
      </Grid>
    </div>
  );

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
          <img src={partner1} alt="partner1" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={partner2} alt="partner2" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={partner3} alt="partner3" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={partner4} alt="partner4" className={classes.Main_PartnerImg} />
        </Grid>
        <Grid item lg={2}>
          <img src={partner5} alt="partner5" className={classes.Main_PartnerImg} />
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
            <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
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
            <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
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
            <Grid item lg={12} xs={12} sm={12} md={12} xl={12}>
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
            <Grid item lg={12} xs={12} className={classes.Main_MarginFlyIt}>
              <Button variant="contained" type="submit" className={classes.Main_Btn_Flyit}>
                <Typography className={classes.Main_TextFlyIt}>Fly it</Typography>
              </Button>
            </Grid>
            <Grid item lg={12} xs={12} className={classes.Main_MarginContact}>
              <Typography variant="body1" className={classes.Main_ContactSection}>
                For any question contact our 24/7 call center :{' '}
                <span className={classes.Main_PhoneTextColor}>+62 xxxx xxxx</span>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </>
    );
  };

  return (
    <>
      <Container>
        <OpeningText />
        <ImageSection />
      </Container>
      <OurProduct />
      <WhyChooseUs />
      <Container>
        <Partner />
        <PersuasiveText />
        <ReachUs />
      </Container>
    </>
  );
}

export default Main;
