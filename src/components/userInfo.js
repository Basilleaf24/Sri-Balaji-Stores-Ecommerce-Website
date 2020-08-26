import React , {useState} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Card, CardHeader, CardBody } from 'reactstrap';

function UserInfo () {
    const [isPassword, setPassword] = useState(false);
    const [isAddress, setAddress] = useState(false);

    function togglePassword() {
        
        setPassword(!isPassword);

    }
    function handleSubmit(e) {
        togglePassword();
        
        e.preventDefault();
    }

    function toggleAddress() {
        setAddress(!isAddress);
    }
    function submitHandler(e) {
        toggleAddress();
        e.preventDefault();
    }

    return(
        <div className='container'>
            <Card className='info-card'>
                <CardHeader className='info-head'>
                   
                        <h style={{fontSize:'35px'}}><strong>Customer Information</strong></h>
                       
                </CardHeader>
                <CardBody className='info-card-head'>
                    <Form>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Name</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4'>
                                <Input type='text' name='name'disabled='disabled' value='Hithaishi S'></Input>
                                </div>
                            </div>
                        </FormGroup>
                
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Contact Number</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4'>
                                    <Input type='text' name='name'disabled='disabled' value='8546939830'></Input>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Email Address</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4'>
                                    <Input type='text' name='name'disabled='disabled' value='hithaishigowda73328@gmail.com'></Input>
                                </div>
                            </div>
                        </FormGroup> 
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Password</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4'>
                                    <Input type='password' name='name' value='hithu'>Hithaishi S</Input>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-6  offset-4 col-sm-10  offset-sm-1'>
                                    <Button  className='info-button' onClick={togglePassword}>Change Password</Button>
                                </div>
                            </div>
                        </FormGroup>
                        
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4 offset-sm-1'>
                                    <Label htmlFor='name'  style={{fontSize:'20px'}}><strong>Address</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4'>
                                    <Input type='textarea' name='name' rows='10'>Hithaishi S</Input>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-6 offset-4 col-sm-10 offset-sm-1'>
                                    <Button className='info-button' onClick={toggleAddress}>Edit Address</Button>
                                </div>
                            </div>
                        </FormGroup>
                    
                
                    </Form>
                </CardBody>
            </Card>
            
            
            <Modal isOpen={isPassword} toggle={togglePassword}>
                <ModalHeader toggle={togglePassword}>
                    Change Password
                </ModalHeader>
                <ModalBody>
                   <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor='password'><strong>Current Password</strong></Label>
                            <Input type='password' id='password' name='password' placeholder='Current Password'></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='newpassword'><strong>New Password</strong></Label>
                            <Input type='password' id='newpassword' name='newpassword' placeholder='New Password'></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='repassword'><strong>Confirm Password</strong></Label>
                            <Input type='password' id='repassword' name='repassword' placeholder='Confirm Password'></Input>
                        </FormGroup>
                        <FormGroup className='offset-4'>
                            <Button type='submit' name='submit' id='submit' className='info-button btn-lg'> Submit </Button>
                        </FormGroup>
                   </Form>
                </ModalBody>
            </Modal>

            <Modal isOpen={isAddress} toggle={toggleAddress}>
                <ModalHeader toggle={toggleAddress}>Edit Address</ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label htmlFor='address'><strong>New Address</strong></Label>
                            <Input type='textarea' id='address' name='address'></Input>
                        </FormGroup>
                        <FormGroup className='offset-4'>
                            <Button type='submit' name='submit' id='submit' className='info-button btn-lg'> Submit </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>

           
        </div>
    )
}

export default UserInfo;