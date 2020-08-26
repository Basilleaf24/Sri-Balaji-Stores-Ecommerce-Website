import React, { useState } from 'react';
import {GROCERIES} from '../shared/grocery';
import SearchBar from './searchbar'
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

//const [isCardOpen, setCard] = useState(false);

//function toggleCard() {
  //  setCard(!isCardOpen);
//}

function RenderItem ({item}) {
    return(
        <Card className='cat-card'>
            <CardImg className='img' width='100%' src={item.image} alt={item.name}></CardImg>
            <CardBody>
            <CardText className='card-text'><strong>{item.name}</strong></CardText>
            </CardBody>
        </Card>
    );
}

const Groceries = () => {
    const groceries = GROCERIES.map((item) => {
       
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
                                    <img  className='images' src={`${process.env.PUBLIC_URL}/images/category1.jpg`} alt='groceries'/>
                                </div>
                                <div className='col-7 col-sm-9 font'>
                                    <h>Groceries and Staples</h>
                                </div>
                            </div>
                        </div>

            </header>
            
            <div className='container card-container'>
                <div className='row '>
                
                {groceries}
            
                

                </div>
            </div>
           </div>
     </>              
    )
}

export default Groceries