import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardSubtitle, CardBody,Jumbotron, Row,Form,Control,CarouselCaption,CarouselControl,CarouselItem} from 'reactstrap'

import styled from'styled-components'
import Carousel from "react-elastic-carousel";


function Categ()
{

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
      
    return(
    <>
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
    </>
  );
}
            

        

export default Categ