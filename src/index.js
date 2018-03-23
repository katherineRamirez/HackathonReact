// dependencias
import React from 'react';
import {render} from 'react-dom';


// routes
import Routing from './Routing.js';


// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Assets
import './index.css';


render(<Routing />, document.getElementById('root'));
registerServiceWorker();
