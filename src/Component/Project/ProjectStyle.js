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
  },
  Project_Image: {
    width: '480px',
    height: '350px',
  }
});

export default useStyles;
