import { makeStyles } from '@material-ui/core/styles';
import ChooseUs from '../../Assets/Images/ChooseUs.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  Main_OpeningText: {
    textAlign: 'center',
    font: 'normal normal 600 40px/49px Montserrat',
    letterSpacing: 0,
    color: '#383838',
    opacity: 1,
    marginTop: 200,
  },
  Main_OpeningText2: {
    textAlign: 'center',
    font: 'normal normal normal 25px/30px Montserrat',
    letterSpacing: 0,
    color: '#8C8C8C',
    opacity: 1,
  },
  Main_ImageSection: {
    width: '100%',
    height: '100%',
    maxHeight: 249.38,
  },

  Main_TextImageSection: {
    font: 'normal normal bold 20px/24px Montserrat;',
    color: '#29AE6D',
  },

  Main_WhyChooseUs: {
    padding: '100px',
    backgroundImage: `url(${ChooseUs})`,
    margin: '120px 0px',
  },

  Main_TextWhyChooseUsTitle: {
    textAlign: 'center',
    font: 'normal normal 600 50px/40px Montserrat;',
    letterSpacing: 0,
    color: '#FFFFFF',
    opacity: 1,
  },
  Main_TextWhyChooseUsSubtitle: {
    textAlign: 'left',
    font: 'normal normal normal 30px/37px Montserrat',
    letterSpacing: 0,
    color: '#FFFFFF',
    opacity: 1,
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
    font: 'normal bold 14px/19px Montserrat',
    letterSpacing: 0,
    color: '#FFFFFF',
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
    height: 70,
    width: 70,
  },

  Main_TextOurProduct: {
    textAlign: 'center',
    font: 'normal normal 600 40px/49px Montserrat',
    letterSpacing: 0,
    color: '#383838',
    opacity: 1,
  },

  Main_MarginOurProduct: {
    marginTop: 100,
  },

  Main_CardTitle: {
    textAlign: 'left',
    font: 'normal normal bold 25px/24px Montserrat',
    letterSpacing: 0,
    color: '#29AE6D',
  },

  Main_BtnShowMore: {
    background: 'transparent linear-gradient(107deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
    boxShadow: '5px 15px 30px #3939391A',
    borderRadius: '10px',
    opacity: 1,
    fontWeight: 'bold',
    letterSpacing: 0,
    color: '#FFFFFF',
  },

  Main_FullHeightCards: {
    height: '100%',
  },
}));

export default useStyles;
