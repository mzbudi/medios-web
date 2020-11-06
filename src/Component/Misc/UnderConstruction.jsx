import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import useStyles from './styles';
import { underConstruction } from '../../Assets/Images SVG';

function UnderConstruction() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center" marginTop={15} marginBottom={5}>
          <img src={underConstruction} alt="under-construction" className={classes.About_UnderConstructionImage} />
        </Box>
        <Typography variant="h3" align="center" style={{ fontWeight: 600 }}>
          PAGE UNDER CONSTRUCTION
        </Typography>
        <Typography variant="h6" align="center" style={{ fontWeight: 600 }}>
          PLEASE COMEBACK LATER
        </Typography>
      </Container>
    </>
  );
}

export default UnderConstruction;
