import React from 'react';
import Home from './HomeComponent'

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

function Main()
{
    return(
        <Switch>
           <Route path="/home" component={Home}/>
           
           
        </Switch>
        
    )
}
export default Main 