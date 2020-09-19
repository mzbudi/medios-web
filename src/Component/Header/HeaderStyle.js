import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  Header_Root: {
    flexGrow: 1,
  },
  Header_Tittle: {
    flexGrow: 1,
  },
  Header_Menubar: {
    backgroundColor: 'inherit',
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
  },
  Header_MenuBtn: {
    background: 'inherit',
    borderRadius: 3,
    border: 0,
    color: 'black',
    '&:hover': {
      background: 'inherit',
    },
    marginRight: theme.spacing(2),
  },
  Header_Logo: {
    height: '112px',
    width: '134px',
  },
  Header_Flag: {
    height: '25px',
    width: '25px',
  },
  Header_FlagID: {
    padding: '0px 0px',
    minWidth: '40px',
  },
  Header_FlagUK: {
    padding: '0px 0px',
    minWidth: '40px',
    marginRight: theme.spacing(2),
  },
});

export default useStyles;
