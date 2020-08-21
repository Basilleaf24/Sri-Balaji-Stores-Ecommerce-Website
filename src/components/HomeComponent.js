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

   
<div className=" container heading justify-content-center" >
    <div className="row no-gutters ">

    <div className=" col-1 col-sm-2"><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"4vw"},{height:"4vh"}}/></div>
    <div className=" col-1 col-sm-2"></div>
    <div className=" col-1 col-sm-1  btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"5vw"},{height:"5vh"}}></img>
    </div>
    <div className=" col-1 col-sm-1">
   

   </div>
          
        <div className="col-8 col-sm-6">
     
        <p style={{fontSize:"1.5rem"}}>Sri Balaji Stores</p>
        
        </div>
       
</div>        
      
<div className="row">

<div className=" col-7 offset-sm-1 col-sm-7 ">
<Form>

 

 <input type="text" className="form-control" id="search" name="search" placeholder="Search for Products" />
 <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"5vw"},{height:"5vh"}} id="searchicon"/>
 
 
 
 
 
</Form>
</div>
<div className="  col-2 col-sm-2 btn menu" style={{fontSize:".8rem"}}>
       
        <img  src={`${process.env.PUBLIC_URL}/images/login.png`} style={{width:"1rem"},{height:"1rem"}}></img>
        <p style={{color:"white"}}>Signup</p>
    </div>
<div className=" col-2 col-sm-2"><img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu" style={{width:"2rem"},{height:"2rem"}}/></div>



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