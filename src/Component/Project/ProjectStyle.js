import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageProject.png';
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
  Image_Border: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      borderRadius: '20px',
      width: '90%',
      height: '100%',
      marginTop: '20px',
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '20px',
      width: '90%',
      height: '100%',
    },
    // Image_Border: {
    //   borderRadius: '20px',
    //   width: '90%',
    //   height: '100%',
  },
  Text_Block1: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#29AE6D4D',
      borderRadius: '20px',
      width: '90%',
      height: '100%',
      color: 'white',
      marginTop: '0px'
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#29AE6D4D',
      borderRadius: '20px',
      width: '90%',
      height: '100%',
      color: 'white',
      marginTop: '0px'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: '#29AE6D4D',
      borderRadius: '20px',
      width: '80%',
      height: '100%',
      color: 'white',
    },
    // Text_Block1: {
    //   backgroundColor: '#29AE6D4D',
    //   borderRadius: '20px',
    //   width: '50%',
    //   height: '20%',
    //   color: 'white',
    //   paddingLeft: '20px',
    //   paddingRight: '20px',
    //   marginTop: '0px'
  },
  Text_Block2: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '30%',
      backgroundColor: '#FFFFFF',
      color: 'white',
      boxShadow: '15px 15px 15px 10px #0000000D',
      borderRadius: '20px',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
      height: '30%',
      backgroundColor: '#FFFFFF',
      color: 'white',
      boxShadow: '15px 15px 15px 10px #0000000D',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderRadius: '20px',
    },
    // Text_Block2: {
    //   width: '80%',
    //   height: '30%',
    //   backgroundColor: '#FFFFFF',
    //   color: 'white',
    //   boxShadow: '15px 15px 15px 10px #0000000D',
    //   paddingLeft: '20px',
    //   paddingRight: '20px',
    //   borderRadius: '20px',
  },
  TextBlock_Title: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      // marginTop: '9px',
      textAlign: 'center',
      font: 'normal normal bold 18px/22px Montserrat',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '9px',
      textAlign: 'left',
      font: 'normal normal bold 18px/22px Montserrat',
    },
    // marginTop: '9px',
    // textAlign: 'left',
    // font: 'normal normal bold 18px/22px Montserrat',
  },
  TextBlock_Content1: {
    textAlign: 'left',
    color: '#383838',
    font: 'normal normal 600 18px/22px Montserrat',
  },
  TextBlock_Content2: {
    textAlign: 'left',
    color: '#707070',
    font: 'normal normal normal 15px/19px Montserrat',
    paddingBottom: '20px'
  },
  Footer: {
    marginTop: '300px',
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
