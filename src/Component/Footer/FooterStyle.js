import { makeStyles } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core';

// const theme = createMuiTheme();
const useStyles = makeStyles({
  Container: {
    backgroundColor: '#F2FFF9',
    margin: '0px',
    justifyContent: 'space-between',
  },
  Footer_Title: {
    textAlign: 'left',
    fontSize: '22px',
    letterSpacing: '0px',
    color: ' #707070',
    opacity: '1',
    fontWeight: '600',
  },
  Footer_Text: {
    textAlign: 'left',
    fontSize: '18px',
    letterSpacing: '0px',
    color: ' #707070',
    opacity: '1',
    fontWeight: 'lighter',
    textDecoration: 'none',
  },
  Footer_Text_product: {
    textAlign: 'left',
    fontSize: '18px',
    letterSpacing: '0px',
    color: ' #707070',
    opacity: '1',
    fontWeight: 'lighter',
    textDecoration: 'none',
    marginLeft: '40px',
  },
  Footer_Text_Extra: {
    textAlign: 'left',
    fontSize: '15px',
    letterSpacing: '0px',
    color: ' #707070',
    opacity: '1',
    fontWeight: 'lighter',
  },
  Contact_Logo: {
    height: '20',
    width: '22',
  },
  Social_Logo: {
    height: '50',
    width: '22',
  },
  Logo_Medios: {
    height: '72px',
    width: '120px',
  },
});

export default useStyles;
