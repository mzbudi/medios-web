import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundColor: '#F2FFF9',
    margin: '0px',
    justifyContent: 'space-between',
    padding: '30px',
  },
  Container_Load: {
    margin: '10px',
  },
  Footer_Title: {
    textAlign: 'left',
    font: 'normal normal bold 25px/30px Montserrat',
    color: ' #707070',
    marginBottom: '0px',
  },
  Footer_Title_Menu: {
    textAlign: 'left',
    font: 'normal normal bold 25px/30px Montserrat',
    color: ' #707070',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  Footer_Title_Contact: {
    font: 'normal normal bold 25px/30px Montserrat',
    color: ' #707070',
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
    },
  },
  Footer_Text: {
    textAlign: 'left',
    font: 'normal normal normal 20px/24px Montserrat',
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
    font: 'normal normal normal 17px/20px Montserrat;',
    letterSpacing: '0px',
    color: '#8C8C8C',
    opacity: '1',
  },
  Contact_Logo: {
    height: '20',
    width: '22',
  },
  Footer_Text_Phone: {
    textAlign: 'left',
    font: 'normal normal normal 30px/37px Montserrat',
    color: '#707070',
    textDecoration: 'none',
  },
  Social_Logo: {
    height: '20px',
    width: '20px',
  },
  Logo_Medios: {
    height: '72px',
    width: '186px',
  },
  Footer_GridContact: {
    textAlign: 'center',
  },
  Footer_Divider: {
    marginTop: 20,
  },
}));

export default useStyles;
