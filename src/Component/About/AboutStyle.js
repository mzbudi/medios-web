import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageService.png';

const useStyles = makeStyles({
  Main_ImageSection: {
    width: 204,
    height: 304.39,
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
  Main_TextService: {
    font: 'normal normal 600 60px/73px Montserrat',
    color: '#29AE6D',
  },
});

export default useStyles;
