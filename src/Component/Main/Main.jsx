import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Main() {
  return (
    <Button component={Link} to="/contact" variant="contained" color="primary">
      About Page
    </Button>
  );
}

export default Main;
