import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardSubtitle, CardBody,Jumbotron, Row,Form,Control} from 'reactstrap'
//import {Loading} from './LoadingComponent';
import Categ from './CategoryCourComponent'
import Footer from './FooterComponent'
import Item from './itemComponent'


function Home()
{ 
    return(
        <>
        <div>
<Jumbotron className="jumbotron jumbo">

   
<div className=" container heading justify-content-center" >
    <div className="row no-gutters ">

    <div className=" col-1 col-sm-2"><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"1.5rem"},{height:"1.5rem"}}/></div>
    <div className=" col-1 col-sm-2"></div>
    <div className=" col-1 col-sm-1 btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"2.7rem"},{height:"2.7rem"}}></img>
    
    </div>
 
          <div className=" offset-1 col-8 offset-sm-0 col-sm-5">
       
          <p style={{fontSize:"1.7rem"}}>Sri Balaji Stores</p>
      
      </div>
    
          
         
       
</div>        
      
<div className="row">

<div className=" col-7 offset-sm-1 col-sm-8 ">
<Form>

 

 <input type="text" className="form-control" id="search" name="search" placeholder="Search for Products" />
 <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"1rem"},{height:"1.5rem"}} id="searchicon"/>
 
 
 
 
 
</Form>
</div>
<div className="  col-2 col-sm-2 btn menu login" style={{fontSize:".8rem"}}>
       
        <img  src={`${process.env.PUBLIC_URL}/images/login.png`} style={{width:"1rem"},{height:"1rem"}}></img>
        <p style={{color:"white"}}>Signup</p>
    </div>
<div className=" col-2 col-sm-1"><img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu cart" style={{width:"2rem"},{height:"2rem"}}/></div>



</div>
</div>
</Jumbotron>
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