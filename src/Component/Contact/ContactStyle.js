import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Background_Image: {
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
  Contact_Title: {
    position: 'absolute',
    top: '25%',
    left: '43%',
    color: '#29AE6D',
    fontSize: '60px',
    fontFamily: 'Montserrat',
    fontWeight: 'semibold',
  },
  ReachUs_Title: {
    marginTop: '5%',
    marginBottom: '5%',
    font: 'normal normal 600 60px/73px Montserrat',
    color: '#29ae6d',
    textAlign: 'center',
  },
  Grid_Image: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  Image_Contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Form_Contact: {
    height: '98px',
  },
  Form_Label: {
    font: 'Montserrat',
    fontSize: '30px',
    color: '#707070',
    opacity: 1,
    margin: '20px',
  },
  Text_Field: {
    width: '80%',
    height: '80%',
    borderRadius: '10px',
    opacity: 1,
  },
  Btn_Flyit: {
    background: 'transparent linear-gradient(112deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box',
    boxShadow: '5px 15px 30px #3939391A',
    marginTop: '30px',
    borderRadius: '50px',
    opacity: 1,
    letterSpacing: 0,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingRight: 40,
  },
  Footer_Contact: {
    width: '100%',
    marginTop: '150px',
  },
  Contact_Image: {
    width: '75%',
    height: '75%',
  },
});

export default useStyles;
