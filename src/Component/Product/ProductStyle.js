import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Image_Header: {
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
  Title_CMS: {
    position: 'absolute',
    top: '50%',
    left: '17%',
    font: 'normal normal bold 60px/73px Montserrat',
    fontWeight: 'bold',
  },
  Title_CMS2: {
    position: 'absolute',
    top: '65%',
    left: '24%',
    textAlign: 'center',
    font: 'normal normal 600 45px/55px Montserrat',
    fontWeight: 'bold',
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
  Solution_Problem: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '50px',
    textAlign: 'center',
    paddingTop: '50px',
    color: 'Black',
    marginBottom: '100px'
  },
  Solution_Content: {
    font: 'normal normal 600 35px/43px Montserrat',
    textAlign: 'left',
    color:'#383838',
    marginLeft: '100px',
    marginTop: '0px'
  },
  Solution_Content2: {
    font: 'normal normal normal 25px/30px Montserrat',
    textAlign: 'left',
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px',
    color: '#707070'
  },
  Image_CMS: {
    width: '100%',
    height: '100%',
    maxHeight: '426px',
    maxWidth: '674px',
    marginLeft: '100px',
    marginBottom: '100px'
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
