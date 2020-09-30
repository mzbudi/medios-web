import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageService.png';

const useStyles = makeStyles({
  Main_ImageSection: {
    width: 204,
    height: 304.39,
  },
  Title: {
    font: 'normal normal 600 50px/61px Montserrat',
    color: '#29ae6d',
  },
  Title_Card: {
    font: 'normal normal 600 50px/61px Montserrat',
    color: '#29ae6d',
    marginBottom: '0px',
    paddingBottom: '0px',
  },
  Title_Extra: {
    font: 'normal normal 600 50px/61px Montserrat',
    color: '#29ae6d',
    marginTop: '0px',
    paddingTop: '0px',
    marginBottom: '0px',
    paddingBottom: '0px',
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
    backgroundImage: `url(${HeaderImage})`,
    height: '350px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
    fontFamily: 'Montserrat',
    color: '#29ae6d',
    opacity: '1',
    padding: '0px',
    margin: '0px',
    font: 'normal normal normal 30px/37px Montserrat;',
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
  },
  Button_Midle: {
    textAlign: 'center',
  },
  Dot_Left: {
    marginRight: '50px',
    width: '24px',
    height: '24px',
  },
  Dot: {
    marginLeft: '100px',
    marginRight: '50px',
    width: '24px',
    height: '24px',
  },
  Grid_Margin: {
    marginTop: '100px',
  },
});

export default useStyles;
