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
    [theme.breakpoints.down('md')]: {
      width: 104,
      height: 204.39,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: 154,
      height: 254.39,
    },
    [theme.breakpoints.up('lg')]: {
      width: 204,
      height: 304.39,
    },
  },
  Cirlce: {
    [theme.breakpoints.down('md')]: {
      borderRadius: '50%',
      width: '200px',
      height: '200px',
      textAlign: 'center',
      marginTop: '0px',
      boxShadow: '5px 5px 15px #0000000d',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      borderRadius: '50%',
      width: '200px',
      height: '200px',
      textAlign: 'center',
      boxShadow: '5px 5px 15px #0000000d',
    },
    [theme.breakpoints.up('lg')]: {
      borderRadius: '50%',
      width: '304px',
      height: '304px',
      textAlign: 'center',
      boxShadow: '5px 5px 15px #0000000d',
      marginBottom: '30px',
    },
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
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 15px/19px Montserrat',
      color: '#707070',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 18px/22px Montserrat',
      color: '#707070',
    },
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
    [theme.breakpoints.down('md')]: {
      font: ' normal normal 600 15px/22px Montserrat',
      textAlign: 'center',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      marginTop: '20px',
      marginBottom: '0px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      font: ' normal normal 600 25px/32px Montserrat',
      textAlign: 'center',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
    },
    [theme.breakpoints.up('lg')]: {
      font: ' normal normal 600 30px/37px Montserrat',
      textAlign: 'center',
      color: '#29ae6d',
      opacity: '1',
      padding: '0px',
      margin: '0px',
    },
  },
  Card_Text: {
    [theme.breakpoints.down('sm')]: {
      font: 'normal normal normal 10px/15px Montserrat',
      color: '#707070',
      opacity: '1',
      marginTop: '0px',
      marginLeft: '20%',
      marginRight: '20%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      font: 'normal normal normal 15px/20px Montserrat',
      color: '#707070',
      opacity: '1',
      marginTop: '0px',
      marginLeft: '20%',
      marginRight: '20%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      font: 'normal normal normal 15px/20px Montserrat',
      color: '#707070',
      opacity: '1',
      margin: '0px',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal normal 25px/30px Montserrat',
      color: '#707070',
      opacity: '1',
      margin: '0px',
    },
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
  Card_Content: {
    [theme.breakpoints.down('sm')]: {
      margin: '0px',
      padding: '0px',
    },
  },
  Button_Text: {
    [theme.breakpoints.down('md')]: {
      borderColor: '#29AE6D',
      font: 'normal normal bold 10px/14px Montserrat',
      color: '#29AE6D',
      width: '60px',
      height: '30px',
      borderRadius: '10px',
      '&:hover': {
        background: 'linear-gradient(114deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
        color: 'white',
      },
    },
    [theme.breakpoints.between('md', 'lg')]: {
      borderColor: '#29AE6D',
      font: 'normal normal bold 15px/19px Montserrat',
      color: '#29AE6D',
      width: '100px',
      height: '40px',
      borderRadius: '10px',
      '&:hover': {
        background: 'linear-gradient(114deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
        color: 'white',
      },
    },
    [theme.breakpoints.up('lg')]: {
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
