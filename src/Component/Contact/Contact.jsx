import React from 'react';
import imageHeader from '../../Assets/Images/ImageContactHeader.png';
import contact from '../../Assets/Images/ImageContact.png';
import Header from '../Header'
import Footer from '../Footer'
import Grid from '@material-ui/core/Grid'
import { FormHelperText, TextField, Button } from '@material-ui/core/'
import useStyles from './ContactStyle.js';


function Contact() {
  const classes = useStyles();

  return (
    <>
      <div>
        <img src={imageHeader} alt="Header" width="1920px" height="601px" />
        <Header />
      </div>
      <div>
        <h1 className={classes.Contact_Title}>Reach Us</h1>
        <Grid container>
          <Grid item xs={6} className={classes.Grid_Image}>
            <div className={classes.Image_Contact}>
              <img src={contact}
                className={classes.Contact_Image}
                width="518px"
                height="549px"
                alt="Contact" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Form_Contact}>
              <FormHelperText
                className={classes.Form_Label}
              > Your name or company (required) </FormHelperText>
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
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.Button_Contact}
                >
                  Fly It
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.Footer_Contact}>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
