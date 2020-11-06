import React from 'react';
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
      <Grid container alignItems="center" alignContent="center" justify="center" className={classes.MainHeader}>
        <Grid item xs={12}>
          <Typography align="center" className={classes.PageTitle}>
            CLOUD MEDICAL SYSTEM (CMS)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" className={classes.PageSubtitle}>
            MEDICAL RECORD IN YOUR HAND
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignContent="center" justify="center" className={classes.ProductContainer}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <img src={Logo} className={classes.LogoCMS} alt="CMS" />
          </Grid>
          <Typography component="p" align="center" className={classes.CMSDesc}>
            Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Sed Do Euismod Tempor <br />
            Incididunt Ut Laborelorem <br />
            (DESKRIPSI SINGKAT)
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.ProductProblem}>
          <Grid container direction="column">
            <Typography component="p" align="center" className={classes.ContentTitle}>
              Problem
            </Typography>
            <Grid container direction="row" justify="center" alignItems="center" alignContent="center">
              {problem.map((value, index) => (
                <Grid key={index} item xs={2} className={classes.ProblemContent}>
                  <img src={value.image} alt={value.image} className={classes.ProblemImg} />
                  <Typography component="p" align="center" className={classes.ProblemDesc}>
                    {value.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ProductSolution}>
          <Grid container direction="column">
            <Typography component="p" align="center" className={classes.ContentTitle}>
              Solution
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="flex-start"
              alignContent="center"
              className={classes.SolutionContent}
            >
              <Grid item xs={5}>
                <Typography component="p" className={classes.CMSTitle}>
                  MEDICAL RECORD IN YOU HAND
                </Typography>
                <Typography component="p" className={classes.CMSDesc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ipsum vulputate, molestie
                  lorem eget, elementum eros. Morbi ut nisi eget augue porttitor tempor vel non turpis. Nulla ex risus,
                  fringilla fringilla quam nec, iaculis iaculis quam. Nunc auctor auctor quam ac dapibus. Nam ac diam
                  mollis, faucibus nulla id, lobortis elit. Etiam interdum nisi felis. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae; Nulla rhoncus molestie nisi a mollis. Aliquam
                  elementum sollicitudin blandit.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Card className={classes.CardCMS}>
                  <CardMedia image={ImageCMS} className={classes.CardImg} title="Cloud Medical System" />
                </Card>
              </Grid>
            </Grid>
            <div className={classes.SolutionBenefit}>
              <Grid container direction="row" justify="center" alignItems="center" alignContent="center">
                {benefit.map((value, index) => (
                  <Grid key={index} item xs={2} className={classes.BenefitContent}>
                    <img src={value.image} alt={value.image} className={classes.BenefitImg} />
                    <Typography component="p" align="center" className={classes.BenefitTitle}>
                      {value.title}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductCMS;
