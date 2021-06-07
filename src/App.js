import logo from './logo.svg';
import './App.css';
import Main from "./Compounents/Main";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import HeaderCompounent from "./Compounents/Header/HeaderCompounent";

const theme = createMuiTheme({
  palette: {
    type : 'dark' ,
    contrastThreshold : 3 ,
    tonalOffset: 0.2 ,
    divider: "rgba(255, 255, 255, 0.12)",
    background : {
      paper : "#1F222C",
      default : "#98DED9",
    },
    text : {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    common : {
      black : '#000',
      white : '#fff'
    },
    primary: {
      main: '#329BA6',
      light :"#98DED9",
      dark : '#98DED9',
      contrastText : '#F6F6F6'
    },
    secondary: {
      main: '#312F30',
      light :'#7D787A',
      dark : '#141414',
      contrastText : '#fff'
    },
    error : {
      main: '#FA3838',
      light :'#FB6060',
      dark : '#A72525',
      contrastText : '#fff'
    } ,
    warning : {
      light: "#FF8C00",
      main: "#F58700",
      dark: "#FF600A",
      contrastText: "rgba(0, 0, 0, 0.87)" ,
    } ,
    info : {
      light: '#00C9A6',
      main: '#00A388',
      dark: '#006655',
      contrastText: '#fff'
    },
    success : {
      light: '#00FFB3',
      main:'#00F5AB',
      dark: '#00B881',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    } ,
    action : {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus:"rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }

  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
         <HeaderCompounent/>
         <Main/>
      </ThemeProvider>

  );
}

export default App;
