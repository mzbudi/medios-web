import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  Background_Image: {
    backgroundSize: 'cover',
    width: '1920px',
    height: ' 601px',
  },
  Contact_Title: {
    position: 'absolute',
    top: '25%',
    left: '43%',
    color: '#29AE6D',
    fontSize: '60px',
    fontFamily: 'Montserrat',
    fontWeight: 'semibold'
  },
  ReachUs_Title: {
    font: 'normal normal 600 60px/73px Montserrat',
    color: '#29ae6d',
    textAlign: 'center',
    
  },
  Grid_Image: {
    display: "flex",
    alignContent: "center",
    alignItems: "center"
  },
  Image_Contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center"
  },
  Form_Contact: {
    height: "98px"
  },
  Form_Label: {
    font: "Montserrat",
    fontSize: "30px",
    color: "#707070",
    opacity: 1,
    margin: "20px"
  },
  Text_Field: {
    width: "732px",
    height: "98px",
    // border: "3px solid #707070",
    borderRadius: "10px",
    opacity: 1
  },
  Button_Contact: {
    margin: "40px",
    width: "181px",
    height: "65px",
    background: "transparent linear-gradient(112deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box",
    boxShadow: "5px 15px 30px #3939391A",
    borderRadius: "50px",
    opacity: 1,
    font: "Montserrat",
    fontSize: "24px"
  },
  Footer_Contact: {
    width: "1909px",
    marginTop: "150px"
  },
});

export default useStyles;
