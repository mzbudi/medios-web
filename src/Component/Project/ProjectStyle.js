import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageProject.png';

const useStyles = makeStyles((theme) => ({
  HeaderImage: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '200px',
    paddingBottom: '200px',
    width: '100%',
  },
  PageTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 50,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 60,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 60,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 70,
    },
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#29AE6D',
  },
  Content: {
    paddingBottom: '10%',
  },
  OngoingTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 46,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 50,
    },
    fontFamily: 'Montserrat',
    fontWeight: 500,
    marginTop: '5%',
    marginBottom: '5%',
  },
  Card: {
    [theme.breakpoints.down('lg')]: {
      width: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '350px',
    },
    margin: '20px',
  },
  CardMedia: {
    height: '300px',
  },
  CardContentTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
    fontFamily: 'Montserrat',
  },
  CardContentSubtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 8,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 10,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 12,
    },
    color: '#29AE6D',
    paddingTop: 4,
    fontFamily: 'Montserrat',
  },
  CardContentBody: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 13,
    },
    paddingTop: '5%',
    paddingBottom: '5%',
  },
}));

export default useStyles;
