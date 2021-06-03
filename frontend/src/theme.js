import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const etzy = createMuiTheme({
    palette: {
      primary: {
        light: '#EEECEA',
        main: '#A13C3C',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    '@global': {
      body: {
        background: '#D7DACA',
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      alignItems: 'center',
    },
    search: {
        background: `${etzy.palette.primary.light}`,
        margin: '10px',
        padding: '5px',
        width: '450px',
        '@media (max-width: 900px)': {
          maxWidth: '40vw',
        }
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

  export default useStyles;