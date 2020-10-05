import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Content: {
    marginTop: '200px',
  },
  Project_Title: {
    font: 'normal normal 600 60px/ 73px Montserrat',
    color: '#29AE6D',
    fontWeight: 'semibold',
    marginBottom: '30%',
  },
  Image_Border: {
    borderRadius: '20px',
    width: '90%',
    height: '100%',
  },
  Ongoing_Project: {
    textAlign: 'center',
    font: 'normal normal 600 50px/61px Montserrat',
    color: '#29AE6D',
    marginBottom: '100px',
  },
  Container_Content: {
    position: 'relative',
  },
  Text_Block1: {
    position: 'absolute',
    top: '75%',
    left: '10%',
    backgroundColor: '#29AE6D4D',
    borderRadius: '20px',
    width: '70%',
    height: '20%',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  Text_Block2: {
    position: 'absolute',
    width: '70%',
    height: '80%',
    top: '95%',
    left: '10%',
    backgroundColor: '#FFFFFF',
    color: 'white',
    boxShadow: '5px 5px 15px #0000000D',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '20px',
  },
  TextBlock_Title: {
    textAlign: 'left',
    font: 'normal normal bold 18px/22px Montserrat',
  },
  TextBlock_Content1: {
    textAlign: 'left',
    color: '#383838',
    font: 'normal normal 600 18px/22px Montserrat',
  },
  TextBlock_Content2: {
    textAlign: 'left',
    color: '#707070',
    font: 'normal normal normal 15px/19px Montserrat',
  },
  Footer: {
    marginTop: '300px',
    width: '100%',
  },
});

export default useStyles;
