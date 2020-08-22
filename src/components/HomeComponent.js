import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardSubtitle, CardBody,Jumbotron, Row,Form,Control} from 'reactstrap'
//import {Loading} from './LoadingComponent';
import Categ from './CategoryCourComponent'
import Footer from './FooterComponent'
import Item from './itemComponent'

import Carousel from "react-elastic-carousel";
function Home()
{ 
     
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return(
        <>
<nav className="navbar fixed-top navbar-light bg-dark">
  <a className="navbar-brand "><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"1.5rem"},{height:"1.5rem"}}/>
</a>

<ul className="navbar-nav">
      <li className="nav-item col-1 col-lg-1">
        <a className="nav-link" href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"2.7rem"},{height:"2.7rem"}}></img>
</a>
      </li>
         
      </ul>
<span className="nav-item col-7 col-lg-2" style={{fontSize:"1rem"}}>Sri Balaji Stores</span>
<form className="nav-item form-inline col-10 col-md-11 col-lg-8">
    <input type="text" className="form-control" placeholder="Search For Products" style={{width:"100%"}}/>
    <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"1rem"},{height:"1.5rem"}} id="searchicon"/>

    
  </form>
<img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu cart nav-item" style={{width:"2rem"},{height:"2rem"}}/>
</nav>
<div className="container">
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div>
        <Carousel breakPoints={breakPoints} style={{height:"300px"},{backgroundcolor:"orange"}} enableAutoPlay autoPlaySpeed={1500}>
          <img src={`${process.env.PUBLIC_URL}/images/surf.jpg`} className="d-block w-100" style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          
        </Carousel>
        
         </div>
         </div>
<div>
<Item/>
</div>
<div>
<Categ/>
</div>
<div>
<Footer/>
</div>

</>
    )
}


export default Home