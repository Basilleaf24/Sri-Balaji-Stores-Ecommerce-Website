import React,{useState} from 'react'

import {Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import {Link} from 'react-router-dom'

function Searchbar(props)
{
   
    const[isOpen,togglemodal]=useState(false)
  const[state,setsearch]=useState('');
  function handlemodal()
  {
    togglemodal(!isOpen)
  }
function  handleSubmit()
 {
   togglemodal(!isOpen)

 }
 function handleChange(e)
 {
     setsearch({...state,[e.target.name]:e.target.value}) 
 }
    return(
 <>
 
 <nav className="navbar fixed-top navbar-light bg-dark">
 <div className="col-3 col-sm-3 nav-item"><Link to={props.back}><span  className="fa fa-arrow-left fa-lg"></span></Link></div>
 <div className=" offset-7 col-2  offset-sm-8 col-sm-1 nav-item"><span onClick={togglemodal} className="fa fa-search fa-lg"></span></div>

    
   
</nav>
<div className="p-4 mb-3">

</div>

<div className='container'>
        <Modal isOpen ={isOpen} toggle={handlemodal} className="modal-modal-dialog-center">
            <ModalHeader className='modal-text search-modal' toggle={handlemodal} > 
           
                <div className="row">
            <div className=" offset-1 col-10"><h3 style={{textAlign:"center"}}> Search</h3></div>
            <div className="">
            <Form onSubmit={handleSubmit} className="offset-1">
                    <FormGroup>
                        <Label htmlFor='search'></Label>
                        <Input  type='search  form-control searchtextbox' name='search' id='search' placeholder="Search For Products" size="50" onChange={(e)=>(e)=>handleChange(e)}></Input> 
                    </FormGroup> 
                </Form>
               
                </div>
                <div className='searchbaricon'>
                <span className="fa fa-search fa-lg"></span>
                </div>
                </div>
                
            </ModalHeader>
        </Modal>
        </div>


</>
    )
}
export default Searchbar