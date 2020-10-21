import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageCMSPAGE.png';
import { green, red, blue, yellow, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
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
  Main_TextService1: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      font: 'normal normal bold 10px / 23px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '10px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
      font: 'normal normal bold 20px / 33px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '25px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      font: 'normal normal bold 30px / 43px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '50px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal bold 40px / 53px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '100px'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal bold 60px / 73px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '250px'
    },
  },
  Main_TextService2: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      font: 'normal normal bold 8px / 15px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '10px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
      font: 'normal normal bold 10px / 23px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '10px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      font: 'normal normal bold 15px / 2px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '20px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal bold 25px / 35px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      opacity: '1',
      marginTop: '50px'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 45px/55px Montserrat',
      color: '#383838',
      textTransform: 'uppercase',
      marginTop: '30px',
      marginBottom: '250px'
    },
  },
  Title_CMS3: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      font: 'normal normal 600 10px/17px Montserrat',
      color: '#383838',
      textTransform: 'uppercase'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 20px/27px Montserrat',
      color: '#383838',
      textTransform: 'uppercase'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 30px/37px Montserrat',
      color: '#383838',
      textTransform: 'uppercase'
    },
  },
  Title_CMS4: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      font: 'normal normal normal 25px/30px Montserrat',
      color: '#383838',
      textTransform: 'capitalize'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 15px/20px Montserrat',
      color: '#383838',
      textTransform: 'capitalize'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 25px/30px Montserrat',
      color: '#383838',
      textTransform: 'capitalize'
    },
  },
  Logo: {
    [theme.breakpoints.down('md')]: {
      marginTop: '50px',
      height: '100%',
      width: '100%',
      width: '100px',
      height: '99px',
      alignItems: 'center',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: '100px',
      height: '100%',
      width: '100%',
      width: '160px',
      height: '149px',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '150px',
      height: '100%',
      width: '100%',
      maxWidth: '260px',
      maxHeight: '249px',
      alignItems: 'center',
    },
  },
  Container_Problem: {
    backgroundColor: '#F2FFF9',
    padding: '0px',
    width: '100%',
    height: '100%'
    // maxHeight: '574px',
  },
  Title_Problem: {
    [theme.breakpoints.down('md')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      textAlign: 'center',
      paddingTop: '20px',
      color: 'Black',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '30px',
      textAlign: 'center',
      paddingTop: '30px',
      color: 'Black',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '50px',
      textAlign: 'center',
      paddingTop: '50px',
      color: 'Black',
    },
  },
  Icon_Image: {
    [theme.breakpoints.down('md')]: {
      width: '21px',
      height: '26px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '41px',
      height: '46px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '81px',
      height: '86px',
    },
  },
  Problem_Content: {
    [theme.breakpoints.down('md')]: {
      color: '#707070',
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '10px',
      textAlign: 'center',
      marginTop: '10px',
      marginLeft: '50px',
      marginRight: '50px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      color: '#707070',
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '15px',
      textAlign: 'center',
      marginTop: '10px',
      marginLeft: '100px',
      marginRight: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      color: '#707070',
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '50px',
      marginLeft: '100px',
      marginRight: '100px',
    },
  },
  Solution_Problem: {
    [theme.breakpoints.down('md')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      textAlign: 'center',
      paddingTop: '20px',
      color: 'Black',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '30px',
      textAlign: 'center',
      paddingTop: '30px',
      color: 'Black',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      fontSize: '50px',
      textAlign: 'center',
      paddingTop: '50px',
      color: 'Black',
    },
  },
  Solution_Content: {
    [theme.breakpoints.down('md')]: {
      font: 'normal normal 600 15px/23px Montserrat',
      textAlign: 'center',
      color: '#383838',
      marginLeft: '25px',
      marginTop: '10px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      font: 'normal normal 600 25px/32px Montserrat',
      textAlign: 'center',
      color: '#383838',
      marginLeft: '50px',
      marginTop: '10px'
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal 600 35px/43px Montserrat',
      textAlign: 'left',
      color: '#383838',
      marginLeft: '100px',
      marginTop: '0px'
    },
  },
  Solution_Content2: {
    [theme.breakpoints.down('md')]: {
      font: 'normal normal normal 10px/15px Montserrat',
      textAlign: 'center',
      marginTop: '15px',
      marginLeft: '50px',
      marginRight: '50px',
      color: '#707070'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      font: 'normal normal normal 20px/25px Montserrat',
      textAlign: 'center',
      marginTop: '50px',
      marginLeft: '100px',
      marginRight: '100px',
      color: '#707070'
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal normal 25px/30px Montserrat',
      textAlign: 'left',
      marginTop: '50px',
      marginLeft: '100px',
      marginRight: '100px',
      color: '#707070'
    },
  },
  Image_CMS: {
    [theme.breakpoints.down('md')]: {
      width: '75%',
      height: '70%',
      // maxHeight: '426px',
      // maxWidth: '674px',
      marginTop: '20px',
      marginLeft: '12%',
      marginBottom: '5%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '75%',
      height: '75%',
      // maxHeight: '426px',
      // maxWidth: '674px',
      marginTop: '20px',
      marginLeft: '13%',
      marginBottom: '5%',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '80%',
      height: '80%',
      maxHeight: '426px',
      maxWidth: '674px',
      marginTop: '40px',
      marginLeft: '50px',
      marginBottom: '100px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      height: '100%',
      maxHeight: '426px',
      maxWidth: '674px',
      marginTop: '40px',
      marginLeft: '%',
      marginBottom: '100px'
    },
  },
  Benefit: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_Benefit: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#F2FFF9',
      marginLeft: '25%',
      width: '50%',
      height: '100%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      backgroundColor: '#F2FFF9',
      marginLeft: '25%',
      width: '50%',
      height: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: '#F2FFF9',
      marginLeft: '3%',
      width: '100%',
      height: '100%',
      maxHeight: '251px',
    },
  },
  Icon_Image2: {
    [theme.breakpoints.down('md')]: {
      width: '25px',
      height: '25px',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      marginTop: '30px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '50px',
      height: '50px',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      marginTop: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '75px',
      height: '75px',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      marginTop: '30px',
    },
  },
  Benefit_Content: {
    [theme.breakpoints.down('md')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      color: '#707070',
      fontSize: '15px',
      textAlign: 'center',
    },
    [theme.breakpoints.between('md', 'lg')]: {

      font: 'Montserrat',
      fontFamily: 'Montserrat',
      color: '#707070',
      fontSize: '20px',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'Montserrat',
      fontFamily: 'Montserrat',
      color: '#707070',
      fontSize: '25px',
      textAlign: 'center',
    },
  },
  Footer: {
    width: '100%',
    marginTop: '200px',
  },
}))

export default useStyles;
