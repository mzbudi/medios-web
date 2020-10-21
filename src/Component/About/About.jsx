import React from 'react';
import { Typography } from '@material-ui/core';
import BounceLoader from 'react-spinners/BounceLoader';
import Header from '../Header';
import Footer from '../Footer';
import useStyles from './AboutStyle';
import './about.css';

function Service() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.HeaderImage}>
        <Header />
        <Typography align="center" className={classes.Main_TextService}>
          About
        </Typography>
      </div>
      <div id="Spinner">
        <BounceLoader size={150} loading color="#29AE6D" />
      </div>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Service;
