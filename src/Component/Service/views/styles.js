import { makeStyles } from '@material-ui/core/styles';
import { green, yellow, purple } from '@material-ui/core/colors';
import HeaderImage from '../../../Assets/Images/ImageService.png';

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
  Main_ImageSection: {
    width: 204,
    height: 304.39,
  },
  Title: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      font: 'normal normal 600 25px/36px Montserrat',
      color: '#29ae6d',
      marginTop: '50px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      font: 'normal normal 600 35px/41px Montserrat',
      color: '#29ae6d',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal 600 50px/61px Montserrat',
      color: '#29ae6d',
    },
  },
  Title_Card: {
    [theme.breakpoints.down('sm')]: {
      font: 'normal normal 600 25px/36px Montserrat',
      color: '#29ae6d',
      marginBottom: '0px',
      paddingBottom: '0px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      font: 'normal normal 600 35px/41px Montserrat',
      color: '#29ae6d',
      marginBottom: '0px',
      paddingBottom: '0px',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal 600 50px/61px Montserrat',
      color: '#29ae6d',
      marginBottom: '0px',
      paddingBottom: '0px',
    },
  },
  Title_Extra: {
    [theme.breakpoints.down('sm')]: {
      font: 'normal normal 600 25px/36px Montserrat',
      color: '#29ae6d',
      marginTop: '0px',
      paddingTop: '0px',
      marginBottom: '0px',
      paddingBottom: '0px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      font: 'normal normal 600 35px/51px Montserrat',
      color: '#29ae6d',
      marginTop: '0px',
      paddingTop: '0px',
      marginBottom: '0px',
      paddingBottom: '0px',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal 600 50px/61px Montserrat',
      color: '#29ae6d',
      marginTop: '0px',
      paddingTop: '0px',
      marginBottom: '0px',
      paddingBottom: '0px',
    },
  },
  Cirlce: {
    borderRadius: '50%',
    width: '304px',
    height: '304px',
    textAlign: 'center',
    boxShadow: '5px 5px 15px #0000000d',
    marginBottom: '30px',
  },
  Footer: {
    marginTop: '300px',
  },
  HeaderImage: {
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${HeaderImage})`,
      paddingTop: '200px',
      paddingBottom: '200px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundImage: `url(${HeaderImage})`,
      paddingTop: '200px',
      paddingBottom: '200px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      backgroundImage: `url(${HeaderImage})`,
      paddingTop: '200px',
      paddingBottom: '200px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderImage})`,
      padding: '200px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  textStyle: {
    width: '99%',
    position: 'absolute',
    top: '15%',
    color: '#29AE6D',
    font: 'normal normal 600 30px/35px Montserrat;',
    textAlign: 'center',
  },
  Card_Title: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Montserrat',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
      font: 'normal normal normal 15px/22px Montserrat;',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontFamily: 'Montserrat',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
      font: 'normal normal normal 25px/32px Montserrat;',
    },
    [theme.breakpoints.up('lg')]: {
      fontFamily: 'Montserrat',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
      font: 'normal normal normal 30px/37px Montserrat;',
    },
  },
  Card_Title_Description: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Montserrat',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      marginLeft: '40px',
      marginRight: '40px',
      textAlign: 'center',
      font: 'normal normal normal 15px/22px Montserrat;',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontFamily: 'Montserrat',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
      font: 'normal normal normal 25px/32px Montserrat;',
      marginLeft: '40px',
      marginRight: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontFamily: 'Montserrat',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
      font: 'normal normal normal 30px/37px Montserrat;',
    },
  },
  Card_Text: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    color: '#707070',
    opacity: '1',
    margin: '0px',
  },
  Card_Style: {
    boxShadow: '0 0 transparent;',
    margin: '0px',
    padding: '0px',
  },
  Button_Midle: {
    textAlign: 'center',
  },
  Dot_Left: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '15px',
      marginRight: '15px',
      width: '12px',
      height: '12px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      marginRight: '50px',
      width: '24px',
      height: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: '50px',
      width: '24px',
      height: '24px',
    },
  },
  Dot: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '75px',
      marginRight: '25px',
      width: '12px',
      height: '12px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      marginLeft: '50px',
      marginRight: '50px',
      width: '24px',
      height: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '60px',
      marginRight: '50px',
      width: '24px',
      height: '24px',
    },
  },
  Grid_Margin: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      marginTop: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '100px',
    },
  },
  Main_Text: {
    font: 'normal normal 600 60px/73px Montserrat',
    color: '#29AE6D',
  },
}));

export default useStyles;
