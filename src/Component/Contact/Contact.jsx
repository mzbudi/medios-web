import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormHelperText, TextField, Button, Typography } from '@material-ui/core/';
import contact from '../../Assets/Images/ImageContact.png';
import useStyles from './ContactStyle.js';

function Contact() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Image_Header}>
        <Typography align="center" className={classes.Main_TextService}>
          Contact
        </Typography>
      </div>
      <div className={classes.Content}>
        <Grid container justify="center" alignItems="center">
          <div className={classes.ReachUs_Title}>Reach Us</div>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={7} sm={5} md={5} lg={4}>
            <img src={contact} alt="Contact" className={classes.Contact_Image} />
          </Grid>
          <Grid item xs={8} sm={5} md={6} lg={5}>
            <div>
              <div className={classes.Form_Components}>
                <FormHelperText className={classes.Form_Label}> Your name or company (required) </FormHelperText>
                <TextField
                  id="outlined-textarea"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.Text_Field}
                />
              </div>
              <div className={classes.Form_Components}>
                <FormHelperText className={classes.Form_Label}> Your email (required) </FormHelperText>
                <TextField
                  id="outlined-textarea"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.Text_Field}
                />
              </div>
              <div className={classes.Form_Components}>
                <FormHelperText className={classes.Form_Label}> Your message (required) </FormHelperText>
                <TextField
                  id="outlined-textarea"
                  multiline
                  rows={5}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.Text_Field}
                />
              </div>
              <div className={classes.Form_Components}>
                <Button variant="contained" type="submit" className={classes.Btn_Flyit}>
                  Fly it
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Contact;
