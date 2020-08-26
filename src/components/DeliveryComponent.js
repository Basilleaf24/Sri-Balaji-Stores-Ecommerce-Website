import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Button, ButtonGroup, Card, ToggleButton} from 'react-bootstrap'
import data from '../shared/datap';

function DeliveryComponent(props)
{
    const checkoutHandler = () => {
        props.history.push("/payment");
      }
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '9AM - 10AM', value: '1' , style: '1em'},
    { name: '1PM - 3 PM', value: '2' , style: '1em'},
    { name: '7PM - 8PM', value: '3' , style: '1em'},
  ];

    return(
    <div className="container">  
        <div className="row row-content">
            <div className="col-sm-6 align-items-center justify-content-between">
                <div className="allpageheader">
                    <h1><img src="/images/delivery.png" className="icons ml-2 mb-2" alt="icons"></img> Delivery</h1>
                </div>
                <div className="card">
                        <h3 className="card-header text-black allpageheader">HOME<button onClick={checkoutHandler} className="themebutton mt-2 float-right">
                        Change
                        </button></h3>
                        <div className="card-body">
                            <dl className="row">
                            Address Info
                            </dl>
                        </div>
                </div>
                <br></br>
                <div>
                    <img src="/images/market.jpg" className="marketimg" alt="marketimg"></img>
                </div>
            </div>
            <div className="col-sm">
                        <h3>Choose your slot <img src="/images/slot.png" className="slotimg" alt="slotimg"></img></h3>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header className="accCard">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="linkcolor">
                                        Monday 
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="accCardBody">                                    
                                    <ButtonGroup toggle>
                                        {radios.map((radio, idx) => (
                                        <ToggleButton className="accButton"
                                            key={idx}
                                            type="radio"
                                            variant="secondary"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accCard">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="linkcolor">
                                        Tuesday
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="accCardBody">
                                    <ButtonGroup toggle>
                                        {radios.map((radio, idx) => (
                                        <ToggleButton className="accButton"
                                            key={idx}
                                            type="radio"
                                            variant="secondary"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accCard">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2" className="linkcolor">
                                        Wednesday
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="accCardBody">
                                    <ButtonGroup toggle>
                                        {radios.map((radio, idx) => (
                                        <ToggleButton className="accButton"
                                            key={idx}
                                            type="radio"
                                            variant="secondary"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accCard">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3" className="linkcolor">
                                        Thursday
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="accCardBody">
                                    <ButtonGroup toggle>
                                        {radios.map((radio, idx) => (
                                        <ToggleButton className="accButton"
                                            key={idx}
                                            type="radio"
                                            variant="secondary"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>    
                            <br></br>
                        <button onClick={checkoutHandler} className="delthemebutton btn-lg" style={{width:"100%"}}>
                            Proceed to Payment
                        </button>                        
                        </Accordion>
                        
                        </div>
    
                    </div>       
    </div>                                              
    );
}

export default DeliveryComponent;