import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../Assets/Images/ImageCMSPAGE.png';

const useStyles = makeStyles({
  Image_Header: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '200px',
    paddingBottom: '200px',
    width: '100%',
    height: '100%',
  },
  Main_TextService1: {
    textAlign: 'center',
    font: 'normal normal bold 60px / 73px Montserrat',
    color: '#383838',
    textTransform: 'uppercase',
    opacity: '1',
    marginTop: '250px'
  },
  Main_TextService2: {
    textAlign: 'center',
    font: 'normal normal 600 45px/55px Montserrat',
    color: '#383838',
    textTransform: 'uppercase',
    marginTop:'30px',
    marginBottom: '250px'
  },
  Title_CMS3: {
    fontSize: '50px',
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontWeight: 'semibold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Title_CMS4: {
    // position: 'absolute',
    fontSize: '30px',
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Logo: {
    marginTop: '150px',
    width: '260px',
    height: '249px',
    alignItems: 'center',
  },
  Container_Problem: {
    backgroundColor: '#F2FFF9',
    width: '100%',
    maxHeight: '574px',
  },
  Title_Problem: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '50px',
    textAlign: 'center',
    paddingTop: '50px',
    color: 'Black',
  },
  Icon_Image: {
    width: '81px',
    height: '86px',
  },
  Problem_Content: {
    color: '#707070',
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px',
  },
  Solution_Content: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '40px',
    textAlign: 'center',
  },
  Solution_Content2: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '28px',
    textAlign: 'left',
    margin: '100px',
  },
  Image_CMS: {
    width: '100%',
    height: '100%',
    maxHeight: '426px',
  },
  Benefit: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_Benefit: {
    backgroundColor: '#F2FFF9',
    width: '100%',
    height: '100%',
    maxHeight: '251px',
  },
  Icon_Image2: {
    width: '75px',
    height: '75px',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: '30px',
  },
  Benefit_Content: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    color: '#707070',
    fontSize: '25px',
    textAlign: 'center',
  },
  Footer: {
    width: '100%',
    marginTop: '200px',
  },
});

export default useStyles;
