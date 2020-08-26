import React, {useState} from 'react';
//import { Link} from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, FormGroup, Label, Input} from 'reactstrap';

function PaymentComponent(props)
{
    const checkoutHandler = () => {
        props.history.push("/delivery");
      }
    const [cardnumber, setCardNumber] = useState('');
    const [cardname , setCardName] = useState('');
    const [date , setExpiry] = useState('');
    const [cvv , setCvv] = useState('');
    const [isModalOpen , setToggle] = useState(false);
    const [isinfoOpen,setInfo]=useState(false);

    const [inputField, setInputField] = useState('');

    const[state,setstate]=useState({cardnumber:'', cardname:'', date:'', cvv:'', inputField:''});
    const[isSubmit,setSubmit] = useState(false);

    function handleChange(e)
     {
         setstate({...state,[e.target.name]:e.target.value}) // while updating the state when using multiple values set state creates a new value so to prevent it 
         // from removing the previously stored value we have to copy all values of the past state and then update it.
     }  


   function toggleModal(prevState) {
       setToggle(!isModalOpen)
   } 

   function submitHandler(e) {
       toggleModal();
       setInfo(true);
       //<Link to={redirect === '/'? 'infoForm' :  "infoForm?redirect=" + redirect}></Link>
      //<InfoForm/>
       e.preventDefault();

   }
  
    return(
        <div>
        <div className='container'>
        <Modal isOpen = {isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal} className='modal-text'> <strong>CARD-DETAILS</strong> </ModalHeader>
            <ModalBody>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label htmlFor='cardnumber'><strong>Card Number</strong> </Label>
                        <Input type='cardnumber' name='cardnumber' id='cardnumber' placeholder='Enter 16 digit card number'  onChange= {(e)=> setCardNumber(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='text'> <strong>Name on Card</strong></Label>
                        <Input type='cardname' name='cardname' id='cardname' placeholder='Enter your name as on card' onChange={(e)=> setCardName(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='date'> <strong>Card Expiry</strong></Label>
                        <Input type='date' name='date' id='date' placeholder='Enter card expiry date' onChange={(e)=> setExpiry(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='number'><strong>CVV</strong> </Label>
                        <Input type='cvv' name='cvv' id='cvv' placeholder='Enter 3 digit CVV'  onChange= {(e)=> setCvv(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className='row'>
                        <Button className='col-10 col-sm-6 offset-sm-3' type='submit' value='submit' color='primary'>Proceed to Pay</Button>
                    </FormGroup>                   
                </Form>
            </ModalBody>
        </Modal>
        </div>

        <div className="container">  
            <div className="row row-content">
                <div className="col-sm-6 align-items-center justify-content-between">
                <div className="allpageheader">
                    <h1 className="ml-4" style={{marginBottom:"20px"}}>Payment</h1>
                </div>
                    <form>
                    <div className="payform flex-container">
                        <div className="col-sm-6 ml-2 flex-child">
                            <input type="radio" id="paytm" name="radio" value="paytm"/>
                            <img src="/images/paytm.png" className="payicons" alt="payicons"></img>
                            <label for="paytm">Paytm Wallet</label><br></br>
                        <br></br>
                            <input type="radio" id="phonepe" name="radio" value="phonepe"/>
                            <img src="/images/phonepe.png" className="payicons" alt="payicons"></img>
                            <label for="phonepe">PhonePe Wallet</label><br></br>
                        <br></br>
                            <input type="radio" id="gpay" name="radio" value="gpay"/>
                            <img src="/images/gpay.png" className="payicons" alt="payicons"></img>
                            <label for="gpay">Google Pay</label><br></br>
                        <br></br>
                            <input type="radio" id="upi" name="radio" value="upi"/>
                            <img src="/images/upi.png" className="payicons" alt="payicons"></img>
                            <label for="upi">UPI</label><br></br>
                        </div>
                        <div className="col-sm-6 ml-2 flex-child">
                            <input type="radio" id="sodexo" name="radio" value="sodexo"/>
                            <img src="/images/sodexo.png" className="payicons" alt="payicons"></img>
                            <label for="sodexo">Sodexo</label><br></br>
                        <br></br>                   
                            <input type="radio" id="creditcard" name="radio" value="creditcard" onClick={toggleModal}/>                           
                            <img src="/images/creditcard.png" className="payicons" alt="payicons"></img>                           
                            <label for="creditcard">Credit Card</label><br></br>                                                                            
                        <br></br>                       
                            <input type="radio" id="debitcard" name="radio" value="debitcard" onClick={toggleModal}/>
                            <img src="/images/debitcard.png" className="payicons" alt="payicons"></img>                            
                            <label for="debitcard">Debit Card</label><br></br>                            
                        <br></br>
                            <input type="radio" id="cash" name="radio" value="cash"/>
                            <img src="/images/cash.png" className="payicons" alt="payicons"></img>
                            <label for="cash">Cashon Delivery</label><br></br>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-sm">
                <div className="card">
                    <h3 className="card-header text-black summary">Order Summary</h3>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Have a coupon code?</dt>
                            <dd className="row-6">
                                <p><input type="textbox" className="couponinput" placeholder="Code" onChange={(e)=> setInputField(e.target.value)}/>
                                <button type="submit" class="themebutton">Apply</button></p>
                            </dd>
                            <dt className="col-6"></dt>
                            <dd className="col-6"></dd>
                            <dt className="col-6">Cart value</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>200</dd>
                            <dt className="col-6"></dt>
                            <dd className="col-6"></dd>
                            <dt className="col-6">Delivery charges</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>50</dd>
                            <dt className="col-6"></dt>
                            <dd className="col-6"></dd>
                            <dt className="col-6">Coupon discount(if coupon applied)</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>20</dd>
                            <dt className="col-6"></dt>
                            <dd className="col-6"></dd>
                            <dt className="col-6">Total Payable Amount</dt>
                            <dd className="col-6"><img src="/images/rupee.png" className="icons" alt="icons"></img>230</dd>
                        </dl>
                    </div>                    
                </div>
                <br></br>
                <button onClick={checkoutHandler} className="delthemebutton btn-lg" style={{width:"100%"}}>
                    Proceed to Pay
                </button>                
            </div>
            </div>           
        </div>
        </div>
    );
}

export default PaymentComponent;