import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  Header_Root: {
    flexGrow: 1,
  },
  Header_Grow: {
    flexGrow: 1,
  },
  Header_Menubar: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '5%',
      paddingRight: '5%',
    },
  },
  Header_ContactBtn: {
    background: 'linear-gradient(114deg, #29AE6D 0%, #009744 100%) 0% 0% no-repeat padding-box;',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '5px 15px 30px #3939391A',
    opacity: 1,
    font: 'bold 20px/24px Montserrat',
  },
  Header_MenuBtn: {
    background: 'transparent',
    borderRadius: 3,
    border: 0,
    color: 'black',
    '&:hover': {
      color: 'green',
      backgroundColor: 'transparent',
    },
    marginRight: theme.spacing(2),
    font: '20px/24px Montserrat',
  },
  Header_Logo: {
    [theme.breakpoints.down('sm')]: {
      height: '70px',
      width: '92px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '112px',
      width: '134px',
    },
  },
  Header_Flag: {
    height: '25px',
    width: '25px',
  },
  Header_FlagID: {
    padding: '0px 0px',
    minWidth: '40px',
    display: 'none',
  },
  Header_FlagUK: {
    padding: '0px 0px',
    minWidth: '40px',
    marginRight: theme.spacing(2),
    display: 'none',
  },
  Header_DropdownBtn: {
    [theme.breakpoints.up('md')]: { display: 'none' },
  },
  Header_Menulist: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  Header_BtnResponsive: {
    '&:hover': { backgroundColor: 'transparent' },
  },
  Header_ProductPoP: {
    background: '#29AE6D',
    color: 'white',
  },
});

export default useStyles;
