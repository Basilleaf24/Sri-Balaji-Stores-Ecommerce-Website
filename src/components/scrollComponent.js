import React from 'react';
import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle, Row, Badge} from 'reactstrap'
import data from '../shared/data1'
import ScrollMenu from 'react-horizontal-scrolling-menu';

 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 

function RenderItem({product})
{
  
return(
  <Card>
  <span><Badge>{Math.ceil((1-(product.sp/product.mrp))*100)} %OFF</Badge></span>
    <CardImg  className="cardimg" top width="100%" src={product.image} style={{height:"12rem"}} />
    <CardBody>
<CardTitle style={{fontSize:"1rem"},{textAlign:"center"}}><strong><img src={`${process.env.PUBLIC_URL}/images/rupee.png`}style={{height:"0.8rem"}}></img>{product.sp}</strong><strong><strike style={{fontSize:"0.7rem"},{padding:"3px"},{color:"grey"}}>{product.mrp}</strike></strong></CardTitle>
<CardSubtitle style={{fontSize:"0.7rem"},{textAlign:"center"}}><strong >{product.name}</strong><strong style={{margin:"0.5rem"}}>{product.qty}</strong></CardSubtitle>

      <p><button className=" btn cartbutton">-</button><span style={{fontSize:"0.7rem"}}><b>Add to Cart</b></span><button className="cartbutton btn">+</button></p>
    </CardBody>
  </Card>)
}

function ScrollItem()
  {
    const items=data.products.map((item)=>
    {
      return(
        
        <div key={item.id} className="itemsscroll">
          <RenderItem product={item}/>
           </div>
           
        )

    })
   /*<div className="container" style={{minHeight:"300px"}}>
    <div className="row">
   
     <div className="box col-12">
   
     {items}
     
     </div>

   </div>
 </div>*/
 return(
  
  <div>
   <ScrollMenu  classname="scrollmenu"data={items}   
          transition={15} inertiaScrollingSlowdown={2} />
  </div>






 
     
   
  )
 }
  export default ScrollItem
   