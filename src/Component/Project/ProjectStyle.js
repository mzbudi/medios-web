import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  Content: {
    marginTop: '200px'
  },
  Project_Title: {
    font: 'normal normal 600 60px/ 73px Montserrat',
    color: '#29AE6D',
    fontWeight: 'semibold',
    marginBottom: '300px'
  },
  Image_Border: {
    borderRadius: '20px',
  },
  Ongoing_Project: {
    textAlign: 'center',
    font: 'normal normal 600 50px/61px Montserrat',
    color: '#29AE6D',
    marginBottom: '100px',
  },
  Container_Content: {
    position: 'relative'
  },
  Text_Block1: {
    position: 'absolute',
    bottom: '10px',
    left: '95px',
    backgroundColor: '#29AE6D4D',
    borderRadius: '20px',
    width: '280px',
    height: '100px',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',

  },
  Text_Block2: {
    position: 'absolute',
    width: '405px',
    height: '201px',
    top: '45px',
    left: '0px',
    backgroundColor: '#FFFFFF',
    color: 'white',
    boxShadow: '5px 5px 15px #0000000D',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '20px',
  },
  TextBlock_Content1: {
    fontSize: '18px',
    textAlign: 'left',
    color :'#383838'
  },
  TextBlock_Content2: {
    fontSize: '15px',
    textAlign: 'left',
    color: '#707070'
  },
  Footer: {
    marginTop: '300px',
    width: '100%'
  },
  Box1: {
    textAlign: 'left',
    border: '10px',
    borderRadius: '20px',
    padding: '15px',
    background: '#29AE6D4D',
    backgroundClip: 'border-box',
    font: 'normal normal bold 18px/22px Montserrat',
    fontSize: '24px',
    color: '#FFFFFF',
    textTransform: 'uppercase'
  },
  Box2: {
    textAlign: 'left',
    border: '10px',
    borderRadius: '20px',
    padding: '15px',
    backgroundClip: 'border-box',
    font: 'normal normal bold 18px/22px Montserrat',
    fontSize: '18px',
    textTransform: 'uppercase'
  }
});

export default useStyles;
