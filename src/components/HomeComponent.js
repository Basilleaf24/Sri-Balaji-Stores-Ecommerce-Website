import React,{useState}from 'react';
import {Card,CardImg,CardText,CardTitle,CardSubtitle, CardBody,Jumbotron, Row,Form,Control} from 'reactstrap'
//import {Loading} from './LoadingComponent';
import Categ from './CategoryCourComponent'
import Footer from './FooterComponent'
import Item from './itemComponent'
import { slide as Menu } from 'react-burger-menu'
import Carousel from "react-elastic-carousel";
import ScrollItem from './scrollComponent'
import CategScroll from './CategoryScroll'
import HomeHeader from './HomeHeader'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];




function Home()
{ 
  const [isOpen, setSide] = useState(false)
  function handleClick()
  {
    setSide(!isOpen)
  }
  function showSettings (event) {
    event.preventDefault();
    
  }

   
    return(
        <>
        <HomeHeader/>
    
<div  className="categheight mt-4">

           <CategScroll/>
           </div>


<div className="container mt-5">
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div>
        <Carousel breakPoints={breakPoints} style={{height:"300px"},{backgroundcolor:"orange"}} enableAutoPlay autoPlaySpeed={1500}>
          <img src={`${process.env.PUBLIC_URL}/images/homescreen1.png`} className="d-block w-100" style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/homescreen4.png`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          <img src={`${process.env.PUBLIC_URL}/images/surf2.jpg`} className="d-block w-100"style={{height:"300px"}}></img>
          
        </Carousel>
        
         </div>
         </div>

         

           
<ScrollItem/>
<div className="container">
<Item/>
</div>

<div>

</div>
<div>
<Footer/>
</div>

</>
    )
}


export default Home