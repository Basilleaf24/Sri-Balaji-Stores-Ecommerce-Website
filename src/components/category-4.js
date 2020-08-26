import React, { useState } from 'react';
import {HOUSEHOLD} from '../shared/householdItems';
import SearchBar from './searchbar'
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

function RenderItem ({item}) {
    return(
        <Card className='card'>
            <CardImg className='img' width='100%' src={item.image} alt={item.name}></CardImg>
            <CardBody>
            <CardText className='card-text'><strong>{item.name}</strong></CardText>
            </CardBody>
        </Card>
    );
}

const HouseHold = () => {
    const householdItems = HOUSEHOLD.map((item) => {
       
        return(
            <div key={item.id} className='col-12 col-sm-4 p-2'>
                <RenderItem item={item}/>
            </div>
        )
        
    });

    return(
        <>
        <SearchBar back={'/home'}/>
           <div style={{backgroundColor : '#EEEEEE'}}>
            <header className='jumbotron'>
                        <div className='container'>
                            <div className='row '>
                            <div className='col-5 col-sm-3'>
                                    <img  className='images' src={`${process.env.PUBLIC_URL}/images/category4.jpg`} alt='groceries'/>
                                </div>
                                <div className='col-7 col-sm-7 font'>
                                    <h>HouseHold Items</h>
                                </div>
                            </div>
                        </div>

            </header>
            
            <div className='container card-container'>
                <div className='row '>
                
                {householdItems}
            
                

                </div>
            </div>
           </div>
            </>       
    )
}

export default HouseHold