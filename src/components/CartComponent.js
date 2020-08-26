import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle, Row, Badge} from 'reactstrap'
import data from '../shared/datap';

function CartComponent(props)
{
    const checkoutHandler = () => {
        props.history.push("/delivery");
      }
    return(
        <div className="container">
        <div className="row row-content">
            <div className="col-sm-6 align-items-center justify-content-between">
                <div className="allpageheader">
                    <h1><img src="/images/mycart.png" className="icons ml-2" alt="icons"></img> My Cart</h1>
                </div>
                <br/>
                <div className="products">
                {
                data.products.map(product =>                
                    <Card className="card">
                        <div className="row no-gutters">
                            <div className="col-sm-5">
                            <span style={{textAlign:'left'}}><Badge style={{marginLeft:'8px'}} className='bg-primary'>{Math.ceil((1-(product.sp/product.mrp))*100)} %OFF</Badge></span>
                                <img className="prod-img mt-4" src={product.image}/>
                            </div>
                            <div className="col-sm-7">
                                <CardBody className="card-body">  
                                    <CardTitle style={{fontSize:"0.5em"},{textAlign:"center"}}><strong><img src="/images/rupee.png" className="icons" alt="icons"></img>
                                    {product.sp}</strong><strong><strike style={{fontSize:"0.5em"},{padding:"3px"},{color:"grey"}}>{product.mrp}</strike></strong><strong>x{product.qty}</strong></CardTitle>                          
                                    <CardSubtitle style={{fontSize:"0.5em"},{textAlign:"center"}}><strong >{product.name}</strong>                                                                 
                                    <p><button className="cartbutton">-</button><span style={{fontSize:"0.7rem"}}><b>Add to Cart</b></span><button className="cartbutton">+</button></p>
                                    <Button onClick={checkoutHandler} className="removebutton btn-lg">
                                        <img src="/images/deletebin.png" className="icons" alt="icons"></img>
                                        Remove
                                    </Button>
                                    </CardSubtitle>
                                </CardBody>
                            </div>
                        </div>                       
                    </Card>                      
                    
                )
                }   
                          
                <hr></hr>
            </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <h3 className="card-header text-black summary">Order Summary</h3>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Total Amount</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>200</dd>
                            <dt className="col-6"></dt>
                            <dd className="col-6"></dd>
                            <dt className="col-6">Delivery charges</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>50</dd>
                            <dt className="col-6"></dt>
                            <dd className="col-6"></dd>
                            <dt className="col-6">Total Payable Amount</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>250</dd>
                        </dl>
                    </div>                    
                </div>
                <br></br>
                <button onClick={checkoutHandler} className="themebutton col-sm" style={{height:"50px"}}>
                    Proceed to Checkout
                </button>                
            </div>
         </div>
    </div>
    );
}

export default CartComponent;