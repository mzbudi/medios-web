import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageCMSPAGE.png';

const useStyles = makeStyles(() => ({
  CMSHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  CMSBanner: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  PageTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 45,
    color: '#383838',
  },
  PageSubtitle: {
    marginTop: '15.5px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 30,
    color: '#383838',
  },
  LogoCMS: {
    height: '40vh',
    width: 'auto',
    marginBottom: '1rem',
  },
  ContentTitle: {
    fontFamily: 'Montserrat',
    fontSize: '2.5rem',
    fontWeight: 600,
    paddingTop: '1.875rem',
    color: '#383838',
  },
  ProblemContainer: {
    height: 'fit-content',
    width: '100%',
    backgroundColor: '#F2FFF9',
  },
  ProblemImg: {
    width: '5.0625rem',
    display: 'block',
    margin: 'auto',
  },
  ProblemDesc: {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1.875rem',
    color: '#383838',
  },
  SolutionContainer: {
    height: '100vh',
  },
  SolutionContent: {
    marginTop: '5%',
  },
  CMSTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '1.5625rem',
    color: '#383838',
  },
  BannerCMS: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CMSDesc: {
    fontFamily: 'Montserrat',
    fontSize: '1.25rem',
    lineHeight: '1.875rem',
    width: '80%',
    color: '#383838',
  },
  CardCMS: {
    width: 'auto',
    height: '50vh',
    borderRadius: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  CardImg: {
    height: '50vh',
    width: 'auto',
  },
  SolutionBenefit: {
    backgroundColor: '#F2FFF9',
    borderRadius: '1.25rem',
    padding: '2% 2% 2%',
  },
  BenefitImg: {
    display: 'block',
    margin: 'auto',
    width: '4.375rem',
  },
  BenefitTitle: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Montserrat',
    marginTop: '1rem',
    color: '#383838',
  },
}));

export default useStyles;
