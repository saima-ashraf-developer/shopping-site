import Layout from './components/Layout';
import Shopping from './components/Drawer';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {grey, pink, purple} from '@material-ui/core/colors';

function App() {
  const theme = createMuiTheme({
    palette:{
      primary:{
        main: '#ffb74d',
        contrastText: '#fff'
      },
      secondary: purple,
      action:{
        active:'#ffb74d'
      },
      
    },
    typography:{
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Layout>
        <Shopping />
      </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
