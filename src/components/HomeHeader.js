import React, { useState, useEffect } from 'react';
import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'
function HomeHeader()
{
    const [isOpen, setSide] = useState(false)
    function handleClick()
    {
      setSide(!isOpen)
    }
    function showSettings (event) {
      event.preventDefault();}
// login modals

const [email, setEmail] = useState('');
const [password , setPassword] = useState('');
const [isModalOpen , setToggle] = useState(false);
const [isinfoOpen,setInfo]=useState(false)
const[state,setstate]=useState({name:'', phone:'', address:'' });

function handleChange(e)
{
    setstate({...state,[e.target.name]:e.target.value}) 
}
function submithandle(e)
{
    e.preventDefault();
    const info=
    {
        name: state.name,
        phone:state.phone,
        address: state.address
       
    }
    setInfo(!isinfoOpen)
}
function handleSubmit(e) {
 
  setInfo(!isinfoOpen)
}



function toggleModal() {
  setSide(false)
  setToggle(!isModalOpen)
} 

function submitHandler(e) {
  toggleModal();
  setInfo(true);
  e.preventDefault();

}
    return(
        <>
        <div>
    <Menu className="sidebar" isOpen={ isOpen } customBurgerIcon={false}>
    <div className="container">
      <div className="row">
     
   <div className="col-12 navtop"><div className="row"><div className="offset-1 col-7"><p onClick={toggleModal} style={{cursor:"pointer"}}><span className="fa fa-sign-in"></span> SignIn</p></div><p onClick={handleClick} className=" col-2 fa fa-arrow-left "style={{cursor:"pointer"}}></p></div></div>
   <div className="side-items">
   <div className="col-12 container"><a href ='/home'className="menu-item row"><span className="fa fa-home fa-lg offset-1 offset-sm-2  offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2  col-7 col-sm-6">Home</span></a></div> 
   <div className="col-12 container" onClick={()=>setSide(false)}><a href ='#accordian'className="menu-item row"><span className="fa fa-th-large fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> Categories</span></a></div> 
   <div className="col-12 container"><a href ='/myorders'className="menu-item row"><span className="fa fa-th-list fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6">  MyOrders</span></a></div> 
   <div className="col-12 container"><a href ='/myaccount'className="menu-item row"><span className="fa fa-user fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> MyAccount</span></a></div> 
   <div className="col-12 container"><a href ='/aboutus'className="menu-item row"><span className="fa fa-info fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> AboutUs</span></a></div> 
   <div className="col-12 container"><a href ='/developedby'className="menu-item row"><span className="fa fa-connectdevelop fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> DevelopedBy</span></a></div> 
   <div className="col-12 container"><a href ='/logout'className="menu-item row"><span className="fa fa-sign-out fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> LogOut</span></a></div> 

 
   </div>
 </div>
 </div>
</Menu>
  

     <nav className="navbar fixed-top navbar-light bg-dark">
<a className="navbar-brand" onClick={handleClick}><span className="fa fa-bars fa-lg navicon" style={{color:"white"}}></span>

</a>

<ul className="navbar-nav">
<li className="nav-item col-1 col-lg-1">
 <a className="nav-link" href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"2.7rem"},{height:"2.7rem"}}></img>
</a>
</li>
  
</ul>
<span className="nav-item col-7 col-lg-2" style={{fontSize:"1rem"}}>Sri Balaji Stores</span>
<form className="nav-item form-inline col-10 col-md-11 col-lg-8">
<input type="text" className="form-control" placeholder="Search For Products" style={{width:"100%"}}/>
<img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"1rem"},{height:"1.5rem"}} id="searchicon"/>


</form>
<img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu cart nav-item" style={{width:"2rem"},{height:"2rem"}}/>
</nav>
<div className="container spacingforheader"> 
<div className="row">
    <div className="col-12">bye</div>
    <div className="col-12">        
    ..
    </div>
    <div className="col-12"></div>
    <div className="col-12"></div><div className="col-12"></div>
  
</div>
</div>


<div className="container">
 <Modal isOpen = {isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal} className='modal-text'> <strong>SIGN-IN</strong> </ModalHeader>
            <ModalBody>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label htmlFor='email'><strong> Email</strong> </Label>
                        <Input type='email' name='email' id='email' placeholder='Email'  onChange= {(e)=> setEmail(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'> <strong>Password</strong></Label>
                        <Input type='password' name='password' id='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='repassword'> <strong>Confirm Password</strong></Label>
                        <Input type='password' name='repassword' id='repassword' placeholder=' Confirm Password' onChange={(e)=> setPassword(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className='row'>
                        <Button className='col-10 col-sm-6 offset-sm-3' type='submit' value='submit' color='primary'><span className='fa fa-paper-plane fa-lg' ></span>  Submit </Button>
                    </FormGroup>
                    <FormGroup className='row'>
                        <Button className='col-10 col-sm-6 offset-sm-3' type='submit' value='submit' color='danger'> <span className="fa fa-google fa-lg" ></span>   Sign-In with Google</Button>
                    </FormGroup>
                    <FormGroup className='row'>
                        <Button className='col-10 col-sm-6 offset-sm-3' type='submit' value='submit' color='primary'> <span className="fa fa-facebook fa-lg" ></span>   Sign-In with facebook</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </div>
        

      <div className='container'>
        <Modal isOpen={isinfoOpen} toggle={handleSubmit} >
                <ModalHeader toggle={handleSubmit}><strong>Customer Information</strong></ModalHeader>
                <ModalBody>
                    <Form onSubmit={submithandle}>
                        <FormGroup>
                            <Label htmlFor='name'><strong> Name</strong> </Label>
                            <Input type="text" name="name" value={state.name} onChange={(e)=>handleChange(e)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='phone'><strong> Contact Number</strong> </Label>
                            <Input type="number" name="phone" value={state.phone} onChange={(e)=>handleChange(e)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='address'><strong>Address</strong>  </Label>
                            <Input type='textarea' name='address' value={state.address} onChange={(e)=>handleChange(e)}/>
                        </FormGroup>
                        <FormGroup className='row'>
                            <Button className='col-10 col-sm-6 offset-sm-3' type='submit' value='submit'> Submit </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
    </div>




</div>
</>)
}

export default HomeHeader
