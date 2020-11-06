import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageCMSPAGE.png';

const useStyles = makeStyles(() => ({
  MainHeader: {
    height: '100vh',
    backgroundImage: `url(${HeaderImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '-120px',
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
  ProductContainer: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  LogoCMS: {
    width: '18%',
    marginBottom: '3%',
  },
  ContentTitle: {
    fontFamily: 'Montserrat',
    marginTop: '3%',
    fontSize: 35,
    fontWeight: 500,
  },
  ProductProblem: {
    marginTop: '5%',
    backgroundColor: '#F2FFF9',
  },
  ProblemContent: {
    margin: '5%',
    height: '35vh',
  },
  ProblemImg: {
    width: '40%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ProblemDesc: {
    marginTop: '10%',
    fontFamily: 'Montserrat',
    fontSize: 13,
  },
  ProductSolution: {
    marginTop: '2%',
  },
  SolutionContent: {
    marginTop: '5%',
  },
  CMSTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 20,
    marginBottom: '5%',
  },
  CMSDesc: {
    fontFamily: 'Montserrat',
    fontSize: 15,
  },
  CardCMS: {
    width: '500px',
    borderRadius: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  CardImg: {
    height: '300px',
  },
  SolutionBenefit: {
    margin: 'auto',
    marginTop: '10%',
    width: '50%',
    backgroundColor: '#F2FFF9',
    borderRadius: '20px',
  },
  BenefitContent: {
    height: '20vh',
    padding: '2%',
  },
  BenefitImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50px',
  },
  BenefitTitle: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Montserrat',
    marginTop: '10%',
  },
}));

export default useStyles;
