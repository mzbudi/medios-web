import { makeStyles } from '@material-ui/core/styles';
import { green, yellow, purple } from '@material-ui/core/colors';
import ChooseUs from '../../Assets/Images/ChooseUs.jpg';

const useStyles = makeStyles((theme) => ({
  rood: {
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: '5px 15px 30px #3939390D',
    opacity: 1,
  },
  Main_OpeningText: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      font: 'normal normal 600 1.25rem/2.25rem Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
      marginTop: 150,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      font: 'normal normal 600 1.75rem/2.75rem Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
      marginTop: 150,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 2rem/3rem Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
      marginTop: 150,
      marginLeft: 100,
      marginRight: 100,
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 2.5rem/3.063rem Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
      marginTop: 200,
    },
  },
  Main_OpeningText2: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      font: 'normal normal normal 0.75rem/1.03rem Montserrat',
      letterSpacing: 0,
      color: '#8C8C8C',
      opacity: 1,
      marginLeft: 25,
      marginRight: 25,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      font: 'normal normal normal 1/1.30rem Montserrat',
      letterSpacing: 0,
      color: '#8C8C8C',
      opacity: 1,
      marginLeft: 25,
      marginRight: 25,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 1.25rem/1.55rem Montserrat',
      letterSpacing: 0,
      color: '#8C8C8C',
      opacity: 1,
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 1.5625rem/1.875rem Montserrat',
      letterSpacing: 0,
      color: '#8C8C8C',
      opacity: 1,
    },
  },
  Main_ImageSection: {
    [theme.breakpoints.down('md')]: {
      width: '75%',
      height: '75%',
      maxHeight: 249.38,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '90%',
      height: '90%',
      maxHeight: 249.38,
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: '100%',
      maxHeight: 249.38,
    },
  },
  Main_TextImageSection: {
    [theme.breakpoints.down('lg')]: {
      font: 'normal normal bold 15px/19px Montserrat;',
      color: '#29AE6D',
    },
    [theme.breakpoints.up('lg')]: {
      font: 'normal normal bold 20px/24px Montserrat;',
      color: '#29AE6D',
    },
  },
  Main_WhyChooseUs: {
    padding: '100px',
    backgroundImage: `url(${ChooseUs})`,
    margin: '120px 0px',
  },

  Main_TextWhyChooseUsTitle: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      font: 'normal normal 600 30px/35px Montserrat;',
      letterSpacing: 0,
      color: '#FFFFFF',
      opacity: 1,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 40px/45px Montserrat;',
      letterSpacing: 0,
      color: '#FFFFFF',
      opacity: 1,
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 50px/60px Montserrat;',
      letterSpacing: 0,
      color: '#FFFFFF',
      opacity: 1,
    },
  },

  Main_TextWhyChooseUsSubtitle: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      font: 'normal normal normal 15px/22px Montserrat',
      letterSpacing: 0,
      color: '#FFFFFF',
      opacity: 1,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal normal 20px/27px Montserrat',
      letterSpacing: 0,
      color: '#FFFFFF',
      opacity: 1,
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      font: 'normal normal normal 30px/37px Montserrat',
      letterSpacing: 0,
      color: '#FFFFFF',
      opacity: 1,
    },
  },

  Main_TextWhyChooseUsBody: {
    color: '#FFFFFF',
    font: 'normal normal normal 20px/24px Montserrat',
  },

  Main_PartnerImg: {
    maxHeight: 200,
    maxWidth: 200,
  },

  Main_FormContact: {
    padding: '0 10% 0 10%',
  },

  Main_Btn_Flyit: {
    background: 'transparent linear-gradient(112deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
    boxShadow: '5px 15px 30px #3939391A',
    borderRadius: 20,
    opacity: 1,
    letterSpacing: 0,
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: '10px 40px',
  },

  Main_MarginQuote: {
    margin: '10% 10%',
    backgroundColor: '#F9F9F9',
  },

  Main_QuoteIcon: {
    height: 100,
    width: 100,
  },

  Main_TypoQuote: {
    fontWeight: 'bold',
    opacity: 1,
    color: '#29AE6D',
  },

  Main_QuoteContainer: {
    paddingLeft: theme.spacing(3),
  },

  Main_MarginFlyIt: {
    margin: '25px 0px',
  },

  Main_CardImage: {
    width: '100%',
    height: 398,
    maxHeight: 398,
  },

  Main_IconSize: {
    [theme.breakpoints.down('md')]: {
      height: 50,
      width: 50,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: 60,
      width: 60,
    },
    [theme.breakpoints.up('lg')]: {
      height: 70,
      width: 70,
    },
  },

  Main_TextOurProduct: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      font: 'normal normal 600 20px/29px Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 30px/39px Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      font: 'normal normal 600 40px/49px Montserrat',
      letterSpacing: 0,
      color: '#383838',
      opacity: 1,
    },
  },

  Main_MarginOurProduct: {
    marginTop: 100,
  },

  Main_CardTitle: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
      font: 'normal normal bold 15px/14px Montserrat',
      letterSpacing: 0,
      color: '#29AE6D',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      textAlign: 'left',
      font: 'normal normal bold 20px/19px Montserrat',
      letterSpacing: 0,
      color: '#29AE6D',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      font: 'normal normal bold 25px/24px Montserrat',
      letterSpacing: 0,
      color: '#29AE6D',
    },
  },

  Main_BtnShowMore: {
    background: 'transparent linear-gradient(107deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
    boxShadow: '5px 15px 30px #3939391A',
    opacity: 1,
    fontWeight: 'bold',
    letterSpacing: 0,
    color: '#FFFFFF',
  },

  Main_FullHeightCards: {
    height: '100%',
  },

  Main_CardShadow: {
    boxShadow: '5px 15px 30px #3939390D',
    opacity: 1,
  },

  Main_QuoteImg: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  Main_CardBtnFlexer: {
    marginBottom: '5%',
    marginRight: '5%',
  },

  Main_ContactSection: {
    textAlign: 'left',
    letterSpacing: 0,
    opacity: 1,
    font: 'normal normal normal 24px/30px Montserrat',
  },
  Main_PhoneTextColor: {
    color: '#29AE6D',
  },

  Main_MarginContact: {
    marginBottom: '5%',
  },

  Main_TextFlyIt: {
    font: 'normal normal bold 20px/24px Montserrat',
    letterSpacing: 0,
    color: '#FFFFFF',
    opacity: 1,
  },
}));

export default useStyles;
