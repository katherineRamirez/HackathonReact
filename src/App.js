import React, { Component } from 'react';
import ContainerMap from './components/ContainerMap';
import Header from './components/Header';
import Footer from './components/Footer';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className= 'App'>
          <Header/>
          <ContainerMap></ContainerMap>
          <Footer/>
        </div>
    );
  }
}

export default App;
