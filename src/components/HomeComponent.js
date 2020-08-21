import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardSubtitle, CardBody,Jumbotron, Row,Form,Control} from 'reactstrap'
//import {Loading} from './LoadingComponent';
import Categ from './CategoryCourComponent'
import Footer from './FooterComponent'

//import logo from '/l1.png'


function Home()
{ 
    return(
        <>
        <div>
<Jumbotron className="jumbotron fluid"  >

   
<div className="container heading" >
    <div className="row ">
    <div className="offset-2 col-2 btn menu">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"90px"},{height:"90px"}}></img>

        </div>
        <div className="col-6 ">
     
        <p className="mb-20 mt-10" style={{fontSize:"300%"}}>Sri Balaji Stores</p>
        
        </div>
       
        </div>
        <Row>
<div className="col-4 col-sm-1 "><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"50px"},{height:"80px"}}/></div>

<div className="col-4 col-sm-8">
<Form>
<div class="form-group row">
                       
 <div class="col-sm-11">
<div className="row">
 <div className="col-12 "><input type="text" className="form-control" id="search" name="search" placeholder="Search for Products" /></div>
 <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"36px"},{height:"38px"}} id="searchicon"/>
 
 </div>
 </div>
 
 
</div>
</Form>





</div>
<div className="col-sm-2">
    <div className="btn menu" style={{fontSize:"20px"}}>
       
        <img  src={`${process.env.PUBLIC_URL}/images/login.png`} style={{width:"35px"},{height:"35px"}}></img>
        <span style={{color:"white"}}>Login/Signup</span>
    </div>

</div>
<div className="col-4 col-sm-1"><img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu" style={{width:"50px"},{height:"50px"}}/>price</div>
</Row>
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