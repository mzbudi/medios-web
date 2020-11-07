import React from 'react';
import classnames from 'classnames';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core/';
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
  const paperText = `Paper Based Medical Record make patient hard to organized it and difficult to bring it for each
  check up`;
  const monitorText = `Lack of supervision from patient make the medical record often fill incomplete and not correct by
  medical practitioner`;
  const archiveText = `Stored locally on each hospital make doctor in different hospital have limitation about general
  condition and track record of patient health`;
  const problem = [
    { image: Paperclip, desc: paperText },
    { image: Monitor, desc: monitorText },
    { image: Archive, desc: archiveText },
  ];
  const benefit = [
    { image: User, title: 'USER FRIENDLY' },
    { image: Database, title: 'EASY TO MANAGE' },
    { image: Link, title: 'INTEGRATED TO DOCTOR' },
    { image: Clock, title: 'SAVE TIME' },
    { image: Lock, title: 'SECURE' },
  ];
  return (
    <>
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item md={12} className={classnames(classes.CMSHeader, classes.CMSBanner)}>
          <Typography align="center" className={classes.PageTitle}>
            CLOUD MEDICAL SYSTEM (CMS)
          </Typography>
          <Typography align="center" className={classes.PageSubtitle}>
            MEDICAL RECORD IN YOUR HAND
          </Typography>
        </Grid>
        <Grid item md={12} className={classes.CMSHeader}>
          <img src={Logo} className={classes.LogoCMS} alt="CMS" />
          <Typography component="p" align="center" className={classes.CMSDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ipsum vulputate, molestie lorem
            eget, elementum eros. Morbi ut nisi eget augue porttitor tempor vel non turpis.
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={12}
          spacing={2}
          justify="center"
          alignItems="center"
          className={classes.ProblemContainer}
        >
          <Grid item md={12}>
            <Typography component="h2" align="center" className={classes.ContentTitle}>
              Problem
            </Typography>
          </Grid>
          {problem.map((value, index) => (
            <Grid key={index} item md={3}>
              <img src={value.image} alt={value.image} className={classes.ProblemImg} />
              <Typography component="p" align="center" className={classes.ProblemDesc}>
                {value.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          md={12}
          spacing={1}
          justify="center"
          alignItems="center"
          className={classes.SolutionContainer}
        >
          <Grid item md={12}>
            <Typography component="p" align="center" className={classes.ContentTitle}>
              Solution
            </Typography>
          </Grid>
          <Grid item md={5}>
            <Typography component="h3" className={classes.CMSTitle}>
              MEDICAL RECORD IN YOU HAND
            </Typography>
            <br />
            <Typography component="p" className={classes.CMSDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ipsum vulputate, molestie lorem
              eget, elementum eros. Morbi ut nisi eget augue porttitor tempor vel non turpis. Nulla ex risus, fringilla
              fringilla quam nec, iaculis iaculis quam. Nunc auctor auctor quam ac dapibus. Nam ac diam mollis, faucibus
              nulla id, lobortis elit. Etiam interdum nisi felis.
            </Typography>
          </Grid>
          <Grid item md={5}>
            <Card className={classes.CardCMS} elevation={0}>
              <CardMedia image={ImageCMS} className={classes.CardImg} title="Cloud Medical System" />
            </Card>
          </Grid>
          <Grid
            container
            item
            md={6}
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.SolutionBenefit}
          >
            {benefit.map((value, index) => (
              <Grid key={index} item lg={2}>
                <img src={value.image} alt={value.image} className={classes.BenefitImg} />
                <Typography component="p" align="center" className={classes.BenefitTitle}>
                  {value.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductCMS;
