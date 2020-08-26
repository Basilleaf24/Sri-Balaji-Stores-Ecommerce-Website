import React from 'react';
import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle, Row, Badge} from 'reactstrap'
import {PRODUCTS} from '../shared/data'

function RenderItem({product})
{
  
return(
  <Card className=' prod-card' >
  <span style={{textAlign:'left'}}><Badge style={{marginLeft:'8px'}} className='bg-primary'>{Math.ceil((1-(product.sp/product.mrp))*100)} %OFF</Badge></span>
    <CardImg  className="prod-img" width="100%" src={product.image}  />
    <CardBody>
<CardTitle style={{fontSize:"1rem"},{textAlign:"center"}}><strong><span className='fa fa-rupee'></span>
  {product.sp}</strong><strong><strike style={{fontSize:"0.7rem"},{padding:"3px"},{color:"grey"}}>{product.mrp}</strike></strong></CardTitle>
<CardSubtitle style={{fontSize:"0.7rem"},{textAlign:"center"}}><strong >{product.name}</strong><strong style={{margin:"0.5rem"}}>{product.qty}</strong></CardSubtitle>

      <p><button className="cartbutton">-</button><span style={{fontSize:"0.7rem"}}><b>Add to Cart</b></span><button className="cartbutton">+</button></p>
    </CardBody>
  </Card>)
}

function Item(props)
  {
    const items=PRODUCTS.map((item)=>
    {
      return(
        
        <div key={item.id} className="col-10 offset-1 offset-sm-0 col-md-4 col-lg-3">
          <RenderItem product={item}/>
           </div>
           
        )

    })
  
 return(
   <div className="container ">
   <div className="row">
      {items}
      </div>
      </div>
   
  )
 }
  export default Item
   