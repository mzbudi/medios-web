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
    position: 'absolute',
    top: '25%',
    left: '45%',
    color: '#29AE6D',
    fontSize: '45px',
    fontFamily: 'Montserrat',
  },
});

export default useStyles;
