import React ,{useState} from 'react'
import { func } from 'prop-types';

import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'

function Admin()
{
  const[isOpen1,togglemodal1]=useState(false)
  const[state1,setstate1]=useState({productid:'', productname:'', mrp:'',sp:'',category:'',subcategory:'' });
  function handlemodal1()
  {
    togglemodal1(!isOpen1)
  }
function  handleSubmit1()
 {
   togglemodal1(!isOpen1)

 }
 function handleChange1(e)
 {
     setstate1({...state1,[e.target.name]:e.target.value}) 
 }

 const[isOpen2,togglemodal2]=useState(false)
  const[state2,setstate2]=useState({productid:'', productname:'', mrp:'',sp:'',category:'',subcategory:'' });
  function handlemodal2()
  {
    togglemodal2(!isOpen2)
  }
function  handleSubmit2()
 {
   togglemodal2(!isOpen2)

 }
 function handleChange2(e)
 {
     setstate2({...state2,[e.target.name]:e.target.value}) 
 }

    const data=[
        
        {'OrderId':100,'Name': 'Suhas',  'Address': 'Rt Nagar','Phone No':9844142094,'email':'gpsuhas20@gmail.com',Amount: 4500,'Delivery Status':'Placed'},
        {'OrderId':100,'Name': 'Suhas',  'Address': 'Rt Nagar','Phone No':9844142094,'email':'gpsuhas20@gmail.com',Amount: 4500,'Delivery Status':'Placed'},
        {'OrderId':100,'Name': 'Suhas',  'Address': 'Rt Nagar','Phone No':9844142094,'email':'gpsuhas20@gmail.com',Amount: 4500,'Delivery Status':'Placed'},
        {'OrderId':100,'Name': 'Suhas',  'Address': 'Rt Nagar','Phone No':9844142094,'email':'gpsuhas20@gmail.com',Amount: 4500,'Delivery Status':'Placed'},
        {'OrderId':100,'Name': 'Suhas',  'Address': 'Rt Nagar','Phone No':9844142094,'email':'gpsuhas20@gmail.com',Amount: 4500,'Delivery Status':'Placed'},

      
    ]
   
   
   const  getKeys = function(){
        return Object.keys(data[0]);
        }
      //  console.log(getKeys())
// returns the keys

// when u map the array it will be in the form of value,index
        const getHeader = function(){
            var keys = getKeys();
            keys.push('Order Details') 
            // adding a new column header
            return keys.map((key)=>{
               // console.log("index"+index+"key"+key)
            return <th key={key}>{key.toUpperCase()}</th>
            })
            }
          
            var x=1;
           function handleClick(user)// on Clicking we are getting the data
           {
             console.log(user)
           } 
           const RenderRow = (props) =>{
             // onclicking the button send the props
             const ht=<span><button onClick={(e)=>handleClick(props.data)}>
               
               
               
               View Details</button></span>
            var k= props.keys.map((key, index)=>{
           
            return <td  key={props.data[key]}>{props.data[key]}</td> })
            k.push( <td  key={x}>{ht}</td>) // adding the values to the header
            return k
           
           }
           const getRowsData = function(){
            var items = data;
            var keys = getKeys();
            return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
            })
            }
        

        return (
          <>
          
          <nav className="navbar navbar-dark bg-dark mb p-2">

            <div className="container"><div className="col-9 col-sm-11"><h4 style={{textAlign:"center"}}>Sri Balaji Stores</h4></div>
            <div className="col-3 col-sm-1"><span className="fa fa-sign-out fa-lg btn-white" style={{cursor:"pointer"}} ></span>Logout</div>
            
            </div>
          </nav>
          <div className="bg-primary" style={{color:"white"}}>
            <div className="col-11">
           
            <h2 style={{textAlign:"center"}}> <span className="fa fa-cog"></span> DashBoard</h2>
            </div>
          </div>


          <section id="actions" className="py-4 mb-4" style={{color:"black"}}>
    <div className="container  text-align-center">
      <div className="row justify-content-center">
        <div className=" offset-1  col-7 offset-md-0 col-md-3">
          <a href="#" class="btn  btn-primary admin-btn  mb-2 p-1 btn-block"  onClick={togglemodal1}>
            <i class="fa fa-plus"></i> Add Product
          </a>
        </div>
        <div className=" offset-1  col-7 offset-md-0  col-md-3">
          <a href="#" class="btn admin-btn  btn-success   mb-2 p-1 btn-block" onClick={togglemodal2}>
            <i className="fa fa-edit"></i> Edit Product Details
          </a>
        </div>
        <div className=" offset-1   col-7  offset-md-0 col-md-3">
          <a href="/useradmin" className="btn  btn-warning  admin-btn p-1 btn-block">
            <i className="fa fa-users"></i> Users
          </a>
        </div>
      </div>
    </div>
  </section>



{/* modal for add product*/}
  <div className='container'>
        <Modal isOpen ={isOpen1} toggle={handlemodal1}>
            <ModalHeader className='modal-text' toggle={handlemodal1} > <strong>ADD PRODUCT</strong> </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit1}>
                    <FormGroup>
                        <Label htmlFor='productname'><strong>Product Name</strong> </Label>
                        <Input type='text' name='productname' id='productname' placeholder='Product-Name'  onChange= {(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='productid'> <strong>PRODUCT-ID</strong></Label>
                        <Input type='text' name='productid' id='productid' placeholder="Product-Id" onChange={(e)=>(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='mrp'> <strong>MRP</strong></Label>
                        <Input type='text' name='mrp' id='mrp' placeholder='MRP' onChange={(e)=>(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='sp'> <strong>SELLING PRICE</strong></Label>
                        <Input type='text' name='sp' id='sp' placeholder='SP' onChange={(e)=>(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='quantity'> <strong>QUANTITY</strong></Label>
                        <Input type='text' name='quantity' id='quantity' placeholder='QUANTITY' onChange={(e)=>(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='category'> <strong>CATEGORY</strong></Label>
                        <Input type='text' name='category' id='category' placeholder='CATEGORY' onChange={(e)=>(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='subcategory'> <strong>SUB CATEGORY</strong></Label>
                        <Input type='text' name='subcategory' id='ubcategory' placeholder='SUB-CATEGORY' onChange={(e)=>(e)=>handleChange1(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='uploadpic'> <strong>UPLOAD IMAGE</strong></Label>
                        <Input type='file' name='uploadpic' id='uploadpic' placeholder='UPLOAD-IMAGE'></Input>
                    </FormGroup>
                    <FormGroup className='offset-3  col-8  offset-sm-4 col-sm-8 '>
                        <Button  className="p-2" type='submit' value='submit' color='primary'><span className='fa fa-paper-plus fa-lg' ></span>ADD PRODUCT</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </div>
        
{/*Modal for edit Product*/}
<div className='container'>
        <Modal isOpen ={isOpen2} toggle={handlemodal2} className="modal-modal-dialog-center">
            <ModalHeader className='modal-text' toggle={handlemodal2} > <strong>EDIT PRODUCT DETAILS</strong> </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit2}>
                    <FormGroup>
                        <Label htmlFor='productid'> <strong>PRODUCT-ID</strong></Label>
                        <Input type='text' name='productid' id='productid' placeholder="Product-Id" onChange={(e)=>(e)=>handleChange2(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='mrp'> <strong>MRP</strong></Label>
                        <Input type='text' name='mrp' id='mrp' placeholder='MRP' onChange={(e)=>(e)=>handleChange2(e)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='sp'> <strong>SELLING PRICE</strong></Label>
                        <Input type='text' name='sp' id='sp' placeholder='SP' onChange={(e)=>(e)=>handleChange2(e)}></Input>
                    </FormGroup>
                    <FormGroup className='offset-2  col-8  offset-sm-3 col-sm-8 '>
                        <Button  className="p-2" type='submit' value='submit' color='primary'><span className='fa fa-paper-plus fa-lg' ></span>EDIT PRODUCT DETAILS</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </div>



          <div className="table table-striped table-bordered container table-hover table-responsive">
            <table className="m-auto">
            <thead className="thead-dark">
            <tr>{getHeader()}</tr>
            </thead>
            <tbody>
            {getRowsData()}
            </tbody>
            </table>
            </div>

            <footer id="main-footer" class="bg-dark text-white mt-5 p-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="lead text-center">
            Copyright &copy;
            <span id="year">2020  </span>
               Sri Balaji Stores
          </p>
        </div>
      </div>
    </div>
  </footer>
            
          </>
            
            );
}
export default Admin
/*  */