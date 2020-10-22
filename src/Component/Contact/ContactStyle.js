import { makeStyles } from '@material-ui/core/styles';
import { green, yellow, purple } from '@material-ui/core/colors';
import HeaderImage from '../../Assets/Images/ImageContactHeader.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundColor: yellow[500],
    },
    [theme.breakpoints.between('md', 'lg')]: {
      backgroundColor: purple[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
  Image_Header: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '200px',
    paddingBottom: '200px',
    width: '100%',
    height: '100%',
  },
  Main_TextService: {
    textAlign: 'center',
    font: 'normal normal 600 60px/73px Montserrat',
    color: '#29AE6D',
  },
  ReachUs_Title: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
      marginBottom: '5%',
      textAlign: 'center',
      font: 'normal normal 600 36px Montserrat',
      color: '#29AE6D',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: '5%',
      marginBottom: '5%',
      font: 'normal normal 600 48px Montserrat',
      color: '#29AE6D',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '5%',
      marginBottom: '5%',
      font: 'normal normal 600 60px/73px Montserrat',
      color: '#29AE6D',
      textAlign: 'center',
    },
  },
  Grid_Image: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  Image_Contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Form_Contact: {
    height: '98px',
  },
  Form_Label: {
    [theme.breakpoints.down('sm')]: {
      font: 'Montserrat',
      fontSize: '12px',
      color: '#707070',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      font: 'Montserrat',
      fontSize: '24px',
      color: '#707070',
      opacity: 1,
      margin: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'Montserrat',
      fontSize: '30px',
      color: '#707070',
      opacity: 1,
      margin: '20px',
    },
  },
  Text_Field: {
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      height: '10%',
      borderRadius: '10px',
      opacity: 1,
      marginBottom: '10px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '90%',
      height: '40%',
      borderRadius: '10px',
      opacity: 1,
    },
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      height: '80%',
      borderRadius: '10px',
      opacity: 1,
    },
  },
  resize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
  },
  Btn_Flyit: {
    [theme.breakpoints.down('xs')]: {
      background: 'transparent linear-gradient(112deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
      boxShadow: '5px 15px 30px #3939391A',
      marginTop: '30px',
      borderRadius: '10px',
      opacity: 1,
      letterSpacing: 0,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    [theme.breakpoints.up('xs')]: {
      background: 'transparent linear-gradient(112deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
      boxShadow: '5px 15px 30px #3939391A',
      marginTop: '30px',
      borderRadius: '50px',
      opacity: 1,
      letterSpacing: 0,
      color: '#FFFFFF',
      fontWeight: 'bold',
      paddingLeft: 40,
      paddingRight: 40,
    },
  },
  Contact_Image: {
    width: '75%',
    height: '75%',
  },
  Footer: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '300px',
    },
    width: '100%',
    marginTop: '100px',
  },
}));

export default useStyles;
