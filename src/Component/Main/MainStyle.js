import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
    width: 350,
    height: 308.39,
  },

  Main_TextImageSection: {
    font: 'normal normal bold 20px/24px Montserrat;',
    color: '#29AE6D',
  },

  Main_WhyChooseUs: {
    width: '100%',
    height: 700,
    position: 'absolute',
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

  Main_MarginFlyIt: {
    margin: '25px 0px',
  },
});

export default useStyles;
