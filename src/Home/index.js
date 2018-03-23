import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../../src/components/Header';
import '../App.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  },
  appBar: {
    height: 50,
  },
});
class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Header/>
      <main className= 'main'>

        <ul>
          <li className='button'>
            <Link className='link' to="/google-maps-stateful">Ver Recorrido</Link>
          </li>

        </ul>
      </main>
        </MuiThemeProvider>
    );
  }
}


export default Home;
