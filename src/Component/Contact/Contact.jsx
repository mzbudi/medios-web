import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormHelperText, TextField, Button, Container, Typography } from '@material-ui/core/';
import contact from '../../Assets/Images/ImageContact.png';
import Header from '../Header';
import Footer from '../Footer';
import useStyles from './ContactStyle.js';

function Contact() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Image_Header}>
        <Header />
        <Typography align="center" className={classes.Main_TextService}>
          Contact
        </Typography>
      </div>

      <div className={classes.root}>
        <Typography>{'down(sm): red'}</Typography>
        <Typography>{'up(md): blue'}</Typography>
        <Typography>{'up(lg): green'}</Typography>
      </div>

      <div className="Content">
          <Grid container>
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
                <TextField id="outlined-textarea"
                  label="Name/Company"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.Text_Field}
                />
                <FormHelperText className={classes.Form_Label}> Your email (required) </FormHelperText>
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.Text_Field}
                />
                <FormHelperText className={classes.Form_Label}> Your message </FormHelperText>
                <TextField
                  id="outlined-textarea"
                  label="Message"
                  multiline
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.Text_Field}
                />
                <br />
                <Button variant="contained" type="submit" className={classes.Btn_Flyit}>
                  Fly it
              </Button>
              </div>
            </Grid>
          </Grid>
      </div>

      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
