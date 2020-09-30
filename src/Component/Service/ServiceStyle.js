import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageService.png';

const useStyles = makeStyles({
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
  HeaderImage: {
    backgroundImage: `url(${HeaderImage})`,
    height: '350px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
  },
});

export default useStyles;
