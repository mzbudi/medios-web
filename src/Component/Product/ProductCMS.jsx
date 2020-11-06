import React from 'react';
import { Container, Paper, Grid, Typography } from '@material-ui/core/';
import Footer from '../Footer';
import Logo from '../../Assets/Images/Logo.png';
import Paperclip from '../../Assets/Icon/paperclip.svg';
import Monitor from '../../Assets/Icon/monitor.svg';
import Archive from '../../Assets/Icon/archive.svg';
import User from '../../Assets/Icon/user-check.svg';
import Database from '../../Assets/Icon/database.svg';
import Link from '../../Assets/Icon/link-2.svg';
import Clock from '../../Assets/Icon/clock.svg';
import Lock from '../../Assets/Icon/lock.svg';
import ImageCMS from '../../Assets/Images/CMS.png';
import useStyles from './ProductStyle.js';

function ProductCMS() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Image_Header}>
        <Typography align="center" className={classes.Main_TextService1}>
          Cloud Medical System (CMS)
        </Typography>
        <Typography align="center" className={classes.Main_TextService2}>
          MEDICAL RECORD IN YOUR HAND
        </Typography>
      </div>
      <div className="Content">
        <Container style={{ textAlign: 'center' }}>
          <img src={Logo} className={classes.Logo} alt="CMS" />
          <p className={classes.Title_CMS3}> CLOUD MEDICAL SYSTEM (CMS) </p>
          <p className={classes.Title_CMS4}>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, esse, facilis repudiandae corporis libero
            quam dolor cupiditate iure numquam, consequuntur rem cumque laboriosam natus ad quis quibusdam non.
            Explicabo, quo.{' '}
          </p>
        </Container>

        <div className="Problem">
          <Paper className={classes.Container_Problem}>
            <p className={classes.Title_Problem}>Problem</p>
            <Grid container direction="row" style={{ verticalAlign: 'center', textAlign: 'center' }}>
              <Grid lg={4} item container direction="column">
                <Grid item>
                  <img src={Paperclip} className={classes.Icon_Image} alt="Paper" />
                </Grid>
                <Grid item>
                  <p className={classes.Problem_Content}>
                    {' '}
                    Paper Based Medical Record make patient hard to organized it and difficult to bring it for each
                    check up{' '}
                  </p>
                </Grid>
              </Grid>
              <Grid lg={4} item container direction="column">
                <Grid item>
                  <img src={Monitor} className={classes.Icon_Image} alt="Supervision" />
                </Grid>
                <Grid item>
                  <p className={classes.Problem_Content}>
                    {' '}
                    Lack of supervision from patient make the medical record often fill incomplete and not correct by
                    medical practitioner{' '}
                  </p>
                </Grid>
              </Grid>
              <Grid lg={4} item container direction="column">
                <Grid item>
                  <img src={Archive} className={classes.Icon_Image} alt="Store" />
                </Grid>
                <Grid item>
                  <p className={classes.Problem_Content}>
                    {' '}
                    Stored locally on each hospital make doctor in different hospital have limitation about general
                    condition and track record of patient health
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className="Solution">
          <p className={classes.Title_Problem}>Solution</p>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <p className={classes.Solution_Content}>MEDICAL RECORD IN YOUR HAND</p>
              <p className={classes.Solution_Content2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img src={ImageCMS} className={classes.Image_CMS} alt="CMS" />
            </Grid>
          </Grid>
        </div>

        <Paper className={classes.Container_Benefit}>
          <Grid container justify="space-evenly" alignItems="flex-start">
            <Grid lg md item style={{ textAlign: 'center' }}>
              <img src={User} className={classes.Icon_Image2} alt="User" />
              <p className={classes.Benefit_Content}> USER FRIENDLY </p>
            </Grid>
            <Grid lg md item style={{ textAlign: 'center' }}>
              <img src={Database} className={classes.Icon_Image2} alt="Easy" />
              <p className={classes.Benefit_Content}> EASY TO MANAGE </p>
            </Grid>
            <Grid lg md item style={{ textAlign: 'center' }}>
              <img src={Link} className={classes.Icon_Image2} alt="Integrated" />
              <p className={classes.Benefit_Content}> INTEGRATED TO DOCTOR </p>
            </Grid>
            <Grid lg md item style={{ textAlign: 'center' }}>
              <img src={Clock} className={classes.Icon_Image2} alt="Time" />
              <p className={classes.Benefit_Content}> SAVE TIME </p>
            </Grid>
            <Grid lg md item style={{ textAlign: 'center' }}>
              <img src={Lock} className={classes.Icon_Image2} alt="Secure" />
              <p className={classes.Benefit_Content}> SECURE </p>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default ProductCMS;