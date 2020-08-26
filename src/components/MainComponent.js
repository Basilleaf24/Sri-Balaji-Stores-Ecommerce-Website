import React from 'react';
import Home from './HomeComponent'
import Admin from './Admin'
import {Switch,Route,Redirect,withRouter, Router} from 'react-router-dom'
import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle, Row, Badge,Jumbotron,Form} from 'reactstrap'
import Developers from'./developers'
import Head from './NewHead'
import Groceries from './category-1';
import Beverage from './category-2';
import PersonalCare from './category-3';
import HouseHold from './category-4';
import Snacks from './category-5';
import SearchTest from './SearchTest'
import UserAdmin from './UsersAdmin'
import myOrders from './myOrders'
import UserInfo from './userInfo';
import Item from './products';
import Aboutus from './AboutUs'


import Cart from './CartComponent'
import Payment from './PaymentComponent'
import Delivery from './DeliveryComponent'
import OrderDetails from './ViewOrder'

function Main()
{
    
    return(
        <>
       <Switch>
            <Route path="/home" component={Home}/>
            <Route path='/search' component={SearchTest}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/useradmin' component={UserAdmin}/>
            <Route path='/developedby' component={Developers}/>
            <Route path='/myorders' component={myOrders}/>


            <Route exact path='/grocery' component={Groceries}/>
                    <Route exact path='/grocery/:prodId' component={Item}/>
                    <Route exact path='/beverages' component={Beverage} />
                    <Route exact path='/personalcare' component={PersonalCare} />
                    <Route exact path='/household' component={HouseHold} />
                    <Route exact path='/snacks' component={Snacks}/>
                    <Route exact path='/myaccount' component={UserInfo}></Route>
                    <Route exact path='/aboutus' component={Aboutus}></Route>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/payment' component={Payment}/>
                    <Route exact path='/delivery' component={Delivery}/>
                    <Route exact path='/orderdetails' component={OrderDetails}/>
           <Route path='/' component={Home}/>
          
            
    </Switch>
       </> 
    )
}
export default Main 