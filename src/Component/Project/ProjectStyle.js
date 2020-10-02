import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  Content: {
    marginTop: '200px'
  },
  Project_Title: {
    font: 'normal normal 600 60px/ 73px Montserrat',
    color: '#29AE6D',
    fontWeight: 'semibold',
    marginBottom: '300px'
  },
  Project_Image: {
    position: 'relative',
    width: '480px',
    height: '350px'
  },
  Ongoing_Project: {
    textAlign: 'center',
    font: 'normal normal 600 50px/61px Montserrat',
    color: '#29AE6D',
    marginBottom: '100px',
  },
  Footer: {
    marginTop: '300px',
    width: '100%'
  },
   Box1: {
     textAlign: 'left',
     border: '10px',
     borderRadius: '20px',
     padding: '15px',
     background: '#29AE6D4D',
     backgroundClip: 'border-box',
     font: 'normal normal bold 18px/22px Montserrat',
     fontSize:'24px',
     color: '#FFFFFF',
     textTransform: 'uppercase'
  },
  Box2: {
    textAlign: 'left',
    border: '10px',
    borderRadius: '20px',
    padding: '15px',
    backgroundClip: 'border-box',
    font: 'normal normal bold 18px/22px Montserrat',
    fontSize:'18px',
    textTransform: 'uppercase'
  }
});

export default useStyles;
