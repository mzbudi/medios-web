import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormHelperText, TextField, Button, Container } from '@material-ui/core/';
import imageHeader from '../../Assets/Images/ImageContactHeader.png';
import contact from '../../Assets/Images/ImageContact.png';
import Header from '../Header';
import Footer from '../Footer';
import useStyles from './ContactStyle.js';

function Contact() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <img className={classes.Background_Image} src={imageHeader} alt="header_image" />
      <Container>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <h1 className={classes.Contact_Title}>Contact</h1>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.ReachUs_Title}>Reach Us</div>
          </Grid>
          <Grid item xs={6} lg={6}>
            <div className={classes.Image_Contact}>
              <img src={contact} className={classes.Contact_Image} alt="Contact" />
            </div>
          </Grid>
          <Grid item xs={6} lg={6}>
            <div className={classes.Form_Contact}>
              <FormHelperText className={classes.Form_Label}> Your name or company (required) </FormHelperText>
              <TextField id="outlined-basic" label="Name/Company" variant="outlined" className={classes.Text_Field} />
              <FormHelperText className={classes.Form_Label}> Your email (required) </FormHelperText>
              <TextField
                id="outlined-textarea"
                label="Email"
                multiline
                variant="outlined"
                className={classes.Text_Field}
              />
              <FormHelperText className={classes.Form_Label}> Your message </FormHelperText>
              <TextField
                id="outlined-textarea"
                label="Message"
                multiline
                variant="outlined"
                className={classes.Text_Field}
              />
              <br />
              <Button variant="contained" type="submit" className={classes.Btn_Flyit}>
                Fly it
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.Footer_Contact}>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
