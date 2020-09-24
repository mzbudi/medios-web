import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  Image_Header: {
    backgroundSize: 'cover'
  },
  Title_CMS: {
    position: 'absolute',
    fontSize: "60px",
    font: 'Montserrat',
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  Title_CMS2: {
    position: 'absolute',
    fontSize: "45px",
    marginTop: '140px',
    font: 'Montserrat',
    fontFamily: "Montserrat",
    fontWeight: 'semibold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  Title_CMS3: {
    // position: 'absolute',
    fontSize: "50px",
    // marginTop: '140px',
    font: 'Montserrat',
    fontFamily: "Montserrat",
    fontWeight: 'semibold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  Title_CMS4: {
    // position: 'absolute',
    fontSize: "30px",
    font: 'Montserrat',
    fontFamily: "Montserrat",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  Logo: {
    marginTop: "150px",
    width: "260px",
    height: "249px",
    alignItems: 'center'
  },
  Container_Problem: {
    backgroundColor: "#F2FFF9",
    width: "1920px",
    height: "574px",
  },
  Title_Problem: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '50px',
    textAlign: 'center',
    paddingTop: '50px',
    color: 'Black'
  },
  Icon_Image: {
    width: "81px",
    height: "86px",
    marginLeft:"190px"
  },
  Problem_Content: {
    color: "#707070",
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px'
  },
  Solution_Content: {
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize:'40px',
    textAlign:'center'
  },
  Solution_Content2:{
    font: 'Montserrat',
    fontFamily: 'Montserrat',
    fontSize:'28px',
    textAlign:'left',
    margin: "100px"
  },
  Image_CMS: {
    width: "674px",
    height: "426px",
    margin:"50px"
  },
  Benefit:{
    marginTop: "50px",
    marginLeft: "400px",
    textAlign: 'center',
    alignContent:'center',
    alignItems:'center',
  },
  Container_Benefit: {
    backgroundColor: "#F2FFF9",
    width: "1102px",
    height: "251px"
  },
  Icon_Image2: {
    width: "50px",
    height: "54px",
    alignItems:'center',
    alignContent:'center',
    textAlign:'center',
    marginTop:'30px'
  },
  Benefit_Content:{
    font: 'Montserrat',
    fontFamily:'Montserrat',
    color: '#707070',
    fontSize: "30px",
    textAlign: 'center'
  }
});

export default useStyles;
