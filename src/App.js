import React, { Component } from 'react';
import Home from './components/HomeComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import "font-awesome/css/font-awesome.min.css"


import {BrowserRouter} from 'react-router-dom'
import Main from './components/MainComponent'
//import {Provider} from 'react-redux'
//import {ConfigureStore} from  './redux/configureStore'
//const store =ConfigureStore();

class App extends Component
{
  
  //passed our store instance into Provider as a prop, making it available to all of our other components.
  render()
  {
    return(
     // <Provider store={store}>
      <BrowserRouter>
        <div>
        <Main/>
        </div>
        </BrowserRouter>
       // </Provider>
    )
  }
}


export default App;
