import React from 'react';
import Home from './HomeComponent'

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle, Row, Badge,Jumbotron,Form} from 'reactstrap'
import data from '../shared/data'
import Head from './NewHead'
import SearchTest from './SearchTest'
function Main()
{
    
    return(
        <>
       <Switch>
            <Route path="/home" component={Home}/>
            <Route path='/search' component={SearchTest}/>
           <Route path='/' component={Head}/>
          
            
    </Switch>
       </> 
    )
}
export default Main 