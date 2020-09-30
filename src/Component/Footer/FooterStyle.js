import { makeStyles } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core';

// const theme = createMuiTheme();
const useStyles = makeStyles({
  Container: {
    backgroundColor: '#F2FFF9',
    margin: '0px',
    justifyContent: 'space-between',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  Container_Load: {
    margin: '10px',
  },
  Footer_Title: {
    textAlign: 'left',
    font: 'normal normal bold 35px/43px Montserrat',
    color: ' #707070',
    marginBottom: '0px',
  },
  Footer_Title_Contact: {
    textAlign: 'right',
    font: 'normal normal bold 35px/43px Montserrat',
    color: ' #707070',
    marginBottom: '0px',
  },
  Footer_Text: {
    textAlign: 'left',
    font: 'normal normal normal 30px/37px Montserrat',
    color: '#707070',
    textDecoration: 'none',
    marginBottom: '0px',
  },
  Footer_Text_Contact: {
    textAlign: 'left',
    font: 'normal normal normal 30px/37px Montserrat',
    color: '#707070',
    textDecoration: 'none',
    margin: '0px',
  },
  Footer_Text_product: {
    textAlign: 'left',
    font: 'normal normal normal 30px/37px Montserrat',
    color: ' #707070',
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
    width: '186px',
  },
});

export default useStyles;
