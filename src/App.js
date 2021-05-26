import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import Layout from './components/Layout';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {grey, pink, purple} from '@material-ui/core/colors';
import Loginpage from './components/Loginpage';


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
        <Router>
           <Switch>
             <Route exact path='/' component={Layout} />
          <Route path='/pricing-page' component={Pricing}/>
          <Route path='/login-page' component={Loginpage} />
        </Switch>
       
      </Router>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
