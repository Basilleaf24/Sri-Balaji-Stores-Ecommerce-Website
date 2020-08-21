import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardSubtitle, CardBody,Jumbotron, Row,Form,Control} from 'reactstrap'
//import {Loading} from './LoadingComponent';
import Categ from './CategoryCourComponent'
import Footer from './FooterComponent'

//import logo from '/l1.png'


/*function Home()
{ 
    return(
        <>
        <div>
<Jumbotron className="jumbotron fluid"  >

   
<div className=" container heading justify-content-center  m-0 p-0" >
    <div className="row no-gutters ">
    <div className="col-lg-1 btn menu p-1">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"15vw"},{height:"15vh"}}></img>
    </div>
        <div className="offset-lg-4 col-lg-7">
     
        <p className="w-100"style={{fontSize:"7vh"}}>Sri Balaji Stores</p>
        
        </div>
       
        
      
<div className="col-lg-1"><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"8vw"},{height:"8vh"}}/></div>
<div className="order-lg-last col-lg-1"><img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu" style={{width:"7vw"},{height:"7vh"}}/>price</div>


<div className="col-lg-9 ">
<Form>

                       
 <div class="col-lg-12">
<div className="row">
 <div className="col-lg-12 "><input type="text" className="form-control" id="search" name="search" placeholder="Search for Products" /></div>
 <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"7vw"},{height:"7vh"}} id="searchicon"/>
 
 </div>
 </div>
 
 
</Form>
</div>
<div className="col-lg-1">
    <div className="btn menu" style={{fontSize:"2vh"}}>
       
        <img  src={`${process.env.PUBLIC_URL}/images/login.png`} style={{width:"8vw"},{height:"8vh"}}></img>
        <span style={{color:"white"}}>Login/Signup</span>
    </div>

</div>

</div>
</div>
</Jumbotron>
</div>
<div>
<Categ/>
</div>
<div>
<Footer/>
</div>
</>
    )
}*/

function Home()
{ 
    return(
        <>
        <div>
<Jumbotron className="jumbotron fluid"  >

   
<div className=" container-fluid heading justify-content-center" >
    <div className="row no-gutters ">
    <div className=" col-lg-2"><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"6vw"},{height:"6vh"}}/></div>
    <div className="col-lg-2"></div>
    <div className=" col-lg-1  btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"7vw"},{height:"7vh"}}></img>
    </div>
        <div className=" col-lg-6">
     
        <p className="w-100"style={{fontSize:"5vh"}}>Sri Balaji Stores</p>
        
        </div>
        <div className="col-lg-1">
    <div className="btn menu" style={{fontSize:"2vh"}}>
       
        <img  src={`${process.env.PUBLIC_URL}/images/login.png`} style={{width:"6vw"},{height:"6vh"}}></img>
        <span style={{color:"white"}}><strong>Login/Signup</strong></span>
    </div>

</div>
       
        
      


<div className="offset-lg-1 col-lg-9 ">
<Form>

 
<div className="row">
 <div className="col-lg-12 "><input type="text" className="form-control" id="search" name="search" placeholder="Search for Products" /></div>
 <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"7vw"},{height:"7vh"}} id="searchicon"/>
 
 
 </div>
 
 
</Form>
</div>
<div className="offset-lg-1 col-lg-1"><img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu" style={{width:"6vw"},{height:"6vh"}}/>price</div>



</div>
</div>
</Jumbotron>
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