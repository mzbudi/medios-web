import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageContactHeader.png';

const useStyles = makeStyles((theme) => ({
  Content: {
    paddingBottom: '10%',
  },
  Image_Header: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '200px',
    paddingBottom: '220px',
    width: '100%',
  },
  Main_TextService: {
    [theme.breakpoints.down('sm')]: {
      font: 'normal normal 600 36px Montserrat',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      font: 'normal normal 600 48px Montserrat',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal 600 60px/73px Montserrat',
    },
    marginTop: '5%',
    marginBottom: '5%',
    color: '#29AE6D',
    textAlign: 'center',
  },
  ReachUs_Title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 60,
    },
    fontFamily: 'Montserrat',
    fontWeight: 500,
    marginTop: '5%',
    marginBottom: '5%',
  },
  Grid_Image: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  Image_Contact: {
    display: 'flex',
  },
  Form_Components: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '2px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      paddingTop: '15px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '15px',
    },
  },
  Form_Contact: {
    height: '50px',
  },
  Form_Label: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '10pt',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '10pt',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '12pt',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '14pt',
    },
    color: '#707070',
    margin: '10px',
    font: 'Montserrat',
  },
  Text_Field: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  resize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
  Btn_Flyit: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '20px',
      height: '25px',
      paddingLeft: 25,
      paddingRight: 25,
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: '20px',
      height: '30px',
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: '30px',
      height: '40px',
      paddingLeft: 40,
      paddingRight: 40,
    },
    [theme.breakpoints.up('lg')]: {
      height: '45px',
      paddingLeft: 50,
      paddingRight: 50,
    },
    opacity: 1,
    letterSpacing: 0,
    color: '#FFFFFF',
    fontWeight: 'bold',
    background: 'transparent linear-gradient(112deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
    boxShadow: '5px 15px 30px #3939391A',
    borderRadius: '50px',
  },
  Contact_Image: {
    [theme.breakpoints.up('xs')]: {
      width: '80%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '80%',
    },
  },
}));

export default useStyles;
