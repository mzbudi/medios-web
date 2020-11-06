import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Container: {
    width: '100%',
  },
  Footer_Banner: {
    marginTop: '5rem',
    backgroundColor: '#F2FFF9',
    justifyContent: 'space-between',
    width: '100%',
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
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      font: 'normal normal bold 15px/20px Montserrat',
      color: ' #707070',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal bold 20px/25px Montserrat',
      color: ' #707070',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      font: 'normal normal bold 25px/30px Montserrat',
      color: ' #707070',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
  Footer_Title_Contact: {
    [theme.breakpoints.down('sm')]: {
      font: 'normal normal bold 15px/20px Montserrat',
      color: ' #707070',
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      font: 'normal normal bold 20px/25px Montserrat',
      color: ' #707070',
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal bold 25px/30px Montserrat',
      color: ' #707070',
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
  Footer_Text: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      font: 'normal normal normal 10px/14px Montserrat',
      color: '#707070',
      textDecoration: 'none',
      marginLeft: '70px',
      marginRight: '0px',
      '&:hover': {
        color: 'green',
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      font: 'normal normal normal 15px/19px Montserrat',
      color: '#707070',
      textDecoration: 'none',
      marginLeft: '70px',
      marginRight: '70px',
      '&:hover': {
        color: 'green',
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      font: 'normal normal normal 20px/24px Montserrat',
      color: '#707070',
      textDecoration: 'none',
      marginBottom: '0px',
      '&:hover': {
        color: 'green',
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
    },
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
  Footer_Text_Copyright: {
    letterSpacing: '0px',
    color: '#8C8C8C',
    opacity: '1',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      font: 'normal normal normal 10px/13px Montserrat;',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      font: 'normal normal normal 13px/17px Montserrat;',
    },
    [theme.breakpoints.up('md')]: {
      font: 'normal normal normal 17px/20px Montserrat;',
    },
  },
  Contact_Logo: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '200%',
      height: '20',
      width: '22',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '200%',
      height: '20',
      width: '22',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '20',
      width: '22',
    },
    [theme.breakpoints.up('lg')]: {
      height: '20',
      width: '22',
    },
  },
  Footer_Text_Phone: {
    textAlign: 'left',
    font: 'normal normal normal 30px/37px Montserrat',
    color: '#707070',
    textDecoration: 'none',
  },
  Container_Logo: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
    },
  },
  Social_Logo: {
    height: '20px',
    width: '20px',
    marginRight: '10px',
  },
  Logo_Medios: {
    [theme.breakpoints.down('sm')]: {
      height: '32px',
      width: '146px',
      marginLeft: '30%',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: '52px',
      width: '166px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '72px',
      width: '186px',
    },
  },
  Footer_GridContact: {
    textAlign: 'center',
  },
  Footer_Divider: {
    marginTop: 20,
    marginBottom: 0,
  },
}));

export default useStyles;
