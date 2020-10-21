import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageService.png';
import { green, red, blue, yellow, purple } from '@material-ui/core/colors';

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
  Opening_Service: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      font: 'normal normal normal 10px/14px Montserrat',
      color: '#707070',
    },
    [theme.breakpoints.between('md','lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 15px/19px Montserrat',
      color: '#707070',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 18px/22px Montserrat',
      color: '#707070',
    }
  },
  HeaderImage: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '200px',
    paddingBottom: '200px',
    width: '100%',
    height: '100%',
  },
  textStyle: {
    width: '100%',
    position: 'absolute',
    top: '20%',
    color: '#29AE6D',
    fontSize: '30px',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  Card_Title: {
    font: ' normal normal 600 30px/37px Montserrat',
    textAlign: 'center',
    color: '#29ae6d',
    opacity: '1',
    padding: '0px',
    margin: '0px',
  },
  Card_Text: {
    font: 'normal normal normal 25px/30px Montserrat',
    color: '#707070',
    opacity: '1',
    margin: '0px',
  },
  Card_Style: {
    boxShadow: '0 0 transparent;',
  },
  Button_Midle: {
    textAlign: 'center',
  },
  Button_Link: {
    textDecoration: 'none',
  },
  Button_Text: {
    borderColor: '#29AE6D',
    font: 'normal normal bold 20px/24px Montserrat',
    color: '#29AE6D',
    width: '183px',
    height: '60px',
    borderRadius: '10px',
    '&:hover': {
      background: 'linear-gradient(114deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
      color: 'white',
    },
  },
  Main_TextService: {
    font: 'normal normal 600 60px/73px Montserrat',
    color: '#29AE6D',
  },
  Margin_Card: {
    marginTop: '100px',
  },
}));

export default useStyles;
